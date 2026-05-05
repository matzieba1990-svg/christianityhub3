'use client'
import { useState, useEffect } from 'react'
import { ChevronRight, Heart, Users, Star, Bell } from 'lucide-react'

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeen = localStorage.getItem('chub-onboarding-seen')
    if (!hasSeen) {
      setIsVisible(true)
    }
  }, [])

  const finish = () => {
    localStorage.setItem('chub-onboarding-seen', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  const steps = [
    {
      title: 'Witaj w ChristianityHub',
      desc: 'Twoja osobista przestrzeń do wzrostu duchowego i modlitwy wspólnotowej.',
      icon: <Star className="text-gold" size={40} />
    },
    {
      title: 'Złóż intencję',
      desc: 'Potrzebujesz wsparcia? Dodaj prośbę, a inni członkowie wspólnoty podejmą modlitwę w Twoim imieniu.',
      icon: <Heart className="text-red-500" size={40} />
    },
    {
      title: 'Znajdź wspólnotę',
      desc: 'Dołącz do grup modlitewnych w Twojej okolicy lub twórz własne kręgi modlitwy.',
      icon: <Users className="text-blue-500" size={40} />
    },
    {
      title: 'Powiadomienia',
      desc: 'Włącz powiadomienia, aby nie przegapić czasu na modlitwę i wiedzieć, gdy ktoś modli się za Ciebie.',
      icon: <Bell className="text-gold" size={40} />
    }
  ]

  const current = steps[step]

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-8 text-center animate-fade-in">
      <div className="w-24 h-24 rounded-3xl bg-[#FAF6F0] flex items-center justify-center mb-8 shadow-sm border border-gold/10">
        {current.icon}
      </div>
      
      <h2 className="text-2xl font-mystic font-bold text-text-main mb-4">{current.title}</h2>
      <p className="text-sm text-text-muted leading-relaxed mb-12 max-w-xs mx-auto">
        {current.desc}
      </p>

      <div className="flex gap-2 mb-8">
        {steps.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === step ? 'w-6 bg-gold' : 'bg-gold/20'}`} />
        ))}
      </div>

      <button 
        onClick={() => step < steps.length - 1 ? setStep(step + 1) : finish()}
        className="btn-gold w-full flex items-center justify-center gap-2 max-w-xs py-4"
      >
        {step < steps.length - 1 ? 'Dalej' : 'Zaczynamy'}
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
