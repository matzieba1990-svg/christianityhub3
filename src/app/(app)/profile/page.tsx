'use client'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { LogOut, ChevronRight, BookOpen, HandHeart, Users, Settings } from 'lucide-react'

export default function ProfilePage() {
  const { data: session } = useSession()
  const [stats, setStats] = useState({ prayers: 0, requests: 0, communities: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (session) {
      fetch('/api/user/stats')
        .then(res => res.json())
        .then(data => {
          if (data.stats) setStats(data.stats)
        })
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [session])

  if (!session) {
    return (
      <div className="pb-6">
        <PageHeader title="Profil" />
        <div className="px-4 flex flex-col items-center justify-center py-16 text-center">
          <div className="text-6xl mb-6 font-mystic text-gold-gradient">✝</div>
          <h2 className="text-2xl font-bold mb-2 font-mystic" style={{ color: 'var(--gold-dark)' }}>Witaj, Pielgrzymie</h2>
          <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            Zaloguj się, aby mieć dostęp do swojego profilu, historii modlitw i prośb.
          </p>
          <Link href="/login" className="btn-gold" style={{ maxWidth: '280px', display: 'block' }}>
            Zaloguj się
          </Link>
          <Link href="/register" className="btn-outline mt-3" style={{ maxWidth: '280px', display: 'block', textAlign: 'center' }}>
            Utwórz konto
          </Link>
        </div>
      </div>
    )
  }

  const initials = session.user?.name?.split(' ').map(n => n[0]).join('').slice(0, 2) || '✝'

  const statItems = [
    { label: 'Modlitwy', value: stats.prayers, icon: HandHeart, color: 'var(--gold)' },
    { label: 'Prośby', value: stats.requests, icon: BookOpen, color: 'var(--gold)' },
    { label: 'Wspólnoty', value: stats.communities, icon: Users, color: 'var(--gold)' },
  ]

  const menuItems = [
    { href: '/requests', icon: HandHeart, label: 'Moje prośby o modlitwę', desc: `${stats.requests} aktywnych` },
    { href: '/prayers', icon: BookOpen, label: 'Moja droga modlitwy', desc: 'Historia i plan' },
    { href: '/community', icon: Users, label: 'Moje wspólnoty', desc: `${stats.communities} grup` },
    { href: '/settings', icon: Settings, label: 'Ustawienia', desc: 'Powiadomienia, prywatność' },
  ]

  return (
    <div className="pb-6">
      <PageHeader title="Profil" />

      <div className="px-4">
        {/* Avatar & name */}
        <div className="flex flex-col items-center mb-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-3"
            style={{ background: 'white', color: 'var(--gold)', border: '2px solid var(--gold)', boxShadow: '0 4px 15px rgba(201,162,39,0.1)' }}>
            {session.user?.image
              ? <img src={session.user.image} className="w-full h-full rounded-full object-cover" alt="" />
              : initials}
          </div>
          <h2 className="font-bold text-xl font-mystic" style={{ color: 'var(--gold-dark)' }}>{session.user?.name || 'Użytkownik'}</h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{session.user?.email}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {statItems.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="card p-3 text-center bg-white">
              <Icon size={16} style={{ color, margin: '0 auto 4px' }} />
              <p className="font-black text-2xl" style={{ color }}>{loading ? '...' : value}</p>
              <p className="text-[10px] uppercase font-bold tracking-tighter" style={{ color: 'var(--text-muted)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="space-y-2">
          {menuItems.map(({ href, icon: Icon, label, desc }) => (
            <Link key={href} href={href}
              className="card prayer-card flex items-center gap-4 p-4 bg-white">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: '#FAF6F0', color: 'var(--gold)' }}>
                <Icon size={18} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: 'var(--text-main)' }}>{label}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
            </Link>
          ))}
        </div>

        {/* Big Logout Button */}
        <div className="mt-8 mb-4">
          <button onClick={() => signOut({ callbackUrl: '/login' })}
            className="w-full card p-4 flex items-center justify-center gap-2 text-sm font-bold"
            style={{ color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)', background: 'white' }}>
            <LogOut size={18} />
            Wyloguj się z urządzenia
          </button>
        </div>
      </div>
    </div>
  )
}

