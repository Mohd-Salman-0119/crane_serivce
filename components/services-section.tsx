import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ConeIcon as Crane, Building, Truck, HardHat } from "lucide-react"

const services = [
  {
    title: "Crane Rental",
    description: "Wide range of cranes for all your lifting needs",
    icon: Crane,
    price: "₹15,000/day",
    details: "Available cranes: 50T, 100T, 200T. Includes maintenance and fuel.",
  },
  {
    title: "Construction Support",
    description: "Expert assistance for construction projects",
    icon: Building,
    price: "Custom Quotes",
    details: "Site planning, material management, and project supervision.",
  },
  {
    title: "Transportation",
    description: "Safe and efficient transportation of heavy equipment",
    icon: Truck,
    price: "₹20/km",
    details: "Flatbed and lowboy trailers available. Insurance included.",
  },
  {
    title: "Skilled Operators",
    description: "Experienced and certified crane operators",
    icon: HardHat,
    price: "₹500/hour",
    details: "Fully certified operators with 5+ years of experience.",
  },
]

export function ServicesSection() {
  return (
    <section className="container mx-auto lg:px-16 md:px-8 px-4 py-16" id="services">
      <h2 className="mb-8 text-center text-3xl font-bold">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <service.icon className="h-10 w-10 text-yellow-500" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4"> 
              <p className="text-muted-foreground">{service.description}</p>
              <p className="text-sm text-muted-foreground">
                {service.details}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}