import { COMPANY_DATA } from "@/lib/constants"

export function StatsSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {COMPANY_DATA.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold">{stat.number}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

