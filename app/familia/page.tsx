"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { Home, CheckCircle2, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { MIKOA } from "@/lib/mikoa"

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

export default function FamiliaPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main>
        <PageHero icon={Home} title="Fomu ya Familia" subtitle="Tafuta mlezi kwa ajili ya watoto wako" />
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-foreground">Asante! Fomu imepokelewa.</h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Tumepokea maombi yako. Tazama orodha ya walezi waliopo kwenye Dashboard ili kupata
              mlezi anayekufaa.
            </p>
            <Link
              href="/dashboard"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground"
            >
              Tazama Dashboard
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      <PageHero icon={Home} title="Fomu ya Familia" subtitle="Tafuta mlezi kwa ajili ya watoto wako" />

      <form onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-6 px-4 py-12">
        <div>
          <label htmlFor="jina" className={labelClass}>
            Jina la Familia <span className="text-destructive">*</span>
          </label>
          <input id="jina" name="jina" required placeholder="Mfano: Familia ya Juma" className={inputClass} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="mkoa" className={labelClass}>
              Mkoa <span className="text-destructive">*</span>
            </label>
            <select id="mkoa" name="mkoa" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Chagua mkoa
              </option>
              {MIKOA.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="wilaya" className={labelClass}>
              Wilaya <span className="text-destructive">*</span>
            </label>
            <input id="wilaya" name="wilaya" required placeholder="Mfano: Ilala" className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="posho" className={labelClass}>
            Posho (TSh kwa mwezi) <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <input
              id="posho"
              name="posho"
              type="number"
              required
              placeholder="Mfano: 200000"
              className={`${inputClass} pr-14`}
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              TSh
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="simu" className={labelClass}>
            Namba ya Simu
          </label>
          <input id="simu" name="simu" placeholder="Mfano: 0712 345 678" className={inputClass} />
        </div>

        <div>
          <label htmlFor="maelezo" className={labelClass}>
            Maelezo Ziada
          </label>
          <textarea
            id="maelezo"
            name="maelezo"
            rows={4}
            placeholder="Mfano: Tunahitaji mlezi kwa watoto wawili wenye umri wa miaka 3 na 5..."
            className={`${inputClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
        >
          Wasilisha Fomu
        </button>
      </form>
    </main>
  )
}
