'use client'
import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Moon, Sun, Smartphone, RotateCcw } from 'lucide-react'
import { PRAYERS } from '@/lib/prayers'

const COMMON_PRAYERS: Record<string, string> = {
  'ojcze nasz': 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje, przyjdź królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj, i odpuść nam nasze winy, jako i mi odpuszczamy naszym winowajcom. I nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.',
  'zdrowaś maryjo': 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą, błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi teraz i w godzinę śmierci naszej. Amen.',
  'wierzę w boga': 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi. I w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał. Wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego. Stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.',
  'chwała ojcu': 'Chwała Ojcu i Synowi, i Duchowi Świętemu. Jak była na początku, teraz i zawsze, i na wieki wieków. Amen.',
  'wieczny odpoczynek': 'Wieczny odpoczynek racz im dać Panie, a światłość wiekuista niechaj im sweci. Niech odpoczywają w pokoju wiecznym. Amen.',
  'pod twoją obronę': 'Pod Twoją obronę uciekamy się, święta Boża Rodzicielko, naszymi prośbami racz nie gardzić w potrzebach naszych, ale od wszelakich złych przygód racz nas zawsze wybawiać, Panno chwalebna i błogosławiona. O Pani nasza, Orędowniczko nasza, Pośredniczko nasza, Pocieszycielko nasza. Z Synem swoim nas pojednaj, Synowi swojemu nas polecaj, swojemu Synowi nas oddawaj. Amen.',
  'aniele boży': 'Aniele Boży, stróżu mój, Ty zawsze przy mnie stój. Rano, wieczór, we dnie, w nocy, bądź mi zawsze ku pomocy. Strzeż duszy, ciała mego i doprowadź mnie do żywota wiecznego. Amen.'
}

interface Step {
  title: string
  text: string
  isBead?: boolean
}

