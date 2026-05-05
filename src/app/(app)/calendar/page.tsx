'use client'
import PageHeader from '@/components/PageHeader'
import { useState, useEffect, useMemo } from 'react'
import { useSession } from 'next-auth/react'
import { PRAYERS } from '@/lib/prayers'
import Link from 'next/link'
import { ChevronRight, Check, Heart } from 'lucide-react'

const MONTHS = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień']
const DAYS_SHORT = ['Nd','Pn','Wt','Śr','Cz','Pt','Sb']

const FEASTS: Record<string, { name: string; type: 'solemnity'|'feast'|'memorial'|'sunday' }> = {
  '2026-01-01': { name: 'Uroczystość Świętej Bożej Rodzicielki', type: 'solemnity' },
  '2026-01-06': { name: 'Objawienie Pańskie (Trzech Króli)', type: 'solemnity' },
  '2026-02-02': { name: 'Ofiarowanie Pańskie (Matki Bożej Gromnicznej)', type: 'feast' },
  '2026-02-18': { name: 'Środa Popielcowa', type: 'solemnity' },
  '2026-03-19': { name: 'Uroczystość św. Józefa', type: 'solemnity' },
  '2026-03-25': { name: 'Zwiastowanie Pańskie', type: 'solemnity' },
  '2026-03-29': { name: 'Niedziela Palmowa', type: 'sunday' },
  '2026-04-02': { name: 'Wielki Czwartek', type: 'solemnity' },
  '2026-04-03': { name: 'Wielki Piątek', type: 'solemnity' },
  '2026-04-04': { name: 'Wielka Sobota', type: 'solemnity' },
  '2026-04-05': { name: 'Niedziela Wielkanocna – Zmartwychwstanie Pańskie', type: 'solemnity' },
  '2026-04-06': { name: 'Poniedziałek Wielkanocny', type: 'solemnity' },
  '2026-04-12': { name: 'Niedziela Miłosierdzia Bożego', type: 'sunday' },
  '2026-05-03': { name: 'NMP Królowej Polski', type: 'solemnity' },
  '2026-05-17': { name: 'Wniebowstąpienie Pańskie', type: 'solemnity' },
  '2026-05-24': { name: 'Zesłanie Ducha Świętego (Zielone Świątki)', type: 'solemnity' },
  '2026-06-04': { name: 'Uroczystość Bożego Ciała', type: 'solemnity' },
  '2026-06-12': { name: 'Najświętszego Serca Pana Jezusa', type: 'solemnity' },
  '2026-06-29': { name: 'Świętych Apostołów Piotra i Pawła', type: 'solemnity' },
  '2026-08-15': { name: 'Wniebowzięcie NMP', type: 'solemnity' },
  '2026-08-26': { name: 'NMP Częstochowskiej', type: 'solemnity' },
  '2026-11-01': { name: 'Uroczystość Wszystkich Świętych', type: 'solemnity' },
  '2026-11-02': { name: 'Dzień Zaduszny', type: 'feast' },
  '2026-12-08': { name: 'Niepokalane Poczęcie NMP', type: 'solemnity' },
  '2026-12-25': { name: 'Narodzenie Pańskie (Boże Narodzenie)', type: 'solemnity' },
  '2026-12-26': { name: 'Drugi dzień Bożego Narodzenia – Święty Szczepan', type: 'feast' },
}

const feastColor = { solemnity: '#c9a227', feast: '#A5831C', memorial: '#857A70', sunday: '#C9A227' }
const feastLabel = { solemnity: 'Uroczystość', feast: 'Święto', memorial: 'Wspomnienie', sunday: 'Niedziela' }

interface PrayerHistoryItem {
  prayerId: string
  dayNumber: number
  date: string
  type: 'progress' | 'intention'
  title?: string
}

