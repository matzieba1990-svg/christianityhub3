'use client'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import PageHeader from '@/components/PageHeader'
import { LogOut, ChevronRight, BookOpen, HandHeart, Users, Settings, Heart } from 'lucide-react'
import { PRAYERS } from '@/lib/prayers'
import PrayerStats from '@/components/PrayerStats'

export default function ProfilePage() {
  const { data: session } = useSession()
  const [stats, setStats] = useState({ prayers: 0, requests: 0, communities: 0 })
  const [loading, setLoading] = useState(true)
  const [activePrayers, setActivePrayers] = useState<any[]>([])
  const [showActive, setShowActive] = useState(false)

  // Force unique instance per session to kill sticky cache
  const instanceKey = useMemo(() => session?.user?.id || 'guest', [session])

  useEffect(() => {
    if (session) {
      // Stats
      fetch('/api/user/stats')
        .then(res => res.json())
        .then(data => {
          if (data.stats) setStats(data.stats)
        })
        .catch(console.error)
        .finally(() => setLoading(false))
      
      // Active Prayers
      fetch('/api/user/active-prayers')
        .then(res => res.json())
        .then(data => {
          if (data.activePrayers) setActivePrayers(data.activePrayers)
        })
        .catch(console.error)
    }
  }, [session])

  if (!session) {
    return (
      <div className="pb-6" key="profile-guest">
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

  return (
    <div className="pb-6" key={`profile-${instanceKey}`}>
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

        {/* New Stats Component */}
        <PrayerStats />

        {/* Menu & Active Prayers Tracker */}
        <div className="space-y-2">
          {/* Active Prayers Dropdown (This is the section that was missing/cached) */}
          <div className="card overflow-hidden bg-white border-gold/10">
            <button 
              onClick={(e) => {
                e.preventDefault();
                setShowActive(!showActive);
              }}
              className="w-full flex items-center gap-4 p-4 text-left transition-colors hover:bg-gold/5"
              id="prayer-path-toggle"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#FAF6F0', color: 'var(--gold)' }}>
                <BookOpen size={18} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: 'var(--text-main)' }}>Moja droga modlitwy</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {activePrayers.length > 0 ? `${activePrayers.length} aktywnych modlitw` : 'Brak aktywnych modlitw'}
                </p>
              </div>
              <div className={`transition-transform duration-300 ${showActive ? 'rotate-180' : ''}`}>
                <ChevronRight size={16} className="text-text-muted" />
              </div>
            </button>

            {showActive && (
              <div className="px-4 pb-4 border-t border-border animate-fade-in bg-gold/5">
                {activePrayers.length === 0 ? (
                  <div className="py-4 text-center">
                    <p className="text-xs text-text-muted italic mb-3">Nie masz jeszcze żadnych aktywnych modlitw wielodniowych.</p>
                    <Link href="/prayers" className="text-xs font-bold text-gold underline">Przejdź do biblioteki</Link>
                  </div>
                ) : (
                  <div className="space-y-3 pt-4">
                    {activePrayers.map((ap: any) => {
                      const p = PRAYERS.find(pr => pr.id === ap.prayerId)
                      if (!p) return null
                      return (
                        <Link key={ap.prayerId} href={`/prayers/${p.id}`} className="block p-3 rounded-xl border border-border bg-white hover:border-gold/30 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-bold text-text-main">{p.name}</span>
                            <span className="text-[10px] font-black text-gold uppercase">Dzień {ap.lastDay}</span>
                          </div>
                          {/* Progress Dots */}
                          <div className="flex flex-wrap gap-1">
                            {Array.from({ length: p.days || 1 }).map((_, i) => (
                              <div 
                                key={i} 
                                className="w-2 h-2 rounded-full" 
                                style={{ 
                                  background: ap.completedDays.includes(i + 1) ? 'var(--gold)' : 'var(--bg-primary)',
                                  border: '1px solid var(--border)'
                                }} 
                              />
                            ))}
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          <Link href="/requests" className="card prayer-card flex items-center gap-4 p-4 bg-white">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#FAF6F0', color: 'var(--gold)' }}>
              <HandHeart size={18} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm" style={{ color: 'var(--text-main)' }}>Moje prośby o modlitwę</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{stats.requests} aktywnych</p>
            </div>
            <ChevronRight size={16} className="text-text-muted" />
          </Link>

          <Link href="/community" className="card prayer-card flex items-center gap-4 p-4 bg-white">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#FAF6F0', color: 'var(--gold)' }}>
              <Users size={18} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm" style={{ color: 'var(--text-main)' }}>Moje wspólnoty</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{stats.communities} grup</p>
            </div>
            <ChevronRight size={16} className="text-text-muted" />
          </Link>

          <Link href="/settings" className="card prayer-card flex items-center gap-4 p-4 bg-white">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#FAF6F0', color: 'var(--gold)' }}>
              <Settings size={18} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm" style={{ color: 'var(--text-main)' }}>Ustawienia</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Powiadomienia, prywatność</p>
            </div>
            <ChevronRight size={16} className="text-text-muted" />
          </Link>
        </div>

        {/* Stripe Donation Section */}
        <div className="mt-8 mb-4">
          <div className="card p-6 bg-white border-gold/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-gold">
                <Heart size={80} fill="currentColor" />
            </div>
            <h3 className="text-sm font-bold text-text-main mb-2 font-mystic">Wesprzyj rozwój aplikacji</h3>
            <p className="text-xs text-text-muted mb-6 leading-relaxed">
                Twoja ofiara pomaga nam utrzymać serwery i tworzyć nowe narzędzia modlitewne dla tysięcy wiernych. Bóg zapłać za każde wsparcie!
            </p>
            
            <div className="flex justify-center min-h-[44px]">
                <div dangerouslySetInnerHTML={{ __html: `
                    <stripe-buy-button
                        buy-button-id="buy_btn_1TTm6UFxZrs8CnTNkad76qEo"
                        publishable-key="pk_live_51TAGOrFxZrs8CnTNwe1dL9P7z2lCaqTuMIE5N3cbbxxRWsb3mxxTHEBsvmhR5WnRcHgLriAsuRVSHQ2sebbIIdkD00RLzqowhh"
                    ></stripe-buy-button>
                ` }} />
            </div>
          </div>
        </div>

        {/* Big Logout Button */}
        <div className="mb-4">
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

