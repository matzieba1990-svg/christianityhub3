'use client'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { HandHeart, BookOpen, Calendar, Users, ChevronRight, LogOut, Quote, Heart } from 'lucide-react'
import { getLiturgyForDate } from '@/lib/liturgy'

const quickLinks = [
  { href: '/requests', icon: HandHeart, label: 'Prośby o modlitwę', desc: 'Złóż prośbę lub módl się za innych', color: '#c9a227' },
  { href: '/prayers', icon: BookOpen, label: 'Biblioteka modlitw', desc: 'Różaniec, koronka, litanie…', color: '#c9a227' },
  { href: '/calendar', icon: Calendar, label: 'Kalendarz liturgiczny', desc: 'Patron dnia, okres roku kościelnego', color: '#c9a227' },
  { href: '/community', icon: Users, label: 'Wspólnoty', desc: 'Grupy parafialne i dewocyjne', color: '#c9a227' },
]

export default function DashboardPage() {
  const { data: session } = useSession()
  const name = session?.user?.name?.split(' ')[0] || 'Bracie/Siostro'
  const now = new Date()
  const dateStr = now.toISOString().split('T')[0]
  const liturgy = getLiturgyForDate(dateStr)
  
  const hour = now.getHours()
  const greeting = hour < 12 ? 'Dzień dobry' : hour < 18 ? 'Dobry dzień' : 'Dobry wieczór'

  return (
    <div className="px-4 pt-4 pb-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>{greeting},</p>
          <h1 className="text-2xl font-bold font-mystic" style={{ color: 'var(--gold-dark)' }}>{name}</h1>
        </div>
        <button 
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'white', color: 'var(--text-muted)', border: '1px solid var(--border)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}
          title="Wyloguj się"
        >
          <LogOut size={16} />
        </button>
      </div>

      {/* Liturgy card */}
      {liturgy && (
        <div className="card card-gold glow-gold p-5 mb-6 relative overflow-hidden">
          <div className="cross-bg text-8xl font-bold" style={{ top: '-10px', right: '-10px', opacity: 0.04 }}>✝</div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Liturgia Dnia
            </p>
            <span className="px-2 py-0.5 rounded text-[8px] font-bold uppercase" 
              style={{ background: liturgy.color, color: liturgy.color === 'white' ? '#c9a227' : 'white', border: '1px solid var(--gold)' }}>
              {liturgy.season}
            </span>
          </div>
          <h2 className="text-sm font-bold mb-1" style={{ color: 'var(--text-main)' }}>{liturgy.saint}</h2>
          <div className="mt-4 p-4 rounded-xl bg-white/50 border border-gold/10">
            <div className="flex gap-2 mb-2">
              <Quote size={14} className="text-gold flex-shrink-0" />
              <p className="text-xs font-bold" style={{ color: 'var(--gold-dark)' }}>Ewangelia ({liturgy.gospel.source})</p>
            </div>
            <p className="text-sm leading-relaxed italic" style={{ color: 'var(--text-main)' }}>
              {liturgy.gospel.text}
            </p>
          </div>
        </div>
      )}

      {/* Quick actions */}
      <div className="space-y-3">
        {quickLinks.map(({ href, icon: Icon, label, desc, color }) => (
          <Link key={href} href={href}
            className="card prayer-card flex items-center gap-4 p-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
              <Icon size={22} style={{ color }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm" style={{ color: 'var(--text-main)' }}>{label}</p>
              <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </div>
            <ChevronRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
          </Link>
        ))}
      </div>

      {/* Prayer reminder */}
      <div className="card mt-6 p-4 flex items-center gap-3"
        style={{ borderColor: 'var(--gold)', background: 'white' }}>
        <div className="w-8 h-8 rounded-full bg-[#FAF6F0] flex items-center justify-center" style={{ color: 'var(--gold)' }}>
          <Calendar size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>Czas na Anioł Pański</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>12:00, 18:00 i 21:00 – chwila modlitwy</p>
        </div>
      </div>

      {/* Support Link */}
      <Link href="/support" className="card mt-4 p-4 flex items-center gap-3 bg-gold/5 border-dashed border-gold/40 hover:bg-gold/10 transition-colors">
        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
          <Heart size={16} fill="currentColor" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-text-main">Wesprzyj rozwój aplikacji</p>
          <p className="text-[10px] text-text-muted italic">Dziękujemy za każdą cegiełkę!</p>
        </div>
        <ChevronRight size={14} className="text-gold" />
      </Link>
    </div>
  )
}
