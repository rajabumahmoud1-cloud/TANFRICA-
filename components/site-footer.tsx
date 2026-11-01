export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-sm font-bold text-white">
            F
          </span>
          <span className="flex items-baseline gap-2">
            <span className="font-bold text-foreground">Family</span>
            <span className="text-[10px] font-semibold tracking-wider text-primary">TZ</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Family Tz. Haki zote zimehifadhiwa.
        </p>
      </div>
    </footer>
  )
}
