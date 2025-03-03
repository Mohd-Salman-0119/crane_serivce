import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { COMPANY_DATA } from "@/lib/constants"

export function TeamSection() {
  return (
    <section className="container mx-auto lg:px-16 md:px-8 px-4 py-16" id="team">
      <h2 className="mb-8 text-center text-3xl font-bold">Our Expert Team</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COMPANY_DATA.team.map((member, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="relative mb-4 h-[300px] w-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

