'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import PageHeader from '@/components/PageHeader'
import { Users, Globe, Lock, UserPlus, LogOut, MessageCircle, Heart } from 'lucide-react'

export default function CommunityDetailsPage() {
  const { id } = useParams()
  const router = useRouter()
  const { data: session } = useSession()
  
  const [community, setCommunity] = useState<any>(null)
  const [isMember, setIsMember] = useState(false)
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)

  useEffect(() => {
    fetch(`/api/community/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.community) {
          setCommunity(data.community)
          setIsMember(data.isMember)
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  async function toggleMembership() {
    if (!session) {
      router.push('/login')
      return
    }
    
    setActionLoading(true)
    try {
      const action = isMember ? 'leave' : 'join'
      const res = await fetch(`/api/community/${id}?action=${action}`, { method: 'POST' })
      if (res.ok) {
        setIsMember(!isMember)
        // Refresh members count (optimistic update)
        if (action === 'join') {
          setCommunity({
            ...community,
            members: [...community.members, { user: { id: session.user?.id, name: session.user?.name, image: session.user?.image }, role: 'member' }]
          })
        } else {
          setCommunity({
            ...community,
            members: community.members.filter((m: any) => m.user.id !== session.user?.id)
          })
        }
      }
    } catch (err) {
      console.error(err)
    } finally {
      setActionLoading(false)
    }
  }

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('inne')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [formError, setFormError] = useState('')

  async function handleAddIntent(e: React.FormEvent) {
    e.preventDefault()
    if (!title || !content) return

    setSubmitLoading(true)
    setFormError('')

    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, category, isAnonymous, communityId: id })
      })

      if (res.ok) {
        const { request } = await res.json()
        // Optimistically add the new request to the top of the list
        const newRequest = {
          ...request,
          user: isAnonymous ? null : { name: session?.user?.name, image: session?.user?.image },
          _count: { acceptances: 0 }
        }
        setCommunity({ ...community, prayerRequests: [newRequest, ...(community.prayerRequests || [])] })
        setTitle('')
        setContent('')
        setIsAnonymous(false)
      } else {
        const data = await res.json()
        setFormError(data.error || 'Błąd dodawania intencji')
      }
    } catch (err) {
      setFormError('Błąd połączenia')
    } finally {
      setSubmitLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="pb-6 min-h-dvh">
        <PageHeader title="Wspólnota" />
        <div className="flex justify-center items-center py-20 text-text-muted">
          Ładowanie...
        </div>
      </div>
    )
  }

  if (!community) {
    return (
      <div className="pb-6 min-h-dvh">
        <PageHeader title="Nie znaleziono" />
        <div className="text-center py-20 text-text-muted">Ta wspólnota nie istnieje lub jest prywatna.</div>
      </div>
    )
  }

  return (
    <div className="pb-6 min-h-dvh">
      <PageHeader title={community.name} />

      <div className="px-4 mt-2">
        {/* Banner / Header */}
        <div className="card bg-white p-6 mb-6 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
          
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-4 relative z-10"
            style={{ background: '#FAF6F0', border: '2px solid var(--gold)', boxShadow: '0 4px 20px rgba(201,162,39,0.15)', color: 'var(--gold)' }}>
            <Users size={36} />
          </div>
          
          <h1 className="text-2xl font-mystic font-bold text-text-main mb-2">{community.name}</h1>
          
          <div className="flex items-center gap-2 mb-4 justify-center">
            {community.isPublic ? (
              <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1" style={{ background: 'rgba(201,162,39,0.1)', color: 'var(--gold-dark)' }}>
                <Globe size={10} /> Publiczna
              </span>
            ) : (
              <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1" style={{ background: 'rgba(156,163,175,0.1)', color: 'var(--text-muted)' }}>
                <Lock size={10} /> Prywatna
              </span>
            )}
            <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider" style={{ background: 'var(--bg-primary)', color: 'var(--text-main)' }}>
              {community.members.length} Członków
            </span>
          </div>

          {community.description && (
            <p className="text-sm text-text-muted px-4 leading-relaxed italic border-l-2 border-gold pl-3">
              "{community.description}"
            </p>
          )}

          {/* Removed button from here */}
        </div>

        {/* Community Dashboard (Only if member or public) */}
        {(isMember || community.isPublic) && (
          <div className="space-y-4">
            
            <h2 className="font-mystic text-lg font-bold text-gold-dark px-2">Modlitwy</h2>
            
            {/* List of Requests */}
            <div className="space-y-3">
              {(!community.prayerRequests || community.prayerRequests.length === 0) ? (
                <div className="card p-5 bg-white border border-dashed border-gold/40 text-center py-8 mb-4">
                  <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: '#FAF6F0', color: 'var(--gold)' }}>
                    <MessageCircle size={20} />
                  </div>
                  <h3 className="font-bold text-sm text-text-main mb-1">Brak intencji</h3>
                  <p className="text-xs text-text-muted max-w-xs mx-auto">
                    Nikt jeszcze nie dodał intencji w tej wspólnocie. Bądź pierwszy!
                  </p>
                </div>
              ) : (
                community.prayerRequests.map((req: any) => (
                  <div key={req.id} className="card p-4 bg-white mb-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-sm text-text-main">{req.title}</h4>
                        <p className="text-[10px] text-text-muted flex items-center gap-1 mt-1">
                          Od: {req.isAnonymous || !req.user ? 'Anonimowo' : req.user.name} 
                          <span className="mx-1">•</span> 
                          {new Date(req.createdAt).toLocaleDateString('pl-PL')}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-gold bg-gold/10 px-2 py-1 rounded-md">
                        {req._count?.acceptances || 0} modli się
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed whitespace-pre-wrap">{req.content}</p>
                  </div>
                ))
              )}
            </div>

            {isMember && (
              <div className="card p-4 bg-white mt-6 mb-4">
                <h3 className="text-sm font-bold text-text-main mb-3 flex items-center gap-2">
                  <Heart size={16} className="text-gold" /> Dodaj intencję do wspólnoty
                </h3>
                <form onSubmit={handleAddIntent} className="space-y-3">
                  <input 
                    className="inp text-sm py-2" 
                    placeholder="W jakiej intencji się modlimy?" 
                    value={title} onChange={e => setTitle(e.target.value)} required 
                  />
                  <textarea 
                    className="inp text-sm min-h-[60px] py-2" 
                    placeholder="Opisz intencję, nowennę..." 
                    value={content} onChange={e => setContent(e.target.value)} required 
                  />
                  
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-xs text-text-muted cursor-pointer">
                      <input type="checkbox" checked={isAnonymous} onChange={e => setIsAnonymous(e.target.checked)} className="rounded border-border text-gold focus:ring-gold" />
                      Dodaj anonimowo
                    </label>
                    <button type="submit" className="btn-gold text-xs py-1.5 px-4" disabled={submitLoading}>
                      {submitLoading ? 'Dodawanie...' : 'Dodaj'}
                    </button>
                  </div>
                  {formError && <p className="text-xs text-red-500">{formError}</p>}
                </form>
              </div>
            )}

            <h2 className="font-mystic text-lg font-bold text-gold-dark px-2 mt-6">Członkowie ({community.members.length})</h2>
            <div className="card bg-white p-2">
              {community.members.map((member: any) => (
                <div key={member.user.id} className="flex items-center gap-3 p-3 border-b border-border last:border-0">
                  <div className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center font-bold text-gold-dark overflow-hidden shrink-0">
                    {member.user.image ? (
                      <img src={member.user.image} alt={member.user.name} className="w-full h-full object-cover" />
                    ) : (
                      member.user.name?.charAt(0) || 'U'
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-text-main truncate">{member.user.name}</p>
                    <p className="text-[10px] uppercase tracking-wider text-text-muted">
                      {member.role === 'admin' ? 'Administrator' : 'Członek'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        <div className="mt-8 mb-4 w-full max-w-xs mx-auto">
          {isMember ? (
            <button 
              onClick={toggleMembership}
              disabled={actionLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl text-sm font-semibold transition-colors border border-[rgba(239,68,68,0.2)] text-[#ef4444] bg-white hover:bg-red-50 shadow-sm"
            >
              <LogOut size={18} />
              Opuść wspólnotę
            </button>
          ) : (
            <button 
              onClick={toggleMembership}
              disabled={actionLoading}
              className="btn-gold w-full flex items-center justify-center gap-2 py-4 shadow-md text-sm"
            >
              <UserPlus size={18} />
              Dołącz do wspólnoty
            </button>
          )}
        </div>

      </div>
    </div>
  )
}
