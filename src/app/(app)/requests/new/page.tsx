'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PageHeader from '@/components/PageHeader'

export default function NewRequestPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('inne')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, category, isAnonymous })
      })
      
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Wystąpił błąd')
      }
      
      router.push('/requests')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pb-6">
      <PageHeader title="Złóż prośbę" />
      
      <div className="px-4 mt-6">
        <form onSubmit={handleSubmit} className="space-y-4 card p-5">
          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>Tytuł (krótko)</label>
            <input className="inp" required value={title} onChange={e => setTitle(e.target.value)} placeholder="Np. Za zdrowie mamy" maxLength={60} />
          </div>
          
          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>Treść prośby</label>
            <textarea className="inp" required value={content} onChange={e => setContent(e.target.value)} rows={4} placeholder="Opisz w jakiej intencji mamy się modlić..." maxLength={500} />
          </div>
          
          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>Kategoria</label>
            <select className="inp" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="zdrowie">🏥 Zdrowie</option>
              <option value="nawrocenie">🕊️ Nawrócenie</option>
              <option value="dziekczynienie">🙏 Dziękczynienie</option>
              <option value="rodzina">👨‍👩‍👧 Rodzina</option>
              <option value="praca">💼 Praca</option>
              <option value="inne">✝️ Inne</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2 pt-2">
            <input type="checkbox" id="anon" checked={isAnonymous} onChange={e => setIsAnonymous(e.target.checked)} className="w-4 h-4 accent-[#C9A227]" />
            <label htmlFor="anon" className="text-sm" style={{ color: 'var(--text-main)' }}>Opublikuj anonimowo (ukryj imię)</label>
          </div>
          
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          
          <button type="submit" disabled={loading} className="btn-primary mt-4">
            {loading ? 'Wysyłanie...' : 'Opublikuj prośbę'}
          </button>
        </form>
      </div>
    </div>
  )
}
