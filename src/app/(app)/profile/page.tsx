'use client'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { LogOut, ChevronRight, BookOpen, HandHeart, Users, Settings } from 'lucide-react'

export default function ProfilePage() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="pb-6">
        <PageHeader title="Profil" />
        <div className="px-4 flex flex-col items-center justify-center py-16 text-center">
          <div className="text-6xl mb-6">✝️</div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>Witaj, Pielgrzymie</h2>
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

  const stats = [
    { label: 'Modlitwy podjęte', value: '47', icon: HandHeart, color: '#c9a227' },
    { label: 'Prośby złożone', value: '3', icon: BookOpen, color: '#7c3aed' },
    { label: 'Wspólnoty', value: '2', icon: Users, color: '#059669' },
  ]

  const menuItems = [
    { href: '/requests', icon: HandHeart, label: 'Moje prośby o modlitwę', desc: '3 aktywne' },
    { href: '/prayers', icon: BookOpen, label: 'Ulubione modlitwy', desc: 'Różaniec, Koronka' },
    { href: '/community', icon: Users, label: 'Moje wspólnoty', desc: '2 grupy' },
    { href: '/settings', icon: Settings, label: 'Ustawienia', desc: 'Powiadomienia, prywatność' },
  ]

  return (
    <div className="pb-6">
      <PageHeader
        title="Profil"
        right={
          <button onClick={() => signOut({ callbackUrl: '/login' })}
            className="w-9 h-9 flex items-center justify-center rounded-full"
            style={{ background: 'rgba(239,68,68,0.12)', color: '#ef4444' }}>
            <LogOut size={16} />
          </button>
        }
      />

      <div className="px-4">
        {/* Avatar & name */}
        <div className="flex flex-col items-center mb-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-3"
            style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: 'white', boxShadow: '0 4px 15px rgba(201,162,39,0.3)' }}>
            {session.user?.image
              ? <img src={session.user.image} className="w-full h-full rounded-full object-cover" alt="" />
              : initials}
          </div>
          <h2 className="font-bold text-xl" style={{ color: 'var(--text-main)' }}>{session.user?.name || 'Użytkownik'}</h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{session.user?.email}</p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="text-xs px-3 py-1 rounded-full font-semibold"
              style={{ background: 'rgba(201,162,39,0.12)', color: 'var(--gold)', border: '1px solid rgba(201,162,39,0.25)' }}>
              ✝ Wierny
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="card p-3 text-center">
              <Icon size={16} style={{ color, margin: '0 auto 4px' }} />
              <p className="font-black text-2xl" style={{ color }}>{value}</p>
              <p className="text-xs leading-tight" style={{ color: 'var(--text-muted)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="card card-gold p-4 mb-6">
          <p className="text-xs font-semibold uppercase mb-1" style={{ color: 'var(--gold)' }}>Twoje motto</p>
          <p className="text-sm italic" style={{ color: 'var(--text-main)' }}>
            "Wszystko mogę w tym, który mnie umacnia." (Flp 4,13)
          </p>
        </div>

        {/* Menu */}
        <div className="space-y-2">
          {menuItems.map(({ href, icon: Icon, label, desc }) => (
            <Link key={href} href={href}
              className="card prayer-card flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(201,162,39,0.1)' }}>
                <Icon size={18} style={{ color: 'var(--gold-dark)' }} />
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
            style={{ color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.03)' }}>
            <LogOut size={18} />
            Wyloguj się z urządzenia
          </button>
        </div>
      </div>
    </div>
  )
}
