import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { COMPANY_DATA } from "@/lib/constants"


export function BuildingTypes() {
  return (
    <section id="building-types" className="container mx-auto lg:px-16 md:px-8 px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Types of Buildings We Service</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COMPANY_DATA.buildingTypes.map((type, index) => (
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