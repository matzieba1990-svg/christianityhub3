'use client'
import { useState } from 'react'
import { PRAYERS } from '@/lib/prayers'
import { notFound } from 'next/navigation'
import PageHeader from '@/components/PageHeader'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { use } from 'react'

export default function PrayerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const prayer = PRAYERS.find(p => p.id === id)
  if (!prayer) notFound()

  return <PrayerDetail prayer={prayer} />
}

function PrayerDetail({ prayer }: { prayer: (typeof PRAYERS)[0] }) {
  const [openPart, setOpenPart] = useState<number | null>(0)
  const [openMystery, setOpenMystery] = useState<number | null>(null)

  return (
    <div className="pb-8">
      <PageHeader title={prayer.name} back />

      <div className="px-4">
        {/* Hero */}
        <div className="card card-gold glow-gold p-5 mb-6 text-center">
          <div className="text-5xl mb-3">{prayer.emoji}</div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-main)' }}>{prayer.intro}</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="pill" style={{ background: 'rgba(201,162,39,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,162,39,0.3)' }}>
              ⏱ {prayer.duration}
            </span>
            {prayer.days && (
              <span className="pill" style={{ background: 'rgba(124,58,237,0.15)', color: '#a855f7', border: '1px solid rgba(124,58,237,0.3)' }}>
                📅 {prayer.days} dni
              </span>
            )}
          </div>
        </div>

        {/* Parts */}
        <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
          Tekst modlitwy
        </h2>
        <div className="space-y-2 mb-6">
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
                <div className="px-4 pb-5" style={{ borderTop: '1px solid rgba(124,58,237,0.15)' }}>
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
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
              Tajemnice różańcowe
            </h2>
            <div className="space-y-2">
              {prayer.mysteries.map((mystery, i) => (
                <div key={i} className="card overflow-hidden">
                  <button className="w-full flex items-center justify-between p-4 text-left"
                    onClick={() => setOpenMystery(openMystery === i ? null : i)}>
                    <span className="font-semibold text-sm" style={{ color: 'var(--gold)' }}>{mystery.name}</span>
                    {openMystery === i
                      ? <ChevronUp size={16} style={{ color: 'var(--text-muted)' }} />
                      : <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
                    }
                  </button>
                  {openMystery === i && (
                    <div className="px-4 pb-4" style={{ borderTop: '1px solid rgba(201,162,39,0.15)' }}>
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
