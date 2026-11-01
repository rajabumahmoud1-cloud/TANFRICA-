import type { LucideIcon } from "lucide-react"

export function PageHero({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon
  title: string
  subtitle: string
}) {
  return (
    <div className="bg-gradient-to-b from-accent/70 to-background">
      <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 py-10">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-sm">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{title}</h1>
          <p className="mt-1 text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
