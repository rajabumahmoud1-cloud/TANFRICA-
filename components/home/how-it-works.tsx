import { UserPlus, LayoutGrid, Heart } from "lucide-react"

const STEPS = [
  {
    icon: UserPlus,
    title: "1. Jisajili",
    text: "Familia au kijana jaza fomu na uweke maelezo yako.",
  },
  {
    icon: LayoutGrid,
    title: "2. Tafuta",
    text: "Tazama orodha ya walezi waliopo Tanzania kwenye Dashboard.",
  },
  {
    icon: Heart,
    title: "3. Unganishwa",
    text: "Pata mlezi au kazi inayokufaa kwa urahisi.",
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Jinsi Family Tz Inavyofanya Kazi</h2>
        <p className="mt-3 text-muted-foreground">Hatua rahisi tatu za kupata mlezi au kazi ya ulezi</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {STEPS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
