'use client'
import { useState, useEffect } from 'react'
import { PRAYERS } from '@/lib/prayers'
import { notFound, useRouter } from 'next/navigation'
import PageHeader from '@/components/PageHeader'
import { ChevronDown, ChevronUp, CheckCircle2, Circle } from 'lucide-react'
import { use } from 'react'
import { useSession } from 'next-auth/react'

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
        <div className="card card-gold glow-gold p-6 mb-6 text-center overflow-hidden">
          <div className="p-0">
            <h3 className="font-mystic text-lg font-bold mb-2" style={{ color: 'var(--gold-dark)' }}>{prayer.description}</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-main)' }}>{prayer.intro}</p>
            <div className="flex items-center justify-center gap-4">
              <span className="pill" style={{ background: 'white', color: 'var(--gold)', border: '1px solid var(--gold)' }}>
                ⏱ {prayer.duration}
              </span>
              {prayer.days && (
                <span className="pill" style={{ background: 'var(--gold)', color: 'white', border: 'none' }}>
                   {prayer.days} dni
                </span>
              )}
            </div>
          </div>
        </div>

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
