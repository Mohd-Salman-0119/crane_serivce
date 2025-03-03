import { COMPANY_DATA } from "@/lib/constants"

function BulletPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <div className="h-2 w-2 translate-y-2 rounded-full bg-primary" />
      <p>{text}</p>
    </li>
  )
}

export function MissionVisionSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{COMPANY_DATA.mission.title}</h2>
          <ul className="space-y-4">
            {COMPANY_DATA.mission.points.map((point, index) => (
              <BulletPoint key={index} text={point} />
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{COMPANY_DATA.vision.title}</h2>
          <ul className="space-y-4">
            {COMPANY_DATA.vision.points.map((point, index) => (
              <BulletPoint key={index} text={point} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

