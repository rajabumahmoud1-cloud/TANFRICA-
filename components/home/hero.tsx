import Link from "next/link"
import Image from "next/image"
import { MapPin, UserPlus, Users, ArrowRight, Heart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/60 via-background to-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Kwa ajili ya soko la Tanzania
          </span>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            Unganisha Familia na <span className="text-primary">Walezi</span> nchini Tanzania
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Family Tz ni jukwaa linalounganisha familia zinazotafuta walezi wa watoto na
            vijana wanaotaka kazi ya ulezi. Jiunge leo na upate mlezi au kazi ya ulezi.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/familia"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <UserPlus className="h-5 w-5" aria-hidden="true" />
              Ni Familia
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/kijana"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Users className="h-5 w-5" aria-hidden="true" />
              Ni Kijana
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/familia-hero.png"
              alt="Familia na watoto wakicheza pamoja nyumbani"
              width={720}
              height={560}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-lg">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
              <Heart className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-bold text-foreground">100%</p>
              <p className="text-xs text-muted-foreground">Kwa ajili ya watoto wa Tanzania</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
