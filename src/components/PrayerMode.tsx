'use client'
import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Moon, Sun, Smartphone, RotateCcw, CheckCircle2, Music, Music2 } from 'lucide-react'
import { PRAYERS } from '@/lib/prayers'

const COMMON_PRAYERS: Record<string, string> = {
  'ojcze nasz': 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje, przyjdź królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj, i odpuść nam nasze winy, jako i mi odpuszczamy naszym winowajcom. I nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.',
  'zdrowaś maryjo': 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą, błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi teraz i w godzinę śmierci naszej. Amen.',
  'wierzę w boga': 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi. I w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał. Wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego. Stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.',
  'chwała ojcu': 'Chwała Ojcu i Synowi, i Duchowi Świętemu. Jak była na początku, teraz i zawsze, i na wieki wieków. Amen.',
  'wieczny odpoczynek': 'Wieczny odpoczynek racz im dać Panie, a światłość wiekuista niechaj im świeci. Niech odpoczywają w pokoju wiecznym. Amen.',
  'pod twoją obronę': 'Pod Twoją obronę uciekamy się, święta Boża Rodzicielko, naszymi prośbami racz nie gardzić w potrzebach naszych, ale od wszelakich złych przygód racz nas zawsze wybawiać, Panno chwalebna i błogosławiona. O Pani nasza, Orędowniczko nasza, Pośredniczko nasza, Pocieszierko nasza. Z Synem swoim nas pojednaj, Synowi swojemu nas polecaj, swojemu Synowi nas oddawaj. Amen.',
  'aniele boży': 'Aniele Boży, stróżu mój, Ty zawsze przy mnie stój. Rano, wieczór, we dnie, w nocy, bądź mi zawsze ku pomocy. Strzeż duszy, ciała mego i doprowadź mnie do żywota wiecznego. Amen.'
}

interface Step {
  title: string
  text: string
  isBead?: boolean
  meta?: string
}

