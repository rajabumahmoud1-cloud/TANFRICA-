"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, UserPlus, Users, LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/", label: "Mwanzo", icon: Home },
  { href: "/familia", label: "Familia", icon: UserPlus },
  { href: "/kijana", label: "Kijana", icon: Users },
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Family Tz">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 font-bold text-white">
            F
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold text-foreground">Family</span>
            <span className="text-[10px] font-semibold tracking-wider text-primary">TZ</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-1.5">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors sm:px-3.5",
                    active
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
