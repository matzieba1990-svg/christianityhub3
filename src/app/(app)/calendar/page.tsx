'use client'
import PageHeader from '@/components/PageHeader'
import { useState } from 'react'

const MONTHS = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień']
const DAYS_SHORT = ['Nd','Pn','Wt','Śr','Cz','Pt','Sb']

// Główne święta katolickie 2026
const FEASTS: Record<string, { name: string; type: 'solemnity'|'feast'|'memorial'|'sunday' }> = {
  '2026-01-01': { name: 'Uroczystość Świętej Bożej Rodzicielki', type: 'solemnity' },
  '2026-01-06': { name: 'Objawienie Pańskie (Trzech Króli)', type: 'solemnity' },
  '2026-04-05': { name: 'Niedziela Palmowa', type: 'sunday' },
  '2026-04-09': { name: 'Wielki Czwartek', type: 'solemnity' },
  '2026-04-10': { name: 'Wielki Piątek', type: 'solemnity' },
  '2026-04-11': { name: 'Wielka Sobota', type: 'solemnity' },
  '2026-04-12': { name: 'Niedziela Wielkanocna – Zmartwychwstanie Pańskie', type: 'solemnity' },
  '2026-04-13': { name: 'Poniedziałek Wielkanocny', type: 'solemnity' },
  '2026-05-21': { name: 'Wniebowstąpienie Pańskie', type: 'solemnity' },
  '2026-05-31': { name: 'Zesłanie Ducha Świętego (Zielone Świątki)', type: 'solemnity' },
  '2026-06-04': { name: 'Uroczystość Trójcy Przenajświętszej', type: 'solemnity' },
  '2026-06-11': { name: 'Uroczystość Bożego Ciała', type: 'solemnity' },
  '2026-08-15': { name: 'Wniebowzięcie NMP', type: 'solemnity' },
  '2026-11-01': { name: 'Uroczystość Wszystkich Świętych', type: 'solemnity' },
  '2026-11-02': { name: 'Dzień Zaduszny', type: 'feast' },
  '2026-12-08': { name: 'Niepokalane Poczęcie NMP', type: 'solemnity' },
  '2026-12-25': { name: 'Narodzenie Pańskie (Boże Narodzenie)', type: 'solemnity' },
  '2026-12-26': { name: 'Drugi dzień Bożego Narodzenia – Święty Szczepan', type: 'feast' },
}

const LITURGICAL_SEASONS: Record<string, string> = {
  // Adwent 2025 → Boże Narodzenie 2025/2026
  // Zwykły czas (od Chrztu Pańskiego do Środy Popielcowej)
  // Wielki Post (od Środy Popielcowej 18.02.2026 do Wielkiego Czwartku)
  // Triduum Paschalne
  // Czas Wielkanocny (Wielkanoc 12.04 do Zesłania Ducha Świętego 31.05.2026)
  // Zwykły czas po Zielonych Świątkach
}

const feastColor = { solemnity: '#c9a227', feast: '#7c3aed', memorial: '#059669', sunday: '#0ea5e9' }
const feastLabel = { solemnity: 'Uroczystość', feast: 'Święto', memorial: 'Wspomnienie', sunday: 'Niedziela' }

export default function CalendarPage() {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const startOffset = firstDay === 0 ? 6 : firstDay - 1

  const pad = (n: number) => String(n).padStart(2, '0')
  const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  const monthFeasts = Object.entries(FEASTS).filter(([d]) => d.startsWith(`${year}-${pad(month + 1)}`))

  return (
    <div className="pb-6">
      <PageHeader title="Kalendarz liturgiczny" subtitle="Rok kościelny 2026" />

      <div className="px-4">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-5">
          <button onClick={prevMonth} className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
            style={{ background: 'rgba(255,255,255,0.06)' }}>‹</button>
          <div className="text-center">
            <p className="font-bold text-lg" style={{ color: 'var(--text-main)' }}>{MONTHS[month]}</p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{year}</p>
          </div>
          <button onClick={nextMonth} className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
            style={{ background: 'rgba(255,255,255,0.06)' }}>›</button>
        </div>

        {/* Calendar grid */}
        <div className="card p-4 mb-5">
          <div className="grid grid-cols-7 mb-2">
            {DAYS_SHORT.map(d => (
              <div key={d} className="text-center text-xs font-bold py-1"
                style={{ color: d === 'Nd' ? '#c9a227' : 'var(--text-muted)' }}>{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-1">
            {Array.from({ length: startOffset }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`
              const feast = FEASTS[dateStr]
              const isToday = dateStr === today
              const isSunday = (startOffset + i) % 7 === 6

              return (
                <div key={day} className="flex flex-col items-center py-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all"
                    style={{
                      background: isToday ? 'linear-gradient(135deg,#7c3aed,#a855f7)' : feast ? `${feastColor[feast.type]}22` : 'transparent',
                      color: isToday ? 'white' : feast ? feastColor[feast.type] : isSunday ? 'var(--gold)' : 'var(--text-main)',
                      fontWeight: feast || isToday ? 700 : 400,
                      boxShadow: isToday ? '0 0 12px rgba(124,58,237,0.4)' : 'none',
                    }}>
                    {day}
                  </div>
                  {feast && <div className="w-1 h-1 rounded-full mt-0.5" style={{ background: feastColor[feast.type] }} />}
                </div>
              )
            })}
          </div>
        </div>

        {/* Feasts this month */}
        {monthFeasts.length > 0 && (
          <>
            <h2 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
              Święta w tym miesiącu
            </h2>
            <div className="space-y-2">
              {monthFeasts.map(([date, feast]) => {
                const d = parseInt(date.split('-')[2])
                return (
                  <div key={date} className="card p-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0"
                      style={{ background: `${feastColor[feast.type]}15`, border: `1px solid ${feastColor[feast.type]}33` }}>
                      <span className="text-sm font-black" style={{ color: feastColor[feast.type] }}>{d}</span>
                      <span className="text-xs" style={{ color: feastColor[feast.type] }}>{MONTHS[month].slice(0, 3)}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase" style={{ color: feastColor[feast.type] }}>
                        {feastLabel[feast.type]}
                      </p>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>{feast.name}</p>
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
