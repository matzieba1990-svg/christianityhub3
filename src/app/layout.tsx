import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-cormorant' 
})

export const metadata: Metadata = {
  title: 'ChristianityHub – Wspólnota Katolicka',
  description: 'Portal łączący katolików. Prośby o modlitwę, biblioteka modlitw, kalendarz liturgiczny.',
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'ChristianityHub' },
}

export const viewport: Viewport = {
  themeColor: '#FAF6F0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

import CookieBanner from '@/components/CookieBanner'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <Providers>{children}</Providers>
        <CookieBanner />
      </body>
    </html>
  )
}
