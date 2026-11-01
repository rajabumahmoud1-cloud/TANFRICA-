import Link from "next/link"
import { LayoutGrid, ArrowRight } from "lucide-react"

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-6 py-14 text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold sm:text-4xl">Tayari Kuanza?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/90">
          Jisajili leo kama familia au kijana na kuwekezewe kwenye jukwaa la Family Tz.
        </p>
        <Link
          href="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-emerald-700 shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <LayoutGrid className="h-5 w-5" aria-hidden="true" />
          Tazama Dashboard
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
