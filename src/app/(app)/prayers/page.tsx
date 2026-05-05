'use client'
import { useState, useMemo } from 'react'
import { PRAYERS, CATEGORIES } from '@/lib/prayers'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { Clock, ChevronRight, Search, Filter, Calendar, Heart } from 'lucide-react'

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

      <div className="px-4 space-y-4 mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={15} />
          <input 
            type="text"
            placeholder="Szukaj modlitwy..."
            className="inp !pl-12 py-2 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setSelectedCat(c.id)}
              className="flex-shrink-0 pill transition-all"
              style={{
                scrollSnapAlign: 'start',
                background: selectedCat === c.id ? 'var(--gold)' : 'white',
                color: selectedCat === c.id ? 'white' : 'var(--text-muted)',
                border: selectedCat === c.id ? 'none' : '1px solid var(--border)',
                padding: '6px 12px',
                fontSize: '12px',
                boxShadow: selectedCat === c.id ? '0 4px 14px rgba(201,162,39,0.2)' : 'none'
              }}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-2 pt-2 border-t border-border">
          <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-text-muted font-bold mb-1">
            <Filter size={12} /> Filtry zaawansowane
          </div>
          
          <div className="flex flex-wrap items-center gap-1.5">
            <select 
              className="flex-1 min-w-[90px] text-[10px] p-1 rounded-md border border-border bg-white outline-none text-text-main"
              value={lengthFilter}
              onChange={(e) => setLengthFilter(e.target.value)}
            >
              <option value="all">Czas: Dowolny</option>
              <option value="short">Krótkie (&lt;10 min)</option>
              <option value="medium">Średnie (10-30 min)</option>
              <option value="long">Długie / Wielodniowe</option>
            </select>

            <select 
              className="flex-1 min-w-[90px] text-[10px] p-1 rounded-md border border-border bg-white outline-none text-text-main"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">Typ: Wszystkie</option>
              <option value="single">Jednorazowe</option>
              <option value="novena">Nowenny / Cykle</option>
            </select>

            <select 
              className="flex-1 min-w-[110px] text-[10px] p-1 rounded-md border border-border bg-white outline-none text-text-main capitalize"
              value={intentionFilter}
              onChange={(e) => setIntentionFilter(e.target.value)}
            >
              <option value="all">Intencja: Wszystkie</option>
              {allIntentions.filter(i => i !== 'all').map(int => (
                <option key={int} value={int}>{int}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-3">
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
