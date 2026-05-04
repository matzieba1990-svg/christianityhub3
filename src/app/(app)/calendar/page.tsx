'use client'
import PageHeader from '@/components/PageHeader'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { PRAYERS } from '@/lib/prayers'

const MONTHS = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień']
const DAYS_SHORT = ['Nd','Pn','Wt','Śr','Cz','Pt','Sb']

// Główne święta katolickie 2026 - zweryfikowane
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
}

export default function CalendarPage() {
  const { data: session } = useSession()
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())
  const [history, setHistory] = useState<PrayerHistoryItem[]>([])

  useEffect(() => {
    if (session) {
      fetch('/api/prayers/history')
        .then(res => res.json())
        .then(data => setHistory(data.history || []))
        .catch(console.error)
    }
  }, [session])

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const startOffset = firstDay === 0 ? 6 : firstDay - 1

  const pad = (n: number) => String(n).padStart(2, '0')
  const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  const monthFeasts = Object.entries(FEASTS)
    .filter(([d]) => d.startsWith(`${year}-${pad(month + 1)}`))
    .sort((a, b) => a[0].localeCompare(b[0]))

  return (
    <div className="pb-6">
      <PageHeader title="Kalendarz liturgiczny" subtitle="Rok kościelny 2026" />

      <div className="px-4">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-5">
          <button onClick={prevMonth} className="w-10 h-10 rounded-full flex items-center justify-center text-xl transition-active"
            style={{ background: 'white', border: '1px solid var(--border)', color: 'var(--gold)' }}>‹</button>
          <div className="text-center">
            <p className="font-bold text-lg font-mystic" style={{ color: 'var(--gold-dark)' }}>{MONTHS[month]}</p>
            <p className="text-xs uppercase tracking-widest font-bold opacity-60" style={{ color: 'var(--text-muted)' }}>{year}</p>
          </div>
          <button onClick={nextMonth} className="w-10 h-10 rounded-full flex items-center justify-center text-xl transition-active"
            style={{ background: 'white', border: '1px solid var(--border)', color: 'var(--gold)' }}>›</button>
        </div>

        {/* Calendar grid */}
        <div className="card p-4 mb-6 shadow-sm" style={{ background: 'white' }}>
          <div className="grid grid-cols-7 mb-2">
            {DAYS_SHORT.map(d => (
              <div key={d} className="text-center text-[10px] font-black uppercase tracking-tighter py-1"
                style={{ color: d === 'Nd' ? 'var(--gold)' : 'var(--text-muted)' }}>{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-2">
            {Array.from({ length: startOffset }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`
              const feast = FEASTS[dateStr]
              const isToday = dateStr === today
              const isSunday = (startOffset + i) % 7 === 6
              
              const completedOnThisDay = history.filter(h => h.date === dateStr)

              return (
                <div key={day} className="flex flex-col items-center py-1 relative">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all relative z-10"
                    style={{
                      background: isToday ? 'var(--gold)' : feast ? `${feastColor[feast.type]}15` : 'transparent',
                      color: isToday ? 'white' : feast ? feastColor[feast.type] : isSunday ? 'var(--gold)' : 'var(--text-main)',
                      border: feast ? `1px solid ${feastColor[feast.type]}40` : 'none',
                    }}>
                    {day}
                  </div>
                  
                  {/* Progress Indicators */}
                  {completedOnThisDay.length > 0 && (
                    <div className="flex gap-0.5 mt-1">
                      {completedOnThisDay.map((h, idx) => {
                        const p = PRAYERS.find(pr => pr.id === h.prayerId)
                        return (
                          <div key={idx} className="w-1.5 h-1.5 rounded-full" 
                            style={{ background: 'var(--gold)', border: '1px solid white' }}
                            title={p?.name || 'Modlitwa'} />
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Feasts this month */}
        {monthFeasts.length > 0 && (
          <>
            <h2 className="text-[10px] font-black uppercase tracking-widest mb-3 opacity-60" style={{ color: 'var(--text-muted)' }}>
              Uroczystości i święta
            </h2>
            <div className="space-y-2">
              {monthFeasts.map(([date, feast]) => {
                const d = parseInt(date.split('-')[2])
                return (
                  <div key={date} className="card p-4 flex items-center gap-4 bg-white border-gold/10">
                    <div className="w-10 h-10 rounded-full flex flex-col items-center justify-center flex-shrink-0"
                      style={{ background: '#FAF6F0', border: `1px solid ${feastColor[feast.type]}40` }}>
                      <span className="text-sm font-black" style={{ color: feastColor[feast.type] }}>{d}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-black uppercase tracking-tighter mb-0.5" style={{ color: feastColor[feast.type] }}>
                        {feastLabel[feast.type]}
                      </p>
                      <p className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>{feast.name}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

