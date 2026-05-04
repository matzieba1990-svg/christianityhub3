'use client'
import { useState, useMemo } from 'react'
import { PRAYERS, CATEGORIES } from '@/lib/prayers'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { Clock, ChevronRight, Search, Filter, Calendar } from 'lucide-react'

export default function PrayersPage() {
  const [search, setSearch] = useState('')
  const [selectedCat, setSelectedCat] = useState('all')
  const [lengthFilter, setLengthFilter] = useState('all') // all, short, medium, long
  const [typeFilter, setTypeFilter] = useState('all') // all, single, novena

  const filteredAndSorted = useMemo(() => {
    return PRAYERS
      .filter(p => {
        // Category filter
        const matchCat = selectedCat === 'all' || p.category === selectedCat
        
        // Search filter (intention/name/desc)
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase())
        
        // Length filter (based on duration string or days)
        let matchLength = true
        const dur = parseInt(p.duration) || 0
        if (lengthFilter === 'short') matchLength = dur < 10 && !p.days
        if (lengthFilter === 'medium') matchLength = dur >= 10 && dur <= 30 && !p.days
        if (lengthFilter === 'long') matchLength = dur > 30 || !!p.days

        // Type filter
        let matchType = true
        if (typeFilter === 'single') matchType = !p.days
        if (typeFilter === 'novena') matchType = !!p.days

        return matchCat && matchSearch && matchLength && matchType
      })
      .sort((a, b) => a.name.localeCompare(b.name, 'pl'))
  }, [selectedCat, search, lengthFilter, typeFilter])

  return (
    <div className="pb-6">
      <PageHeader title="Biblioteka modlitw" subtitle="Gotowe teksty modlitw" />

      <div className="px-4 space-y-4 mb-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
          <input 
            type="text"
            placeholder="Szukaj modlitwy lub intencji..."
            className="inp pl-10 py-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Primary Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setSelectedCat(c.id)}
              className="flex-shrink-0 pill transition-all"
              style={{
                scrollSnapAlign: 'start',
                background: selectedCat === c.id ? 'var(--gold)' : 'white',
                color: selectedCat === c.id ? 'white' : 'var(--text-muted)',
                border: selectedCat === c.id ? 'none' : '1px solid var(--border)',
                padding: '8px 14px',
                fontSize: '13px',
                boxShadow: selectedCat === c.id ? '0 4px 14px rgba(201,162,39,0.2)' : 'none'
              }}>
              {c.emoji} {c.label}
            </button>
          ))}
        </div>

        {/* Secondary Filters */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-text-muted font-bold w-full mb-1">
            <Filter size={12} /> Filtruj po długości i typie
          </div>
          
          {/* Length */}
          <select 
            className="text-xs p-2 rounded-lg border border-border bg-white outline-none text-text-main"
            value={lengthFilter}
            onChange={(e) => setLengthFilter(e.target.value)}
          >
            <option value="all">Każda długość</option>
            <option value="short">Krótkie (&lt;10 min)</option>
            <option value="medium">Średnie (10-30 min)</option>
            <option value="long">Długie / Wielodniowe</option>
          </select>

          {/* Type */}
          <select 
            className="text-xs p-2 rounded-lg border border-border bg-white outline-none text-text-main"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">Każdy typ</option>
            <option value="single">Jednorazowe</option>
            <option value="novena">Nowenny / Cykle</option>
          </select>
        </div>
      </div>

      {/* Prayer list */}
      <div className="px-4 space-y-3">
        {filteredAndSorted.length > 0 ? (
          filteredAndSorted.map(prayer => (
            <Link key={prayer.id} href={`/prayers/${prayer.id}`}
              className="card prayer-card flex items-center gap-4 p-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)', color: 'var(--gold)' }}>
                {prayer.days ? <Calendar size={24} /> : <Clock size={24} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-sm leading-tight" style={{ color: 'var(--text-main)' }}>
                    {prayer.name}
                  </p>
                  {prayer.days && (
                    <span className="pill flex-shrink-0 text-[10px] font-bold"
                      style={{ background: 'rgba(201,162,39,0.15)', color: 'var(--gold-dark)', border: '1px solid rgba(201,162,39,0.3)', padding: '2px 8px' }}>
                      {prayer.days} DNI
                    </span>
                  )}
                </div>
                <p className="text-xs mt-1 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                  {prayer.description}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <Clock size={11} style={{ color: 'var(--text-muted)' }} />
                  <span className="text-[10px] font-medium" style={{ color: 'var(--text-muted)' }}>{prayer.duration}</span>
                </div>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </Link>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-text-muted text-sm">Nie znaleziono modlitw spełniających kryteria.</p>
            <button 
              onClick={() => { setSearch(''); setSelectedCat('all'); setLengthFilter('all'); setTypeFilter('all'); }}
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
