import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { COMPANY_DATA } from "@/lib/constants"

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16" id="review">
      <div className="container mx-auto lg:px-16 md:px-8 px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">What Our Clients Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {COMPANY_DATA.testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-600 text-yellow-600" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-600">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