export default function CalendarPage() {
  const { data: session } = useSession()
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())
  const [history, setHistory] = useState<PrayerHistoryItem[]>([])
  const [selectedDate, setSelectedDate] = useState<string>(now.toISOString().split('T')[0])

  useEffect(() => {
    if (session) {
      fetch('/api/prayers/history')
        .then(res => res.json())
        .then(data => setHistory(data.history || []))
        .catch(console.error)
    }
  }, [session])

  const plan = useMemo(() => {
    const p: Record<string, { prayerId: string; day: number; type: 'done' | 'planned' | 'intention'; title?: string }[]> = {}
    
    // Add completed days and intentions
    history.forEach(h => {
      if (!p[h.date]) p[h.date] = []
      p[h.date].push({ 
        prayerId: h.prayerId, 
        day: h.dayNumber, 
        type: h.type === 'intention' ? 'intention' : 'done',
        title: h.title 
      })
    })

    // Calculate planned days for multi-day prayers
    const multiDayPrayers = PRAYERS.filter(pr => pr.days)
    multiDayPrayers.forEach(pr => {
      const userProgress = history.filter(h => h.prayerId === pr.id && h.type === 'progress')
      if (userProgress.length > 0) {
        const lastEntry = [...userProgress].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
        const lastDate = new Date(lastEntry.date)
        const lastDay = lastEntry.dayNumber

        // Project next days
        for (let i = 1; i <= (pr.days! - lastDay); i++) {
          const nextDate = new Date(lastDate)
          nextDate.setDate(lastDate.getDate() + i)
          const dateStr = nextDate.toISOString().split('T')[0]
          if (!p[dateStr]) p[dateStr] = []
          p[dateStr].push({ prayerId: pr.id, day: lastDay + i, type: 'planned' })
        }
      }
    })
    return p
  }, [history])

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const startOffset = firstDay === 0 ? 6 : firstDay - 1
  const pad = (n: number) => String(n).padStart(2, '0')
  const today = now.toISOString().split('T')[0]

  const dayEvents = plan[selectedDate] || []
  const selectedFeast = FEASTS[selectedDate]

  return (
    <div className="pb-6">
      <PageHeader title="Kalendarz" subtitle="Moja droga modlitwy" />

      <div className="px-4">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-5">
          <button onClick={() => { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-white border border-border text-gold">‹</button>
          <div className="text-center">
            <p className="font-bold text-lg font-mystic text-gold-dark">{MONTHS[month]}</p>
            <p className="text-xs font-bold opacity-60 text-text-muted uppercase">{year}</p>
          </div>
          <button onClick={() => { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-white border border-border text-gold">›</button>
        </div>

        {/* Calendar grid */}
        <div className="card p-4 mb-6 bg-white shadow-sm">
          <div className="grid grid-cols-7 mb-2">
            {DAYS_SHORT.map(d => (
              <div key={d} className="text-center text-[10px] font-black uppercase text-text-muted">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-2">
            {Array.from({ length: startOffset }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`
              const isSelected = dateStr === selectedDate
              const isToday = dateStr === today
              const hasEvents = !!plan[dateStr]
              const feast = FEASTS[dateStr]

              return (
                <button key={day} onClick={() => setSelectedDate(dateStr)}
                  className="flex flex-col items-center py-1 relative">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all relative z-10 ${isSelected ? 'ring-2 ring-gold ring-offset-2' : ''}`}
                    style={{
                      background: isToday ? 'var(--gold)' : feast ? '#FAF6F0' : 'transparent',
                      color: isToday ? 'white' : feast ? 'var(--gold-dark)' : 'var(--text-main)',
                      border: feast ? '1px solid var(--gold-light)' : isSelected ? '1px solid var(--gold)' : 'none'
                    }}>
                    {day}
                  </div>
                  {hasEvents && (
                    <div className="flex gap-0.5 mt-1">
                      {plan[dateStr].slice(0,3).map((e, idx) => (
                        <div key={idx} className="w-1.5 h-1.5 rounded-full" 
                          style={{ background: e.type === 'done' ? 'var(--gold)' : 'var(--border)', border: '1px solid white' }} />
                      ))}
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Day Details */}
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black uppercase tracking-widest opacity-60 text-text-muted">
              {selectedDate === today ? 'Dzisiaj' : selectedDate}
            </h2>
            {selectedFeast && (
               <span className="pill text-[10px]" style={{ color: feastColor[selectedFeast.type], background: 'white', border: `1px solid ${feastColor[selectedFeast.type]}` }}>
                 {selectedFeast.name}
               </span>
            )}
          </div>

          {dayEvents.length === 0 && !selectedFeast && (
            <div className="card p-8 text-center bg-white/50 border-dashed">
              <p className="text-sm text-text-muted italic">Brak zaplanowanych modlitw na ten dzień.</p>
            </div>
          )}

          {dayEvents.map((ev, i) => {
            const p = PRAYERS.find(pr => pr.id === ev.prayerId)
            const isIntention = ev.type === 'intention'
            
            return (
              <Link key={i} href={p ? `/prayers/${p.id}` : '#'} 
                className="card p-4 flex items-center gap-4 bg-white hover:bg-gold/5 transition-colors">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FAF6F0]" 
                  style={{ color: ev.type === 'done' || isIntention ? 'var(--gold)' : 'var(--text-muted)' }}>
                  {isIntention ? <Heart size={20} fill="currentColor" /> : ev.type === 'done' ? <Check size={20} /> : <div className="text-xs font-black">{ev.day}</div>}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-tighter mb-0.5" style={{ color: 'var(--gold-dark)' }}>
                    {isIntention ? 'Intencja podjęta' : ev.type === 'done' ? 'Ukończono' : `Dzień ${ev.day}`}
                  </p>
                  <p className="text-sm font-bold text-text-main">{ev.title || p?.name || 'Modlitwa wspólna'}</p>
                  {isIntention && p && <p className="text-[10px] text-text-muted mt-0.5">Sugerowana: {p.name}</p>}
                </div>
                {p && <ChevronRight size={16} className="text-text-muted" />}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}


