import { MapPin, ShieldCheck, Heart } from "lucide-react"

const REASONS = [
  { icon: MapPin, title: "Kote Tanzania", text: "Walezi kutoka mikoa yote ya Tanzania." },
  { icon: ShieldCheck, title: "Usalama", text: "Kila kijana anatambulishwa kwa NIDA." },
  { icon: Heart, title: "Kwa Upendo", text: "Tunajali ustawi wa watoto na familia." },
]

export function WhyUs() {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-emerald-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Kwa Nini Family Tz?</h2>
          <p className="mt-3 text-white/60">Faida za kutumia jukwaa letu</p>
        </div>

        <div className="mt-12 grid gap-10 text-center md:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/20">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 max-w-xs text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
