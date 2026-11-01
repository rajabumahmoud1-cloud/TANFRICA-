"use client"

import { useMemo, useState } from "react"
import { Users, Search, MapPin, Phone, ShieldCheck } from "lucide-react"
import { useRegistrations } from "@/components/registrations-provider"
import { MIKOA } from "@/lib/mikoa"

export default function DashboardPage() {
  const { walezi } = useRegistrations()
  const [query, setQuery] = useState("")
  const [mkoa, setMkoa] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return walezi.filter((w) => {
      const matchesQuery =
        !q || w.jina.toLowerCase().includes(q) || w.nida.toLowerCase().includes(q)
      const matchesMkoa = !mkoa || w.mkoa === mkoa
      return matchesQuery && matchesMkoa
    })
  }, [walezi, query, mkoa])

  return (
    <main>
      <section className="bg-gradient-to-b from-slate-950 to-emerald-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Dashboard ya Walezi</h1>
          <p className="mt-2 text-white/60">Orodha ya walezi (Au Pairs) waliopo Tanzania</p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500/15 px-3 py-1.5 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/20">
            <Users className="h-4 w-4" aria-hidden="true" />
            Jumla: {walezi.length} walezi
          </span>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tafuta kwa jina au NIDA..."
              aria-label="Tafuta kwa jina au NIDA"
              className="w-full rounded-xl border border-input bg-background py-3 pl-11 pr-4 text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
            />
          </div>
          <select
            value={mkoa}
            onChange={(e) => setMkoa(e.target.value)}
            aria-label="Chuja kwa mkoa"
            className="rounded-xl border border-input bg-background px-4 py-3 text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25 sm:w-56"
          >
            <option value="">Mikoa yote</option>
            {MIKOA.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 flex flex-col items-center text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Users className="h-9 w-9" aria-hidden="true" />
            </span>
            <p className="mt-5 text-muted-foreground">
              {walezi.length === 0
                ? "Bado hakuna walezi waliosajiliwa."
                : "Hakuna walezi wanaolingana na utafutaji wako."}
            </p>
          </div>
        ) : (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((w) => (
              <li
                key={w.id}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-lg font-bold text-white">
                    {w.jina.charAt(0).toUpperCase() || "?"}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-foreground">{w.jina}</p>
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {w.mkoa}
                    </p>
                  </div>
                </div>

                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <dt className="sr-only">NIDA</dt>
                    <dd className="truncate">{w.nida}</dd>
                  </div>
                  {w.simu && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <dt className="sr-only">Simu</dt>
                      <dd>{w.simu}</dd>
                    </div>
                  )}
                </dl>

                {w.uzoefu && (
                  <p className="mt-4 line-clamp-3 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                    {w.uzoefu}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
