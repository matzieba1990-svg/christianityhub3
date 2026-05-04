import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChristianityHub – Wspólnota Katolicka',
  description: 'Portal łączący katolików. Prośby o modlitwę, biblioteka modlitw, kalendarz liturgiczny.',
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'ChristianityHub' },
}

export const viewport: Viewport = {
  themeColor: '#1a0a2e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="dark">
      <body className={geist.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
