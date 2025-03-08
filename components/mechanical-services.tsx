import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { COMPANY_DATA } from "@/lib/constants"

export function MechanicalServices() {
  return (
    <section id="mechanical-services" className="container mx-auto lg:px-16 md:px-8 px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Mechanical Engineering Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COMPANY_DATA.mechanicalServices.map((service, index) => (
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