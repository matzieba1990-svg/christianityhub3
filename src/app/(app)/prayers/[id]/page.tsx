'use client'
import { useState, useEffect } from 'react'
import { PRAYERS } from '@/lib/prayers'
import { notFound, useRouter } from 'next/navigation'
import PageHeader from '@/components/PageHeader'
import { ChevronDown, ChevronUp, CheckCircle2, Circle, Clock, Calendar, Smartphone } from 'lucide-react'
import { use } from 'react'
import { useSession } from 'next-auth/react'
import PrayerMode from '@/components/PrayerMode'

export default function PrayerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const prayer = PRAYERS.find(p => p.id === id)
  if (!prayer) notFound()

  return <PrayerDetail prayer={prayer} />
}

function PrayerDetail({ prayer }: { prayer: (typeof PRAYERS)[0] }) {
  const { data: session } = useSession()
  const [openPart, setOpenPart] = useState<number | null>(0)
  const [openMystery, setOpenMystery] = useState<number | null>(null)
  const [completedDays, setCompletedDays] = useState<number[]>([])
  const [loading, setLoading] = useState(false)
  const [showMode, setShowMode] = useState(false)

  // Fetch progress if logged in
  useEffect(() => {
    if (session && prayer.days) {
      fetch(`/api/prayers/progress?prayerId=${prayer.id}`)
        .then(res => res.json())
        .then(data => {
          if (data.completedDays) setCompletedDays(data.completedDays)
        })
        .catch(console.error)
    }
  }, [session, prayer.id, prayer.days])

  const toggleDay = async (day: number) => {
    if (!session) {
      alert('Zaloguj się, aby zapisywać postępy modlitwy.')
      return
    }
    
    setLoading(true)
    const isCompleted = completedDays.includes(day)
    const newDays = isCompleted 
      ? completedDays.filter(d => d !== day)
      : [...completedDays, day]
    
    setCompletedDays(newDays)

    try {
      await fetch('/api/prayers/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prayerId: prayer.id, dayNumber: day, completed: !isCompleted })
      })
    } catch (err) {
      console.error(err)
      // Rollback on error
      setCompletedDays(completedDays)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pb-8">
      <PageHeader title={prayer.name} back backHref="/prayers" />

      <div className="px-4">
        {/* Hero */}
        <div className="card card-gold glow-gold p-6 mb-6 overflow-hidden">
          <div className="p-0">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                {prayer.days ? <Calendar size={32} className="text-gold-dark" /> : <Clock size={32} className="text-gold-dark" />}
              </div>
            </div>
            <h3 className="font-mystic text-xl font-black text-center mb-2" style={{ color: 'var(--gold-dark)' }}>{prayer.name}</h3>
            <p className="text-sm leading-relaxed text-center mb-6 px-2" style={{ color: 'var(--text-main)' }}>
              {prayer.description}
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="pill shadow-sm" style={{ background: 'white', color: 'var(--gold)', border: '1px solid var(--gold)', fontSize: '11px' }}>
                ⏱ {prayer.duration}
              </span>
              {prayer.days && (
                <span className="pill shadow-sm" style={{ background: 'var(--gold)', color: 'white', border: 'none', fontSize: '11px' }}>
                   {prayer.days} DNI
                </span>
              )}
            </div>

            {(prayer.id.toLowerCase() === 'rozaniec' || prayer.id.toLowerCase() === 'koronka') && (
              <button 
                onClick={() => setShowMode(true)}
                className="btn-primary w-full mt-6 py-5 flex items-center justify-center gap-3 animate-pulse-gold"
              >
                <Smartphone size={22} />
                <span className="text-lg">Rozpocznij modlitwę</span>
              </button>
            )}
          </div>
        </div>

        {showMode && (
            <PrayerMode prayerId={prayer.id} onClose={() => setShowMode(false)} />
        )}

        {/* History & Intentions Section */}
        <div className="space-y-4 mb-8">
          <div className="card p-5 border-l-4 border-gold">
            <h2 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--gold-dark)' }}>
              <CheckCircle2 size={14} /> Historia i pochodzenie
            </h2>
            <p className="text-sm leading-relaxed text-text-main">
              {prayer.history}
            </p>
          </div>

          <div className="card p-5">
            <h2 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
              <Circle size={14} /> Zalecane intencje
            </h2>
            <div className="flex flex-wrap gap-2">
              {prayer.intentions?.map(int => (
                <span key={int} className="px-3 py-1 rounded-lg text-xs font-bold capitalize"
                  style={{ background: 'rgba(0,0,0,0.03)', color: 'var(--text-main)', border: '1px solid var(--border)' }}>
                  {int}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs font-medium italic text-text-muted mb-6 px-2 leading-relaxed">
          {prayer.intro}
        </p>

        {/* Progress Tracker (only for multi-day prayers) */}
        {prayer.days && (
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Twój postęp ({completedDays.length}/{prayer.days} dni)
            </h2>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: prayer.days }).map((_, i) => {
                const day = i + 1
                const isDone = completedDays.includes(day)
                return (
                  <button
                    key={day}
                    onClick={() => toggleDay(day)}
                    disabled={loading}
                    className="aspect-square flex flex-col items-center justify-center rounded-xl border transition-all active:scale-90"
                    style={{
                      background: isDone ? 'var(--gold)' : 'white',
                      borderColor: isDone ? 'var(--gold)' : 'var(--border)',
                      color: isDone ? 'white' : 'var(--text-muted)'
                    }}
                  >
                    <span className="text-[10px] font-bold uppercase mb-0.5 opacity-60">Dzień</span>
                    <span className="text-sm font-black">{day}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Parts */}
        <h2 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
          Tekst modlitwy
        </h2>
        <div className="space-y-2 mb-8">
          {prayer.parts.map((part, i) => (
            <div key={i} className="card overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setOpenPart(openPart === i ? null : i)}>
                <span className="font-semibold text-sm" style={{ color: 'var(--text-main)' }}>{part.title}</span>
                {openPart === i
                  ? <ChevronUp size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                  : <ChevronDown size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                }
              </button>
              {openPart === i && (
                <div className="px-4 pb-5" style={{ borderTop: '1px solid var(--border)' }}>
                  <p className="text-sm leading-relaxed whitespace-pre-line pt-4"
                    style={{ color: 'var(--text-main)', lineHeight: '1.8' }}>
                    {part.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mysteries (for Rosary) */}
        {prayer.mysteries.length > 0 && (
          <>
            <h2 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
              Tajemnice różańcowe
            </h2>
            <div className="space-y-2">
              {prayer.mysteries.map((mystery, i) => (
                <div key={i} className="card overflow-hidden">
                  <button className="w-full flex items-center justify-between p-4 text-left"
                    onClick={() => setOpenMystery(openMystery === i ? null : i)}>
                    <span className="font-semibold text-sm" style={{ color: 'var(--gold-dark)' }}>{mystery.name}</span>
                    {openMystery === i
                      ? <ChevronUp size={16} style={{ color: 'var(--text-muted)' }} />
                      : <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
                    }
                  </button>
                  {openMystery === i && (
                    <div className="px-4 pb-4" style={{ borderTop: '1px solid var(--border)' }}>
                      <ol className="mt-3 space-y-2">
                        {mystery.items.map((item, j) => (
                          <li key={j} className="flex gap-3 text-sm" style={{ color: 'var(--text-main)' }}>
                            <span className="font-bold flex-shrink-0" style={{ color: 'var(--gold)', width: '20px' }}>{j + 1}.</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