export default function PrayerMode({ prayerId, day = 1, onClose }: { prayerId: string, day?: number, onClose: () => void }) {
  const prayer = PRAYERS.find(p => p.id.toLowerCase() === prayerId.toLowerCase())
  const [currentStepIdx, setCurrentStepIdx] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeTrack, setActiveTrack] = useState<number>(1) // 1: Cosmic, 2: Astral, 0: Off
  const [selectedMysterySet, setSelectedMysterySet] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Attempt autoplay
    if (audioRef.current && activeTrack !== 0) {
        audioRef.current.play().catch(e => {
            console.log("Autoplay blocked:", e)
            setActiveTrack(0)
        })
    }
  }, [activeTrack])

  const isRosaryBased = prayerId.toLowerCase() === 'rozaniec' || prayerId.toLowerCase() === 'nowenna-pompejanska'

  // Advanced Expansion Logic
  const steps = useMemo(() => {
    if (!prayer) return []
    
    // Custom logic for Rosary/Pompeian
    if (isRosaryBased && selectedMysterySet !== null) {
      const ms = prayerId.toLowerCase() === 'nowenna-pompejanska' 
        ? PRAYERS.find(p => p.id === 'rozaniec')!.mysteries[selectedMysterySet]
        : prayer.mysteries[selectedMysterySet]

      const s: Step[] = []
      
      // Pompeian intro
      if (prayerId.toLowerCase() === 'nowenna-pompejanska') {
          const isPetition = day <= 27
          s.push({ 
              title: isPetition ? 'Modlitwa Błagalna' : 'Modlitwa Dziękczynna', 
              text: isPetition ? prayer.parts[0].text : prayer.parts[1].text 
          })
      }

      s.push({ title: 'Wierzę w Boga', text: COMMON_PRAYERS['wierzę w boga'] })
      s.push({ title: 'Ojcze Nasz', text: COMMON_PRAYERS['ojcze nasz'] })
      for(let j=0; j<3; j++) s.push({ title: `Zdrowaś Maryjo (${j+1}/3)`, text: COMMON_PRAYERS['zdrowaś maryjo'], isBead: true })
      s.push({ title: 'Chwała Ojcu', text: COMMON_PRAYERS['chwała ojcu'] })
      
      ms.items.forEach((m, i) => {
        s.push({ title: `Tajemnica ${i+1}`, text: m, meta: 'Rozważanie' })
        s.push({ title: 'Ojcze Nasz', text: COMMON_PRAYERS['ojcze nasz'] })
        for(let j=0; j<10; j++) {
          s.push({ title: `Zdrowaś Maryjo (${j+1}/10)`, text: COMMON_PRAYERS['zdrowaś maryjo'], isBead: true, meta: `Dziesiątka ${i+1}` })
        }
        s.push({ title: 'Chwała Ojcu', text: COMMON_PRAYERS['chwała ojcu'] })
        s.push({ title: 'Modlitwa Fatimska', text: 'O mój Jezu, przebacz nam nasze grzechy...' })
      })
      
      s.push({ title: 'Pod Twoją obronę', text: COMMON_PRAYERS['pod twoją obronę'] })
      
      // Pompeian outro
      if (prayerId.toLowerCase() === 'nowenna-pompejanska') {
          s.push({ title: 'Królowo Różańca Świętego', text: 'Królowo Różańca Świętego z Pompei, módl się za nami!' })
      }
      return s
    }

    const expanded: Step[] = []
    const filteredParts = prayer.parts.filter(p => !p.day || p.day === day)

    filteredParts.forEach(part => {
      // Split by common delimiters and handle repetitions
      const lines = part.text.split(/\n|; /).filter(t => t.trim().length > 0)
      
      lines.forEach(line => {
        const lower = line.toLowerCase().trim()
        let matched = false
        
        // Check for common prayers
        for (const [key, full] of Object.entries(COMMON_PRAYERS)) {
          if (lower.includes(key)) {
            expanded.push({ title: key.charAt(0).toUpperCase() + key.slice(1), text: full })
            matched = true
            break
          }
        }
        
        if (!matched) {
          // Check for repetitions like (10x), (10 razy), (3x)
          const repMatch = line.match(/\((\d+)\s*(x|razy)\)/i) || line.match(/(\d+)\s*(x|razy)/i)
          if (repMatch) {
            const count = parseInt(repMatch[1])
            const baseText = line.replace(repMatch[0], '').trim() || part.title
            for(let k=0; k<count; k++) {
              expanded.push({ 
                title: `${part.title} (${k+1}/${count})`, 
                text: baseText, 
                isBead: count >= 10,
                meta: count >= 10 ? 'Dziesiątka' : ''
              })
            }
          } else {
            expanded.push({ title: part.title, text: line })
          }
        }
      })
    })

    return expanded
  }, [prayer, selectedMysterySet, prayerId, day, isRosaryBased])

  const next = useCallback(() => {
    if (currentStepIdx < steps.length - 1) {
      setCurrentStepIdx(s => s + 1)
      scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
      if (typeof window !== 'undefined' && window.navigator.vibrate) {
        window.navigator.vibrate(currentStepIdx % 10 === 0 ? [100, 50, 100] : 40)
      }
    } else {
      onClose()
    }
  }, [currentStepIdx, steps, onClose])

  const prev = useCallback(() => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(s => s - 1)
      scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [currentStepIdx])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); next(); }
      if (e.code === 'ArrowLeft' || e.code === 'Backspace') { e.preventDefault(); prev(); }
      if (e.code === 'ArrowRight') { e.preventDefault(); next(); }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, prev])

  if (!prayer) return null

  // Mystery Selection
  if (isRosaryBased && selectedMysterySet === null) {
      return (
          <div className={`fixed inset-0 z-[100] flex flex-col ${isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-white text-text-main'}`}>
              <div className="p-6 flex justify-between items-center border-b border-white/10">
                  <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5"><X size={20}/></button>
                  <h2 className="font-mystic text-xl font-bold text-gold">Wybierz Tajemnice</h2>
                  <div className="w-10" />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-8 gap-4 overflow-y-auto">
                  <div className="text-center mb-6">
                      <p className="text-sm opacity-60 mb-1">{prayer.name}</p>
                      <p className="text-gold font-bold uppercase tracking-widest text-[10px]">Dzień {day}</p>
                  </div>
                  {PRAYERS.find(p => p.id === 'rozaniec')?.mysteries.map((m, i) => (
                      <button key={i} onClick={() => setSelectedMysterySet(i)}
                        className="w-full max-w-sm p-6 rounded-3xl border border-gold/20 bg-gold/5 hover:bg-gold/10 hover:border-gold/50 transition-all text-left flex items-center justify-between group">
                        <span className="font-bold text-sm">{m.name}</span>
                        <ChevronRight size={18} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                  ))}
              </div>
          </div>
      )
  }

  const currentStep = steps[currentStepIdx]
  if (!currentStep) return null

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col transition-colors duration-700 ${isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#FAF9F6] text-text-main'}`}>
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <X size={20} />
            </button>
            {currentStepIdx > 0 && (
                <button onClick={prev} className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/10 text-gold hover:bg-gold/20 transition-colors">
                    <ChevronLeft size={20} />
                </button>
            )}
        </div>
        
        <div className="text-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <span className="text-[9px] font-black uppercase tracking-widest text-gold">{prayer.name}</span>
                {day > 1 && <span className="text-[9px] font-black text-text-muted">• DZIEŃ {day}</span>}
            </div>
            <div className="flex items-center justify-center gap-1">
                <p className="text-[10px] font-bold opacity-40 uppercase">Krok {currentStepIdx + 1}</p>
                <span className="opacity-20 text-[10px]">/</span>
                <p className="text-[10px] font-bold opacity-40 uppercase">{steps.length}</p>
            </div>
        </div>

        <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
                {activeTrack !== 0 && (
                    <span className="text-[10px] text-gold/60 uppercase tracking-widest animate-fade-in">
                        {activeTrack === 1 ? 'Cosmic' : 'Astral'}
                    </span>
                )}
                <button 
                onClick={() => {
                    const audio = audioRef.current
                    if (!audio) return
                    const next = (activeTrack + 1) % 3
                    setActiveTrack(next)
                    if (next === 0) {
                        audio.pause()
                    } else {
                        // Change src and play
                        audio.src = `/audio/meditation${next}.mp3`
                        audio.play().catch(e => console.error("Play failed:", e))
                    }
                }} 
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${activeTrack !== 0 ? 'bg-gold/20 text-gold animate-pulse' : 'bg-white/5 text-white/40'}`}>
                {activeTrack !== 0 ? <Music2 size={18} /> : <Music size={18} />}
                </button>
            </div>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
      </div>

      {/* Main Interaction Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-6 py-12 flex flex-col items-center justify-start text-center cursor-pointer select-none"
        onClick={(e) => {
            const width = window.innerWidth
            if (e.clientX < width * 0.25) prev()
            else next()
        }}
      >
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-2xl mx-auto my-auto py-10">
            {currentStep.meta && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-[9px] font-black uppercase tracking-widest mb-6 border border-gold/20">
                   <Smartphone size={10} /> {currentStep.meta}
                </div>
            )}
            <h2 className="text-xl md:text-2xl font-mystic font-bold text-gold-gradient mb-8 leading-tight">
                {currentStep.title}
            </h2>
            <div className="relative">
                <p className="text-lg md:text-2xl leading-relaxed font-mystic whitespace-pre-wrap px-4 italic">
                  {currentStep.text}
                </p>
            </div>
        </div>
      </div>

      {/* Bottom Navigation & Progress */}
      <div className="relative z-10 px-6 pb-8 md:pb-12 bg-gradient-to-t from-black/20 to-transparent">
          {/* Beaded Progress - Much more visible */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-md mx-auto">
              {steps.map((s, i) => {
                  const isCurrent = i === currentStepIdx
                  const isPast = i < currentStepIdx
                  if (steps.length > 50 && !isCurrent && Math.abs(i - currentStepIdx) > 5) return null
                  
                  return (
                      <div 
                        key={i} 
                        className={`h-2 rounded-full transition-all duration-500 ${
                            isCurrent ? 'w-8 bg-gold shadow-[0_0_15px_rgba(201,162,39,0.5)]' : 
                            isPast ? 'w-2 bg-gold/40' : 
                            'w-2 bg-white/10'
                        }`} 
                      />
                  )
              })}
              {steps.length > 50 && (
                  <span className="text-[8px] font-bold opacity-30 uppercase tracking-tighter self-center">...</span>
              )}
          </div>

          <div className="max-w-xs mx-auto text-center space-y-4">
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gold-gradient shadow-[0_0_10px_rgba(201,162,39,0.3)] transition-all duration-500 ease-out" 
                    style={{ width: `${((currentStepIdx + 1) / steps.length) * 100}%` }} />
              </div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30 animate-pulse">
                Dotknij aby kontynuować
              </p>
          </div>
      </div>

      {/* Touch hint overlays */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
      {/* Audio Element */}
      <audio 
        ref={audioRef}
        src="/audio/meditation1.mp3"
        loop
        autoPlay
        preload="auto"
        onLoadedData={(e) => { e.currentTarget.volume = 0.4 }}
        onError={(e) => {
            console.error("Audio source failed to load:", e.currentTarget.error?.code, e.currentTarget.error?.message)
            setActiveTrack(0)
        }}
      />
    </div>
  )
}