export default function PrayerMode({ prayerId, onClose }: { prayerId: string, onClose: () => void }) {
  const prayer = PRAYERS.find(p => p.id.toLowerCase() === prayerId.toLowerCase())
  const [currentStepIdx, setCurrentStepIdx] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedMysterySet, setSelectedMysterySet] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Advanced Expansion Logic
  const steps = useMemo(() => {
    if (!prayer) return []
    
    if (prayerId.toLowerCase() === 'rozaniec' && selectedMysterySet !== null) {
      const ms = prayer.mysteries[selectedMysterySet]
      const s: Step[] = [
        { title: 'Wierzę w Boga', text: COMMON_PRAYERS['wierzę w boga'] },
        { title: 'Ojcze Nasz', text: COMMON_PRAYERS['ojcze nasz'] },
        { title: 'Zdrowaś Maryjo (o wiarę)', text: COMMON_PRAYERS['zdrowaś maryjo'], isBead: true },
        { title: 'Zdrowaś Maryjo (o nadzieję)', text: COMMON_PRAYERS['zdrowaś maryjo'], isBead: true },
        { title: 'Zdrowaś Maryjo (o miłość)', text: COMMON_PRAYERS['zdrowaś maryjo'], isBead: true },
        { title: 'Chwała Ojcu', text: COMMON_PRAYERS['chwała ojcu'] },
      ]
      
      ms.items.forEach((m, i) => {
        s.push({ title: `Tajemnica ${i+1}`, text: m })
        s.push({ title: 'Ojcze Nasz', text: COMMON_PRAYERS['ojcze nasz'] })
        for(let j=0; j<10; j++) {
          s.push({ title: `Zdrowaś Maryjo (${j+1}/10)`, text: COMMON_PRAYERS['zdrowaś maryjo'], isBead: true })
        }
        s.push({ title: 'Chwała Ojcu', text: COMMON_PRAYERS['chwała ojcu'] })
        s.push({ title: 'Modlitwa Fatimska', text: 'O mój Jezu, przebacz nam nasze grzechy, zachowaj nas od ognia piekielnego, zaprowadź wszystkie dusze do nieba i dopomóż szczególnie tym, którzy najbardziej potrzebują Twojego miłosierdzia.' })
      })
      
      s.push({ title: 'Pod Twoją obronę', text: COMMON_PRAYERS['pod twoją obronę'] })
      return s
    }

    const expanded: Step[] = []
    prayer.parts.forEach(part => {
      const subParts = part.text.split(/\.\.\.|\n|; /).filter(t => t.trim().length > 0)
      
      subParts.forEach(sp => {
        const lower = sp.toLowerCase().trim()
        let matched = false
        for (const [key, full] of Object.entries(COMMON_PRAYERS)) {
          if (lower.includes(key)) {
            expanded.push({ title: key.charAt(0).toUpperCase() + key.slice(1), text: full })
            matched = true
            break
          }
        }
        
        if (!matched) {
          if (lower.includes('10 razy') || lower.includes('10x')) {
              for(let k=0; k<10; k++) {
                  expanded.push({ title: `${part.title} (${k+1}/10)`, text: sp, isBead: true })
              }
          } else if (lower.includes('3 razy') || lower.includes('3x')) {
              for(let k=0; k<3; k++) {
                  expanded.push({ title: `${part.title} (${k+1}/3)`, text: sp })
              }
          } else {
              expanded.push({ title: part.title, text: sp })
          }
        }
      })
    })

    return expanded
  }, [prayer, selectedMysterySet, prayerId])

  const next = useCallback(() => {
    if (currentStepIdx < steps.length - 1) {
      setCurrentStepIdx(s => s + 1)
      scrollRef.current?.scrollTo(0, 0)
      if (typeof window !== 'undefined' && window.navigator.vibrate) {
        window.navigator.vibrate(50)
      }
    } else {
      onClose()
    }
  }, [currentStepIdx, steps, onClose])

  const prev = useCallback(() => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(s => s - 1)
      scrollRef.current?.scrollTo(0, 0)
    }
  }, [currentStepIdx])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') { e.preventDefault(); next(); }
      if (e.code === 'ArrowLeft' || e.code === 'Backspace') { e.preventDefault(); prev(); }
      if (e.code === 'ArrowRight') { e.preventDefault(); next(); }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, prev])

  if (!prayer) return null

  if (prayerId.toLowerCase() === 'rozaniec' && selectedMysterySet === null) {
      return (
          <div className={`fixed inset-0 z-[100] flex flex-col ${isDarkMode ? 'bg-black text-white' : 'bg-[#FAF6F0] text-text-main'}`}>
              <div className="p-4 flex justify-between items-center">
                  <button onClick={onClose}><X /></button>
                  <h2 className="font-mystic font-bold">Wybierz Tajemnice</h2>
                  <div />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4 overflow-y-auto">
                  {prayer.mysteries.map((m, i) => (
                      <button key={i} onClick={() => setSelectedMysterySet(i)}
                        className="btn-primary py-6 w-full max-w-xs">{m.name}</button>
                  ))}
              </div>
          </div>
      )
  }

  const currentStep = steps[currentStepIdx]
  if (!currentStep) return null

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-black text-white' : 'bg-[#FAF6F0] text-text-main'}`}>
      {/* Top bar */}
      <div className="flex items-center justify-between p-4 bg-black/10">
        <div className="flex items-center gap-1">
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
                <X size={24} />
            </button>
            {currentStepIdx > 0 && (
                <button onClick={prev} className="p-2 rounded-full hover:bg-white/10 text-gold">
                    <ChevronLeft size={24} />
                </button>
            )}
        </div>
        <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{prayer.name}</p>
            <p className="text-[8px] opacity-40">Etap {currentStepIdx + 1} z {steps.length}</p>
        </div>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-white/10">
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      {/* Main Content Area - Scrollable */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-8 py-12 flex flex-col items-center justify-start text-center cursor-pointer"
        onClick={(e) => {
            const width = window.innerWidth
            if (e.clientX < width / 3) prev()
            else next()
        }}
      >
        <div className="animate-in fade-in zoom-in duration-300 w-full max-w-2xl mx-auto my-auto">
            <h2 className="text-xl font-mystic font-bold text-gold mb-8">{currentStep.title}</h2>
            <p className="text-xl md:text-3xl leading-relaxed font-serif whitespace-pre-wrap">
              {currentStep.text}
            </p>
        </div>
      </div>

      {/* Navigation Dots / Progress */}
      <div className="px-8 pb-6 space-y-4">
          <div className="flex flex-wrap justify-center gap-1.5 max-w-xs mx-auto opacity-60">
              {steps.map((s, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-300 ${
                        i === currentStepIdx ? 'w-4 bg-gold' : 
                        i < currentStepIdx ? 'w-1 bg-gold/40' : 
                        'w-1 bg-white/10'
                    }`} 
                  />
              ))}
          </div>

          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gold transition-all duration-300" 
                style={{ width: `${((currentStepIdx + 1) / steps.length) * 100}%` }} />
          </div>
      </div>

      {/* Footer Hint */}
      <div className="p-4 text-center opacity-20 text-[8px] font-bold uppercase tracking-[0.2em]">
        L: Wstecz | P: Dalej | Spacja: Dalej
      </div>
    </div>
  )
}
