'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Home, BookOpen, Calendar, Users, User } from 'lucide-react'

const nav = [
  { href: '/dashboard', icon: Home, label: 'Główna' },
  { href: '/prayers', icon: BookOpen, label: 'Modlitwy' },
  { href: '/calendar', icon: Calendar, label: 'Kalendarz' },
  { href: '/community', icon: Users, label: 'Wspólnota' },
  { href: '/profile', icon: User, label: 'Profil' },
]

export default function BottomNav() {
  const path = usePathname()
  const router = useRouter()
  return (
    <nav className="bottom-nav fixed bottom-0 left-0 right-0 z-50 safe-bottom">
      <div className="flex items-center justify-around px-2 pt-2 pb-1" style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}>
        {nav.map(({ href, icon: Icon, label }) => {
          const active = path.startsWith(href)
          return (
            <button 
              key={href} 
              onClick={() => router.push(href)}
              className="flex flex-col items-center gap-1 px-3 py-1 rounded-2xl transition-all outline-none"
              style={{ color: active ? 'var(--gold-light)' : 'var(--text-muted)' }}>
              <div className="relative pointer-events-none">
                <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
                {active && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: 'var(--gold-light)' }} />
                )}
              </div>
              <span className="text-[10px] font-medium pointer-events-none">{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
