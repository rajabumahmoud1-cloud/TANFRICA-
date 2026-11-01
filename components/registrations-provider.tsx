"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"

export type Kijana = {
  id: string
  jina: string
  nida: string
  mkoa: string
  simu: string
  uzoefu: string
}

type RegistrationsContextValue = {
  walezi: Kijana[]
  addKijana: (data: Omit<Kijana, "id">) => void
}

const RegistrationsContext = createContext<RegistrationsContextValue | null>(null)

export function RegistrationsProvider({ children }: { children: ReactNode }) {
  const [walezi, setWalezi] = useState<Kijana[]>([])

  const value = useMemo<RegistrationsContextValue>(
    () => ({
      walezi,
      addKijana: (data) =>
        setWalezi((prev) => [{ id: crypto.randomUUID(), ...data }, ...prev]),
    }),
    [walezi],
  )

  return <RegistrationsContext.Provider value={value}>{children}</RegistrationsContext.Provider>
}

export function useRegistrations() {
  const ctx = useContext(RegistrationsContext)
  if (!ctx) throw new Error("useRegistrations must be used within RegistrationsProvider")
  return ctx
}
