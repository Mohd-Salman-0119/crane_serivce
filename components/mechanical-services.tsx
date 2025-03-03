import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    name: "Pipe Line",
    description: "We provide best quality service in pipe line fabrication, installation and testing",
    icon: "🔧",
    image: "https://www.tuv.com/content-media-files/master-content/services/industrial-services/0042-tuv-rheinland-pipeline-technology/tuv-rheinland-pipeline-technology.jpg",
  },
  {
    name: "Structural Steel Works",
    description:
      "We are providing quality fabrication steel metal structures to our clients. E.g. Sheds, Walk Way, FOB, FEB, Towers, etc.",
    icon: "🏗️",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjS9ALTPs_l-PKo5n0ufih6cOizDNoQUWUMw&s",
  },
  {
    name: "MS Tanks",
    description: "We provide best tank fabrication service with experienced and dedicated team on field.",
    icon: "🛢️",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/4/KR/KE/MS/61004868/mild-steel-chemical-tank-500x500.jpg",
  },
]

export function MechanicalServices() {
  return (
    <section id="mechanical-services" className="container mx-auto lg:px-16 md:px-8 px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Mechanical Engineering Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <span className="mr-2 text-3xl">{service.icon}</span>
                {service.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 w-full mb-4">
                <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover rounded-md" />
              </div>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}