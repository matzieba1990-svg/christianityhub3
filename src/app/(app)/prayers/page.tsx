'use client'
import { useState } from 'react'
import { PRAYERS, CATEGORIES } from '@/lib/prayers'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { Clock, ChevronRight } from 'lucide-react'

export default function PrayersPage() {
  const [cat, setCat] = useState('all')

  const filtered = cat === 'all' ? PRAYERS : PRAYERS.filter(p => p.category === cat)

  return (
    <div className="pb-6">
      <PageHeader title="Biblioteka modlitw" subtitle="Gotowe teksty modlitw" />

      {/* Category filter */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setCat(c.id)}
              className="flex-shrink-0 pill transition-all"
              style={{
                scrollSnapAlign: 'start',
                background: cat === c.id ? 'linear-gradient(135deg,#7c3aed,#a855f7)' : 'rgba(255,255,255,0.06)',
                color: cat === c.id ? 'white' : 'var(--text-muted)',
                border: cat === c.id ? 'none' : '1px solid rgba(255,255,255,0.08)',
                padding: '8px 14px',
                fontSize: '13px',
              }}>
              {c.emoji} {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Prayer list */}
      <div className="px-4 space-y-3">
        {filtered.map(prayer => (
          <Link key={prayer.id} href={`/prayers/${prayer.id}`}
            className="card prayer-card flex items-center gap-4 p-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)' }}>
              {prayer.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-sm leading-tight" style={{ color: 'var(--text-main)' }}>
                  {prayer.name}
                </p>
                {prayer.days && (
                  <span className="pill flex-shrink-0 text-xs"
                    style={{ background: 'rgba(201,162,39,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,162,39,0.3)' }}>
                    {prayer.days} dni
                  </span>
                )}
              </div>
              <p className="text-xs mt-1 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                {prayer.description}
              </p>
              <div className="flex items-center gap-1 mt-2">
                <Clock size={11} style={{ color: 'var(--text-muted)' }} />
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{prayer.duration}</span>
              </div>
            </div>
            <ChevronRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
          </Link>
        ))}
      </div>
    </div>
  )
}
