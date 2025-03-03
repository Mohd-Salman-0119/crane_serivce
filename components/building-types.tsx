import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const buildingTypes = [
  { name: "Warehouse", icon: "🏭", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dDi8CqH1kgvFKQLDoH4v5qLZBLaXQhpmLQ&s" },
  { name: "Industrial Building", icon: "🏗️", image: "https://constructionsquare.in/wp-content/uploads/2023/09/large-and-old-brick-industrial-building-175426710-98e94f0565724b5eb938d78727e0bfa5.jpg" },
  { name: "Commercial Building", icon: "🏢", image: "https://destinationcompress.s3.ap-south-1.amazonaws.com/4ffd98f8-6743-4330-aba1-3a67855583e6.jpg" },
  { name: "Office Building", icon: "🏛️", image: "https://airfixture.com/hubfs/pexels-pixabay-269077.jpg" },
  { name: "Showrooms", icon: "🏪", image: "https://imgd7.aeplcdn.com/370x208/n/7tcdjeb_1765923.jpg?q=80" },
  { name: "Car Parking", icon: "🅿️", image: "https://www.bashyamgroup.com/static/c4b79cfc67e10134b5ffee1486059545/14b42/planning-for-your-vehicle-parking.jpg" },
]

export function BuildingTypes() {
  return (
    <section id="building-types" className="container mx-auto lg:px-16 md:px-8 px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Types of Buildings We Service</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {buildingTypes.map((type, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <span className="mr-2 text-3xl">{type.icon}</span>
                {type.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 w-full mb-4">
                <Image src={type.image || "/placeholder.svg"} alt={type.name} fill className="object-cover rounded-md" />
              </div>
              <p className="text-muted-foreground">
                We provide expert crane services for {type.name.toLowerCase()} projects.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}