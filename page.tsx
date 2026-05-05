'use client'
import { useState, useMemo } from 'react'
import { PRAYERS, CATEGORIES } from '@/lib/prayers'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { Clock, ChevronRight, Search, Calendar } from 'lucide-react'

export default function PrayersPage() {
  const [search, setSearch] = useState('')
  const [selectedCat, setSelectedCat] = useState('all')
  const [lengthFilter, setLengthFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [intentionFilter, setIntentionFilter] = useState('all')

  // Extract all unique intentions
  const allIntentions = useMemo(() => {
    const ints = new Set<string>()
    PRAYERS.forEach(p => p.intentions?.forEach(i => ints.add(i)))
    return ['all', ...Array.from(ints).sort()]
  }, [])

  const filteredAndSorted = useMemo(() => {
    return PRAYERS
      .filter(p => {
        const matchCat = selectedCat === 'all' || p.category === selectedCat
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase())
        
        let matchLength = true
        const dur = parseInt(p.duration) || 0
        if (lengthFilter === 'short') matchLength = dur < 10 && !p.days
        if (lengthFilter === 'medium') matchLength = dur >= 10 && dur <= 30 && !p.days
        if (lengthFilter === 'long') matchLength = dur > 30 || !!p.days

        let matchType = true
        if (typeFilter === 'single') matchType = !p.days
        if (typeFilter === 'novena') matchType = !!p.days

        const matchIntention = intentionFilter === 'all' || p.intentions?.includes(intentionFilter)

        return matchCat && matchSearch && matchLength && matchType && matchIntention
      })
      .sort((a, b) => a.name.localeCompare(b.name, 'pl'))
  }, [selectedCat, search, lengthFilter, typeFilter, intentionFilter])

  return (
    <div className="pb-6">
      <PageHeader title="Biblioteka modlitw" subtitle="Pełna operacyjność duchowa" />

      <div className="px-4 mx-auto max-w-5xl">
        {/* Filter bar — one row on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mt-4 mb-3">
          {/* Search */}
          <div className="relative md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" size={13} />
            <input
              type="text"
              placeholder="Szukaj modlitwy..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-border bg-white outline-none text-text-main transition-colors focus:border-gold"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Selects */}
          <div className="grid grid-cols-2 md:flex md:flex-1 gap-2">
            <select
              className="text-[11px] px-2 py-1.5 rounded-lg border border-border bg-white outline-none text-text-main md:flex-1 cursor-pointer"
              value={lengthFilter}
              onChange={(e) => setLengthFilter(e.target.value)}
            >
              <option value="all">Czas: dowolny</option>
              <option value="short">Krótkie (&lt;10 min)</option>
              <option value="medium">Średnie (10-30 min)</option>
              <option value="long">Długie / Wielodniowe</option>
            </select>

            <select
              className="text-[11px] px-2 py-1.5 rounded-lg border border-border bg-white outline-none text-text-main md:flex-1 cursor-pointer"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">Typ: wszystkie</option>
              <option value="single">Jednorazowe</option>
              <option value="novena">Nowenny / Cykle</option>
            </select>

            <select
              className="text-[11px] px-2 py-1.5 rounded-lg border border-border bg-white outline-none text-text-main md:flex-1 capitalize cursor-pointer col-span-2 md:col-auto"
              value={intentionFilter}
              onChange={(e) => setIntentionFilter(e.target.value)}
            >
              <option value="all">Intencja: wszystkie</option>
              {allIntentions.filter(i => i !== 'all').map(int => (
                <option key={int} value={int}>{int}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories — scroll on mobile, wrap on desktop */}
        <div className="flex gap-1.5 overflow-x-auto md:flex-wrap md:overflow-visible no-scrollbar pb-2 md:pb-0 mb-4"
          style={{ scrollSnapType: 'x mandatory' }}>
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setSelectedCat(c.id)}
              className="flex-shrink-0 transition-all cursor-pointer"
              style={{
                scrollSnapAlign: 'start',
                background: selectedCat === c.id ? 'var(--gold)' : 'white',
                color: selectedCat === c.id ? 'white' : 'var(--text-muted)',
                border: selectedCat === c.id ? '1px solid var(--gold)' : '1px solid var(--border)',
                padding: '4px 11px',
                fontSize: '11px',
                fontWeight: selectedCat === c.id ? 600 : 500,
                borderRadius: '999px',
                boxShadow: selectedCat === c.id ? '0 2px 8px rgba(201,162,39,0.2)' : 'none'
              }}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 mx-auto max-w-5xl space-y-3">
        {filteredAndSorted.length > 0 ? (
          filteredAndSorted.map(prayer => (
            <Link key={prayer.id} href={`/prayers/${prayer.id}`}
              className="card prayer-card flex flex-col gap-3 p-4 hover:border-gold/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-gold flex-shrink-0"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)' }}>
                  {prayer.days ? <Calendar size={20} /> : <Clock size={20} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-bold text-sm leading-tight text-text-main">
                      {prayer.name}
                    </p>
                    <ChevronRight size={16} className="text-text-muted flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-medium text-text-muted uppercase tracking-tight">{prayer.duration}</span>
                    {prayer.days && (
                      <span className="text-[10px] font-bold text-gold-dark uppercase tracking-tight">• {prayer.days} DNI</span>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-text-muted line-clamp-2 leading-relaxed italic">
                "{prayer.description}"
              </p>

              {prayer.intentions && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {prayer.intentions.slice(0, 3).map(int => (
                    <span key={int} className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: 'rgba(201,162,39,0.05)', color: 'var(--gold-dark)', border: '1px solid rgba(201,162,39,0.1)' }}>
                      {int}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-text-muted text-sm">Nie znaleziono modlitw spełniających kryteria.</p>
            <button 
              onClick={() => { setSearch(''); setSelectedCat('all'); setLengthFilter('all'); setTypeFilter('all'); setIntentionFilter('all'); }}
              className="text-gold text-xs font-bold mt-2 uppercase tracking-widest"
            >
              Wyczyść filtry
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
