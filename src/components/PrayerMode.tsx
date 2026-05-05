'use client'
import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Moon, Sun, Smartphone } from 'lucide-react'
import { PRAYERS } from '@/lib/prayers'

interface PrayerModeProps {
  prayerId: string
  onClose: () => void
}

export default function PrayerMode({ prayerId, onClose }: PrayerModeProps) {
  const prayer = PRAYERS.find(p => p.id === prayerId)
  const [step, setStep] = useState(0)
  const [bead, setBead] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedMysterySet, setSelectedMysterySet] = useState<number | null>(null)

  const isRosary = prayerId === 'rozaniec'
  const isChaplet = prayer?.category === 'koronka'
  const isLitany = prayer?.category === 'litania'
  const isWayOfCross = prayer?.category === 'pasja'
  const isAniolPanski = prayerId === 'aniol-panski'

  // Litany helper: split text into invocations if it contains "–" or "..."
  const litanyInvocations = isLitany ? prayer?.parts[0].text.split(/[.?!] /).filter(t => t.length > 5) : []

  const next = useCallback(() => {
    if (isRosary) handleRosaryNext()
    else if (isChaplet) handleChapletNext()
    else if (isLitany) handleLitanyNext()
    else if (isWayOfCross) handleGenericPartNext()
    else if (isAniolPanski) handleGenericPartNext()
    else handleGenericPartNext()
    
    if (typeof window !== 'undefined' && window.navigator.vibrate) {
      window.navigator.vibrate(50)
    }
  }, [step, bead, isRosary, isChaplet, isLitany, isWayOfCross, selectedMysterySet, litanyInvocations])

  const handleRosaryNext = () => {
    if (step === 0) setStep(1)
    else if (step === 1) setStep(2)
    else if (step === 2) {
      if (bead < 2) setBead(b => b + 1)
      else { setStep(3); setBead(0); }
    }
    else if (step === 3) setStep(4)
    else if (step === 4) {
      if (selectedMysterySet !== null) setStep(5)
    }
    else if (step >= 5 && step <= 9) {
      if (bead === 0) setBead(1)
      else if (bead === 1) setBead(2)
      else if (bead >= 2 && bead < 11) {
        setBead(b => b + 1)
        if (bead === 11 && typeof window !== 'undefined' && window.navigator.vibrate) {
          window.navigator.vibrate([100, 50, 100])
        }
      }
      else if (bead === 12) setBead(13)
      else if (bead === 13) {
        if (step < 9) { setStep(s => s + 1); setBead(0); }
        else { setStep(10); setBead(0); }
      }
    }
    else if (step === 10) onClose()
  }

  const handleChapletNext = () => {
      // General chaplet logic
      if (step === 0) setStep(1)
      else if (step >= 1 && step <= 5) {
          if (bead === 0) setBead(1)
          else if (bead < 10) setBead(b => b + 1)
          else {
              if (step < 5) { setStep(s => s + 1); setBead(0); }
              else { setStep(6); setBead(0); }
          }
      }
      else if (step === 6) {
          if (bead < (prayer?.parts[3]?.text.includes('3 razy') ? 2 : 0)) setBead(b => b + 1)
          else onClose()
      }
  }

  const handleLitanyNext = () => {
      if (step < litanyInvocations.length - 1) setStep(s => s + 1)
      else onClose()
  }

  const handleGenericPartNext = () => {
      if (step < (prayer?.parts.length || 0) - 1) setStep(s => s + 1)
      else onClose()
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') { e.preventDefault(); next(); }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next])

  if (!prayer) return null

  const getContent = () => {
    if (isRosary) {
        if (step === 0) return { title: 'Wierzę w Boga', text: prayer.parts[0].text }
        if (step === 1) return { title: 'Ojcze Nasz', text: prayer.parts[1].text }
        if (step === 2) return { title: `Zdrowaś Maryjo (${bead + 1}/3)`, text: prayer.parts[2].text }
        if (step === 3) return { title: 'Chwała Ojcu', text: prayer.parts[3].text }
        if (step === 4) return { title: 'Wybierz tajemnice', text: '' }
        if (step >= 5 && step <= 9) {
          const decadeIdx = step - 5
          const mysterySet = prayer.mysteries[selectedMysterySet!]
          const mysteryName = mysterySet.items[decadeIdx]
          if (bead === 0) return { title: `Tajemnica ${decadeIdx + 1}`, text: mysteryName }
          if (bead === 1) return { title: 'Ojcze Nasz', text: prayer.parts[1].text }
          if (bead >= 2 && bead <= 11) return { title: `Zdrowaś Maryjo (${bead - 1}/10)`, text: prayer.parts[2].text }
          if (bead === 12) return { title: 'Chwała Ojcu', text: prayer.parts[3].text }
          if (bead === 13) return { title: 'Modlitwa Fatimska', text: 'O mój Jezu, przebacz nam nasze grzechy...' }
        }
        if (step === 10) return { title: 'Zakończenie', text: 'Pod Twoją obronę...' }
    }

    if (isLitany) {
        return { title: 'Litania', text: litanyInvocations[step] }
    }

    if (isChaplet) {
        if (step === 0) return { title: 'Rozpoczęcie', text: prayer.parts[0].text }
        if (step >= 1 && step <= 5) {
            if (bead === 0) return { title: `Dziesiątka ${step}`, text: prayer.parts[1].text }
            return { title: `Modlitwa (${bead}/10)`, text: prayer.parts[2].text }
        }
        return { title: 'Zakończenie', text: prayer.parts[3]?.text || 'Amen.' }
    }

    // Default: Step through parts
    const p = prayer.parts[step]
    return { title: p.title, text: p.text }
  }

  const content = getContent()

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-black text-white' : 'bg-[#FAF6F0] text-text-main'}`}>
      <div className="flex items-center justify-between p-4">
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
          <X size={24} />
        </button>
        <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{prayer.name}</p>
            {isRosary && selectedMysterySet !== null && (
                <p className="text-[8px] opacity-40">{prayer.mysteries[selectedMysterySet].name}</p>
            )}
        </div>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-white/10">
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center" onClick={next}>
        {step === 4 && isRosary ? (
          <div className="grid grid-cols-1 gap-4 w-full max-w-xs">
             {prayer.mysteries.map((m, i) => (
                 <button key={i} onClick={(e) => { e.stopPropagation(); setSelectedMysterySet(i); setStep(5); }}
                    className="p-4 rounded-2xl border border-gold/30 bg-gold/5 text-sm font-bold hover:bg-gold/10 transition-colors">
                    {m.name}
                 </button>
             ))}
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in duration-300">
            <h2 className="text-xl font-mystic font-bold text-gold mb-6">{content.title}</h2>
            <p className="text-lg leading-relaxed font-serif max-w-md mx-auto whitespace-pre-wrap">
              {content.text}
            </p>
          </div>
        )}
      </div>

      <div className="h-24 flex items-center justify-center gap-2 px-8 overflow-hidden opacity-40">
          {(isRosary || isChaplet) && step > 0 && step < 10 && (
              <div className="flex items-center gap-1.5">
                  {Array.from({ length: 10 }).map((_, i) => {
                      const isActive = (isRosary && bead - 2 === i) || (isChaplet && bead - 1 === i)
                      const isPast = (isRosary && bead - 2 > i) || (isChaplet && bead - 1 > i)
                      return (
                          <div key={i} className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                              isActive ? 'bg-gold border-gold scale-150' : 
                              isPast ? 'bg-gold/40 border-gold/20' : 
                              'bg-transparent border-white/20'
                          }`} />
                      )
                  })}
              </div>
          )}
          {(isLitany || isWayOfCross) && (
              <div className="w-full max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gold transition-all duration-300" 
                    style={{ width: `${((step + 1) / (isLitany ? litanyInvocations.length : prayer.parts.length)) * 100}%` }} />
              </div>
          )}
      </div>

      <div className="p-8 text-center opacity-30 text-[10px] font-bold uppercase tracking-[0.2em]">
        Dotknij ekranu lub naciśnij spację, aby kontynuować
      </div>
    </div>
  )
}
