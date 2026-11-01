"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { Users, CheckCircle2, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { useRegistrations } from "@/components/registrations-provider"
import { MIKOA } from "@/lib/mikoa"

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

export default function KijanaPage() {
  const { addKijana } = useRegistrations()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    addKijana({
      jina: String(data.get("jina") ?? ""),
      nida: String(data.get("nida") ?? ""),
      mkoa: String(data.get("mkoa") ?? ""),
      simu: String(data.get("simu") ?? ""),
      uzoefu: String(data.get("uzoefu") ?? ""),
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main>
        <PageHero icon={Users} title="Fomu ya Kijana" subtitle="Tafuta kazi ya ulezi (Au Pair)" />
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-foreground">Umesajiliwa kikamilifu!</h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Maelezo yako sasa yanaonekana kwenye Dashboard ya walezi. Familia zitaweza kukupata na
              kukuunganisha na kazi ya ulezi.
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
      <PageHero icon={Users} title="Fomu ya Kijana" subtitle="Tafuta kazi ya ulezi (Au Pair)" />

      <form onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-6 px-4 py-12">
        <div>
          <label htmlFor="jina" className={labelClass}>
            Jina Kamili <span className="text-destructive">*</span>
          </label>
          <input id="jina" name="jina" required placeholder="Mfano: Amina Juma" className={inputClass} />
        </div>

        <div>
          <label htmlFor="nida" className={labelClass}>
            Namba ya NIDA <span className="text-destructive">*</span>
          </label>
          <input
            id="nida"
            name="nida"
            required
            placeholder="Mfano: 19900512-12345-00001-32"
            className={inputClass}
          />
          <p className="mt-1.5 text-sm text-muted-foreground">
            Namba ya Kitambulisho cha Taifa kwa ajili ya usalama
          </p>
        </div>

        <div>
          <label htmlFor="mkoa" className={labelClass}>
            Mkoa Uliopo Sasa <span className="text-destructive">*</span>
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
          <label htmlFor="simu" className={labelClass}>
            Namba ya Simu
          </label>
          <input id="simu" name="simu" placeholder="Mfano: 0712 345 678" className={inputClass} />
        </div>

        <div>
          <label htmlFor="uzoefu" className={labelClass}>
            Uzoefu wa Ulezi
          </label>
          <textarea
            id="uzoefu"
            name="uzoefu"
            rows={4}
            placeholder="Mfano: Nimewatunza watoto kwa miaka 2, naweza kupika na kufundisha kusoma..."
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
