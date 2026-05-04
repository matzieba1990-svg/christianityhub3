'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PageHeader from '@/components/PageHeader'
import { Users, Globe, Lock } from 'lucide-react'

export default function NewCommunityPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) {
      setError('Nazwa wspólnoty jest wymagana.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, isPublic })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Wystąpił błąd podczas tworzenia wspólnoty.')
      } else {
        router.push('/community')
        router.refresh()
      }
    } catch (err) {
      setError('Wystąpił błąd. Spróbuj ponownie później.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pb-6">
      <PageHeader title="Nowa wspólnota" />

      <div className="px-4 py-4 max-w-xl mx-auto">
        <div className="card p-6 bg-white">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: '#FAF6F0', color: 'var(--gold)', border: '1px solid var(--border)' }}>
              <Users size={32} />
            </div>
            <h2 className="text-xl font-mystic font-bold text-center" style={{ color: 'var(--gold-dark)' }}>
              Załóż wspólnotę
            </h2>
            <p className="text-sm text-center mt-2" style={{ color: 'var(--text-muted)' }}>
              Stwórz grupę, aby modlić się razem z innymi.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide mb-1 block" style={{ color: 'var(--text-muted)' }}>
                Nazwa wspólnoty *
              </label>
              <input 
                className="inp" 
                placeholder="Np. Odnowa w Duchu Świętym - Parafia św. Jana" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide mb-1 block" style={{ color: 'var(--text-muted)' }}>
                Opis (opcjonalnie)
              </label>
              <textarea 
                className="inp min-h-[100px] resize-y" 
                placeholder="Krótko opisz cel i charyzmat Waszej grupy..." 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide mb-2 block" style={{ color: 'var(--text-muted)' }}>
                Prywatność
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  onClick={() => setIsPublic(true)}
                  className={`p-3 rounded-xl border flex flex-col items-center text-center gap-2 transition-colors ${isPublic ? 'border-gold bg-[#FAF6F0]' : 'border-border bg-white hover:border-gold/30'}`}
                >
                  <Globe size={20} style={{ color: isPublic ? 'var(--gold)' : 'var(--text-muted)' }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>Publiczna</p>
                    <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Każdy może dołączyć</p>
                  </div>
                </button>
                <button 
                  type="button"
                  onClick={() => setIsPublic(false)}
                  className={`p-3 rounded-xl border flex flex-col items-center text-center gap-2 transition-colors ${!isPublic ? 'border-gold bg-[#FAF6F0]' : 'border-border bg-white hover:border-gold/30'}`}
                >
                  <Lock size={20} style={{ color: !isPublic ? 'var(--gold)' : 'var(--text-muted)' }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>Prywatna</p>
                    <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Tylko na zaproszenie</p>
                  </div>
                </button>
              </div>
            </div>

            {error && (
              <div className="text-sm text-center p-3 rounded-xl"
                style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}>
                {error}
              </div>
            )}

            <button type="submit" className="btn-gold mt-4 w-full" disabled={loading}>
              {loading ? '⏳ Tworzenie...' : 'Załóż wspólnotę'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
