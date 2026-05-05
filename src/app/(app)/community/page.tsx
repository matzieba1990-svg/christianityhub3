'use client'
import PageHeader from '@/components/PageHeader'
import { Users, Plus, ChevronRight, Lock, Globe } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

export default function CommunityPage() {
  const { data: session } = useSession()
  const [communities, setCommunities] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/community')
      .then(res => res.json())
      .then(data => {
        if (data.communities) {
          setCommunities(data.communities)
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const filteredCommunities = communities.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    (c.description && c.description.toLowerCase().includes(search.toLowerCase()))
  )

  const isAdmin = (session?.user as any)?.role === 'admin'

  async function handleDelete(id: string, e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    if (!confirm('Czy na pewno chcesz usunąć tę wspólnotę?')) return

    try {
      const res = await fetch(`/api/community?id=${id}`, { method: 'DELETE' })
      if (res.ok) {
        setCommunities(communities.filter(c => c.id !== id))
      } else {
        alert('Błąd podczas usuwania wspólnoty')
      }
    } catch (err) {
      console.error(err)
      alert('Wystąpił błąd')
    }
  }

  return (
    <div className="pb-6">
      <PageHeader
        title="Wspólnoty"
        subtitle="Grupy modlitewne i parafialne"
        right={
          <Link href="/community/new"
            className="w-9 h-9 flex items-center justify-center rounded-full"
            style={{ background: 'white', border: '1px solid var(--gold)', color: 'var(--gold)' }}>
            <Plus size={18} />
          </Link>
        }
      />

      <div className="px-4">
        {/* Search */}
        <input 
          className="inp mb-4" 
          placeholder="Szukaj wspólnoty..." 
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* Communities */}
        <div className="space-y-3">
          {loading ? (
            <div className="text-center py-8 text-text-muted text-sm">Ładowanie wspólnot...</div>
          ) : filteredCommunities.length === 0 ? (
            <div className="text-center py-8 text-text-muted text-sm">Nie znaleziono żadnych wspólnot.</div>
          ) : (
            filteredCommunities.map(c => (
              <div key={c.id} className="relative group">
                <Link href={`/community/${c.id}`}
                  className="card prayer-card flex items-center gap-4 p-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)', color: 'var(--gold)' }}>
                    <Users size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-sm truncate" style={{ color: 'var(--text-main)' }}>{c.name}</p>
                      {!c.isPublic && <Lock size={12} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />}
                      {c.isPublic && <Globe size={12} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />}
                    </div>
                    <p className="text-xs line-clamp-2 mb-2" style={{ color: 'var(--text-muted)' }}>{c.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Users size={11} style={{ color: 'var(--gold)' }} />
                        <span className="text-xs font-semibold" style={{ color: 'var(--gold)' }}>{c.membersCount || 1} członków</span>
                      </div>
                      
                      {isAdmin && (
                        <button 
                          onClick={(e) => handleDelete(c.id, e)}
                          className="text-[10px] text-red-500 font-bold uppercase tracking-wider hover:bg-red-50 px-2 py-1 rounded"
                        >
                          Usuń
                        </button>
                      )}
                    </div>
                  </div>
                  <ChevronRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                </Link>
              </div>
            ))
          )}
        </div>

        {/* Create CTA */}
        <div className="card mt-5 p-5 text-center" style={{ borderColor: 'var(--gold)', background: 'white' }}>
          <div className="w-10 h-10 rounded-full bg-[#FAF6F0] flex items-center justify-center mx-auto mb-3" style={{ color: 'var(--gold)' }}>
            <Users size={20} />
          </div>
          <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-main)' }}>Nie ma Twojej wspólnoty?</p>
          <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Załóż grupę dla swojej parafii lub ruchu modlitewnego</p>
          <Link href="/community/new" className="btn-outline inline-block" style={{ fontSize: '14px', padding: '10px 20px' }}>
            + Utwórz wspólnotę
          </Link>
        </div>
      </div>
    </div>
  )
}
