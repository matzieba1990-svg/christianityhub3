'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { signIn } = await import('next-auth/react')
      const res = await signIn('credentials', { email, password, redirect: false })
      if (res?.error) {
        setError('Nieprawidłowy email lub hasło.')
      } else {
        router.push('/dashboard')
      }
    } catch {
      setError('Wystąpił błąd. Spróbuj ponownie.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-dvh flex flex-col px-6 py-10"
      style={{ background: 'linear-gradient(180deg, #0f0720 0%, #1a0f35 100%)' }}>

      {/* Logo */}
      <div className="flex flex-col items-center mb-10 mt-8">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-4"
          style={{ background: 'linear-gradient(135deg,#7c3aed,#c9a227)', boxShadow: '0 0 40px rgba(124,58,237,0.4)' }}>
          ✝
        </div>
        <h1 className="text-3xl font-black text-gold-gradient">ChristianityHub</h1>
        <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Wspólnota Katolicka</p>
      </div>

      {/* Form */}
      <div className="card p-6 mb-4">
        <h2 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--text-main)' }}>Zaloguj się</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide mb-1 block"
              style={{ color: 'var(--text-muted)' }}>Email</label>
            <input type="email" className="inp" placeholder="jan.kowalski@example.pl"
              value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide mb-1 block"
              style={{ color: 'var(--text-muted)' }}>Hasło</label>
            <div className="relative">
              <input type={show ? 'text' : 'password'} className="inp pr-12" placeholder="••••••••"
                value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" />
              <button type="button" onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }}>
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="text-sm text-center p-3 rounded-xl"
              style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}>
              {error}
            </div>
          )}

          <button type="submit" className="btn-primary mt-2" disabled={loading}>
            {loading ? '⏳ Logowanie…' : 'Zaloguj się'}
          </button>
        </form>
      </div>

      <p className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>
        Nie masz konta?{' '}
        <Link href="/register" className="font-semibold" style={{ color: 'var(--gold-light)' }}>
          Zarejestruj się
        </Link>
      </p>

      <p className="text-center text-xs mt-10 opacity-50" style={{ color: 'var(--text-muted)' }}>
        ✝ W Imię Ojca i Syna i Ducha Świętego
      </p>
    </div>
  )
}
