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

  const handleReject = () => {
    localStorage.setItem('christianityhub_cookies', 'rejected')
    setShow(false)
    window.history.back()
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 sm:p-6 z-50 animate-fade-in pointer-events-none">
      <div className="max-w-4xl mx-auto card bg-white border border-border shadow-2xl p-5 sm:p-6 flex flex-col md:flex-row gap-5 items-center justify-between rounded-2xl pointer-events-auto">
        <div className="text-sm text-text-main flex-1">
          <p className="font-bold mb-1" style={{ color: 'var(--gold-dark)' }}>Szanujemy Twoją prywatność</p>
          Nasza strona używa plików cookies w celach analitycznych i do prawidłowego działania funkcji takich jak logowanie. 
          Dowiedz się więcej w naszym <Link href="/rodo" className="underline font-semibold" style={{ color: 'var(--gold)' }}>Regulaminie i polityce RODO</Link>.
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-2 md:mt-0">
          <button 
            onClick={handleReject}
            className="btn-outline w-full sm:w-auto whitespace-nowrap text-sm px-6 py-2.5 flex-1"
          >
            Odrzuć
          </button>
          <button 
            onClick={handleAccept}
            className="btn-gold w-full sm:w-auto whitespace-nowrap text-sm px-6 py-2.5 flex-1"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  )
}
