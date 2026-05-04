'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Błąd rejestracji'); return }
      const { signIn } = await import('next-auth/react')
      await signIn('credentials', { email, password, callbackUrl: '/dashboard' })
    } catch {
      setError('Błąd sieciowy. Sprawdź połączenie.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-dvh flex flex-col px-6 py-10"
      style={{ background: 'var(--bg-primary)' }}>

      <div className="flex flex-col items-center mb-8 mt-6">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3"
          style={{ background: 'linear-gradient(135deg, #FFF, #FDF9F3)', border: '1px solid var(--gold)', boxShadow: '0 4px 20px rgba(201,162,39,0.15)' }}>
          ✝
        </div>
        <h1 className="text-2xl font-mystic font-black text-gold-gradient">ChristianityHub</h1>
      </div>

      <div className="card p-6 mb-4">
        <h2 className="text-xl font-mystic font-bold mb-6 text-center" style={{ color: 'var(--text-main)' }}>Utwórz konto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide mb-1 block" style={{ color: 'var(--text-muted)' }}>Imię i nazwisko</label>
            <input className="inp" placeholder="Jan Kowalski" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide mb-1 block" style={{ color: 'var(--text-muted)' }}>Email</label>
            <input type="email" className="inp" placeholder="jan@example.pl" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide mb-1 block" style={{ color: 'var(--text-muted)' }}>Hasło</label>
            <input type="password" className="inp" placeholder="Min. 8 znaków" value={password} onChange={e => setPassword(e.target.value)} required minLength={8} />
          </div>

          {error && (
            <div className="text-sm text-center p-3 rounded-xl"
              style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}>
              {error}
            </div>
          )}

          <button type="submit" className="btn-gold mt-2" disabled={loading}>
            {loading ? '⏳ Rejestracja…' : '🙏 Dołącz do wspólnoty'}
          </button>
        </form>
      </div>

      <p className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>
        Masz już konto?{' '}
        <Link href="/login" className="font-semibold" style={{ color: 'var(--gold-light)' }}>Zaloguj się</Link>
      </p>
    </div>
  )
}
