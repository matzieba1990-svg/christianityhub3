'use client'
import { useState, useEffect, useMemo } from 'react'
import { Flame, Clock, Calendar as CalendarIcon, Award } from 'lucide-react'

interface HistoryItem {
  date: string
  type: 'progress' | 'intention'
}

export default function PrayerStats() {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/prayers/history')
      .then(res => res.json())
      .then(data => setHistory(data.history || []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const stats = useMemo(() => {
    if (history.length === 0) return { streak: 0, total: 0, favoriteTime: '--', heatmap: [] }

    const dates = Array.from(new Set(history.filter(h => h.type === 'progress').map(h => h.date))).sort()
    
    // Streak calculation
    let streak = 0
    if (dates.length > 0) {
      const today = new Date().toISOString().split('T')[0]
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
      
      let lastDate = dates[dates.length - 1]
      if (lastDate === today || lastDate === yesterday) {
        streak = 1
        for (let i = dates.length - 2; i >= 0; i--) {
          const d1 = new Date(dates[i+1])
          const d2 = new Date(dates[i])
          const diff = (d1.getTime() - d2.getTime()) / 86400000
          if (diff <= 1.1) streak++
          else break
        }
      }
    }

    // Heatmap (last 4 weeks)
    const heatmap = []
    const now = new Date()
    for (let i = 27; i >= 0; i--) {
      const d = new Date(now)
      d.setDate(now.getDate() - i)
      const dStr = d.toISOString().split('T')[0]
      const count = history.filter(h => h.date === dStr).length
      heatmap.push({ date: dStr, count })
    }

    return {
      streak,
      total: history.length,
      favoriteTime: 'Wieczór', // Placeholder for actual time logic if needed
      heatmap
    }
  }, [history])

  if (loading) return <div className="h-40 animate-pulse bg-gold/5 rounded-2xl" />

  return (
    <div className="space-y-4 mb-6">
      <div className="grid grid-cols-2 gap-3">
        <div className="card p-4 bg-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
            <Flame size={20} fill="currentColor" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-black text-text-muted">Streak</p>
            <p className="text-lg font-black text-text-main">{stats.streak} dni</p>
          </div>
        </div>
        <div className="card p-4 bg-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <Award size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-black text-text-muted">Suma</p>
            <p className="text-lg font-black text-text-main">{stats.total}</p>
          </div>
        </div>
      </div>

      <div className="card p-4 bg-white">
        <p className="text-[10px] uppercase font-black text-text-muted mb-3">Aktywność (ostatnie 4 tygodnie)</p>
        <div className="flex flex-wrap gap-1 justify-center">
          {stats.heatmap.map((d, i) => (
            <div 
              key={i} 
              title={d.date}
              className="w-3 h-3 rounded-sm transition-all"
              style={{ 
                background: d.count > 1 ? 'var(--gold)' : d.count > 0 ? 'var(--gold-light)' : 'var(--bg-primary)',
                opacity: d.count > 1 ? 1 : d.count > 0 ? 0.6 : 0.2
              }} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
