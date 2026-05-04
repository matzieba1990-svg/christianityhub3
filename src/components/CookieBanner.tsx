'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('christianityhub_cookies')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('christianityhub_cookies', 'accepted')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 animate-fade-in" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto card bg-white border border-border shadow-lg p-5 flex flex-col sm:flex-row gap-4 items-center justify-between rounded-2xl">
        <div className="text-sm text-text-main flex-1">
          <p className="font-bold mb-1" style={{ color: 'var(--gold-dark)' }}>Szanujemy Twoją prywatność</p>
          Nasza strona używa plików cookies w celach analitycznych i do prawidłowego działania funkcji takich jak logowanie. 
          Dowiedz się więcej w naszym <Link href="/rodo" className="underline font-semibold" style={{ color: 'var(--gold)' }}>Regulaminie i polityce RODO</Link>.
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button 
            onClick={handleAccept}
            className="btn-gold whitespace-nowrap flex-1 sm:flex-none text-sm px-6 py-2"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  )
}
