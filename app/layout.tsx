import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { RegistrationsProvider } from '@/components/registrations-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Family Tz — Unganisha Familia na Walezi Tanzania',
  description:
    'Family Tz ni jukwaa linalounganisha familia zinazotafuta walezi wa watoto na vijana wanaotaka kazi ya ulezi nchini Tanzania.',
  generator: 'v0.app',
  verification: {
    google: 'kErabITRFe4tgpYdzPaa_C13-GKrrRSJGOG7V4wSZYc',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#059669',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sw" className="light">
      <body className="antialiased">
        <RegistrationsProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </RegistrationsProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
