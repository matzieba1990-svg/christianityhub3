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

  // Logic for Rosary
  const isRosary = prayerId === 'rozaniec'
  const isChaplet = prayerId === 'koronka'

  const rosaryMysteries = isRosary ? prayer?.mysteries || [] : []

  const next = useCallback(() => {
    if (isRosary) {
      handleRosaryNext()
    } else if (isChaplet) {
      handleChapletNext()
    } else {
      setStep(s => s + 1)
    }
    
    // Vibration
    if (typeof window !== 'undefined' && window.navigator.vibrate) {
      window.navigator.vibrate(50)
    }
  }, [step, bead, isRosary, isChaplet, selectedMysterySet])

  const handleRosaryNext = () => {
    // 0: Creed
    // 1: Our Father (intro)
    // 2: Hail Mary x3
    // 3: Glory Be
    // 4: Select Mystery
    // 5: Decade 1 (Mystery, OF, 10x HM, GB, Fatima)
    // ...
    
    if (step === 0) setStep(1) // Creed -> OF
    else if (step === 1) setStep(2) // OF -> HM
    else if (step === 2) {
      if (bead < 2) setBead(b => b + 1)
      else { setStep(3); setBead(0); }
    }
    else if (step === 3) setStep(4) // GB -> Select Mystery
    else if (step === 4) {
      if (selectedMysterySet !== null) setStep(5)
    }
    else if (step >= 5 && step < 10) {
      // Decade logic
      // Sub-steps in decade: 0: Mystery title, 1: OF, 2: 10x HM, 3: GB, 4: Fatima
      if (bead === 0) setBead(1) // Mystery -> OF
      else if (bead === 1) setBead(2) // OF -> 1st HM
      else if (bead >= 2 && bead < 11) {
        setBead(b => b + 1)
        if (bead === 11) {
             // After 10th HM
             if (typeof window !== 'undefined' && window.navigator.vibrate) {
                window.navigator.vibrate([100, 50, 100])
             }
        }
      }
      else if (bead === 12) setBead(13) // GB -> Fatima
      else if (bead === 13) {
        if (step < 9) {
          setStep(s => s + 1)
          setBead(0)
        } else {
          setStep(10) // Final prayers
          setBead(0)
        }
      }
    }
    else if (step === 10) {
      onClose()
    }
  }

  const handleChapletNext = () => {
      // 0: Intro (OF, HM, Creed)
      // 1-5: Decades (Eternal Father, 10x Passion)
      // 6: Closing (3x Holy God)
      
      if (step === 0) setStep(1)
      else if (step >= 1 && step <= 5) {
          if (bead === 0) setBead(1) // EF -> 1st Passion
          else if (bead < 10) setBead(b => b + 1)
          else {
              if (step < 5) {
                  setStep(s => s + 1)
                  setBead(0)
              } else {
                  setStep(6)
                  setBead(0)
              }
          }
      }
      else if (step === 6) {
          if (bead < 2) setBead(b => b + 1)
          else onClose()
      }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        next()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next])

  if (!prayer) return null

  const getRosaryContent = () => {
    if (step === 0) return { title: 'Wierzę w Boga', text: prayer.parts[0].text }
    if (step === 1) return { title: 'Ojcze Nasz', text: prayer.parts[1].text }
    if (step === 2) return { title: `Zdrowaś Maryjo (${bead + 1}/3)`, text: prayer.parts[2].text }
    if (step === 3) return { title: 'Chwała Ojcu', text: prayer.parts[3].text }
    if (step === 4) return { title: 'Wybierz tajemnice', text: 'Wybierz zestaw tajemnic na dziś' }
    
    if (step >= 5 && step <= 9) {
      const decadeIdx = step - 5
      const mysterySet = rosaryMysteries[selectedMysterySet!]
      const mysteryName = mysterySet.items[decadeIdx]
      
      if (bead === 0) return { title: `Tajemnica ${decadeIdx + 1}`, text: mysteryName }
      if (bead === 1) return { title: 'Ojcze Nasz', text: prayer.parts[1].text }
      if (bead >= 2 && bead <= 11) return { title: `Zdrowaś Maryjo (${bead - 1}/10)`, text: prayer.parts[2].text }
      if (bead === 12) return { title: 'Chwała Ojcu', text: prayer.parts[3].text }
      if (bead === 13) return { title: 'Modlitwa Fatimska', text: 'O mój Jezu, przebacz nam nasze grzechy, zachowaj nas od ognia piekielnego, zaprowadź wszystkie dusze do nieba i dopomóż szczególnie tym, którzy najbardziej potrzebują Twojego miłosierdzia.' }
    }
    
    if (step === 10) return { title: 'Zakończenie', text: 'Pod Twoją obronę... lub Witaj Królowo.' }
    return { title: '', text: '' }
  }

  const getChapletContent = () => {
      if (step === 0) return { title: 'Rozpoczęcie', text: 'Ojcze nasz, Zdrowaś Maryjo, Wierzę w Boga...' }
      if (step >= 1 && step <= 5) {
          if (bead === 0) return { title: `Dziesiątka ${step}`, text: prayer.parts[1].text }
          return { title: `Bolesna Męka (${bead}/10)`, text: prayer.parts[2].text }
      }
      if (step === 6) return { title: `Święty Boże (${bead + 1}/3)`, text: prayer.parts[3].text }
      return { title: '', text: '' }
  }

  const content = isRosary ? getRosaryContent() : isChaplet ? getChapletContent() : { title: prayer.name, text: prayer.parts[0].text }

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-black text-white' : 'bg-[#FAF6F0] text-text-main'}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4">
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
          <X size={24} />
        </button>
        <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{prayer.name}</p>
            {isRosary && selectedMysterySet !== null && (
                <p className="text-[8px] opacity-40">{rosaryMysteries[selectedMysterySet].name}</p>
            )}
        </div>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-white/10">
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center" onClick={next}>
        {step === 4 && isRosary ? (
          <div className="grid grid-cols-1 gap-4 w-full max-w-xs">
             {rosaryMysteries.map((m, i) => (
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

      {/* Beads Visualization */}
      <div className="h-24 flex items-center justify-center gap-2 px-8 overflow-hidden opacity-40">
          {(isRosary || isChaplet) && step > 0 && step < 10 && (
              <div className="flex items-center gap-1.5">
                  {Array.from({ length: 10 }).map((_, i) => {
                      const isActive = (isRosary && bead - 2 === i) || (isChaplet && bead - 1 === i)
                      const isPast = (isRosary && bead - 2 > i) || (isChaplet && bead - 1 > i)
                      return (
                          <div key={i} className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                              isActive ? 'bg-gold border-gold scale-150' : 
                              isPast ? 'bg-gold/40 border-gold/20' : 
                              'bg-transparent border-white/20'
                          }`} />
                      )
                  })}
              </div>
          )}
      </div>

      {/* Bottom Hint */}
      <div className="p-8 text-center opacity-30 text-[10px] font-bold uppercase tracking-[0.2em]">
        Dotknij ekranu lub naciśnij spację, aby kontynuować
      </div>
    </div>
  )
}
