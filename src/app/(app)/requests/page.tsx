import PageHeader from '@/components/PageHeader'
import { HandHeart, Users, Heart, Plus } from 'lucide-react'
import Link from 'next/link'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { PRAYERS } from '@/lib/prayers'

async function deleteRequest(formData: FormData) {
  'use server'
  const session = await auth()
  const isAdmin = (session?.user as any)?.role === 'admin'
  if (!session?.user?.id) return

  const reqId = formData.get('reqId') as string
  if (!reqId) return

  const request = await prisma.prayerRequest.findUnique({ where: { id: reqId } })
  if (!request) return
  
  if (request.userId !== session.user.id && !isAdmin) return

  await prisma.prayerRequest.delete({ where: { id: reqId } })
  revalidatePath('/requests')
}

async function acceptRequest(formData: FormData) {
  'use server'
  const session = await auth()
  if (!session?.user?.id) return

  const requestId = formData.get('requestId') as string
  if (!requestId) return

  try {
    await prisma.prayerAcceptance.create({
      data: {
        userId: session.user.id,
        requestId
      }
    })
    revalidatePath('/requests')
    revalidatePath('/calendar')
  } catch (e) {
    // Already accepted or other error
  }
}

const CAT_COLORS: Record<string, string> = {
  zdrowie: '#ef4444',
  nawrocenie: '#7c3aed',
  dziekczynienie: '#c9a227',
  rodzina: '#0ea5e9',
  praca: '#059669',
  inne: '#6b7280',
}

const CAT_LABELS: Record<string, string> = {
  zdrowie: 'Zdrowie',
  nawrocenie: 'Nawrócenie',
  dziekczynienie: 'Dziękczynienie',
  rodzina: 'Rodzina',
  praca: 'Praca',
  inne: 'Inne',
}

const CAT_EMOJIS: Record<string, string> = {
  zdrowie: '',
  nawrocenie: '',
  dziekczynienie: '',
  rodzina: '',
  praca: '',
  inne: '',
}

export const revalidate = 0 // Disable cache to always see new requests

export default async function RequestsPage() {
  const session = await auth()

  const requests = await prisma.prayerRequest.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      user: { select: { name: true } },
      _count: { select: { acceptances: true } },
      acceptances: session?.user?.id ? { where: { userId: session.user.id } } : false
    }
  })

  const totalAcceptances = requests.reduce((sum, req) => sum + req._count.acceptances, 0)

  const isAdmin = (session?.user as any)?.role === 'admin'

  return (
    <div className="pb-6">
      <PageHeader
        title="Prośby o modlitwę"
        subtitle={`${totalAcceptances} modlitw podjętych`}
        right={
          session ? (
            <Link href="/requests/new"
              className="w-9 h-9 flex items-center justify-center rounded-full"
              style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))' }}>
              <Plus size={18} color="white" />
            </Link>
          ) : null
        }
      />

      <div className="px-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { icon: HandHeart, value: requests.length, label: 'Prośby', color: '#c9a227' },
            { icon: Heart, value: totalAcceptances, label: 'Modlitw', color: '#ef4444' },
            { icon: Users, value: '∞', label: 'Modlących', color: '#7c3aed' },
          ].map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="card p-3 text-center">
              <Icon size={18} style={{ color, margin: '0 auto 4px' }} />
              <p className="font-black text-xl" style={{ color }}>{value}</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Prayer requests */}
        {requests.length === 0 ? (
          <div className="card p-8 text-center mt-4">
            <p className="font-semibold mb-1" style={{ color: 'var(--text-main)' }}>Brak aktywnych próśb</p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Bądź pierwszą osobą, która poprosi wspólnotę o modlitwę.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {requests.map(req => {
              const reqId = req.id
              const isOwner = req.userId === session?.user?.id
              return (
              <div key={reqId} className="card p-4 prayer-card">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${CAT_COLORS[req.category] || CAT_COLORS.inne}15`, border: `1px solid ${CAT_COLORS[req.category] || CAT_COLORS.inne}33` }}>
                    {CAT_EMOJIS[req.category] || CAT_EMOJIS.inne}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="pill text-xs"
                        style={{ background: `${CAT_COLORS[req.category] || CAT_COLORS.inne}15`, color: CAT_COLORS[req.category] || CAT_COLORS.inne, border: `1px solid ${CAT_COLORS[req.category] || CAT_COLORS.inne}30` }}>
                        {CAT_LABELS[req.category] || CAT_LABELS.inne}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-main)' }}>{req.title}</h3>
                    <p className="text-xs line-clamp-2 mb-2" style={{ color: 'var(--text-muted)' }}>{req.content}</p>
                    
                    {req.suggestedPrayerId && (
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-[10px] font-bold text-gold uppercase bg-gold/5 px-2 py-0.5 rounded border border-gold/10">
                          Sugerowana modlitwa: {PRAYERS.find(p => p.id === req.suggestedPrayerId)?.name || req.suggestedPrayerId}
                        </span>
                      </div>
                    )}

                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          {req.isAnonymous ? 'Anonimowo' : `${req.user.name || 'Pielgrzym'}`}
                        </span>
                        
                        {session && (
                          <form action={acceptRequest}>
                            <input type="hidden" name="requestId" value={reqId} />
                            <button 
                              type="submit"
                              disabled={req.acceptances?.length > 0}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${req.acceptances?.length > 0 ? 'opacity-50 grayscale' : 'active:scale-95'}`}
                              style={{ 
                                background: req.acceptances?.length > 0 ? 'var(--border)' : 'rgba(201,162,39,0.12)', 
                                color: req.acceptances?.length > 0 ? 'var(--text-muted)' : 'var(--gold-dark)', 
                                border: `1px solid ${req.acceptances?.length > 0 ? 'var(--border)' : 'rgba(201,162,39,0.25)'}` 
                              }}
                            >
                              <Heart size={12} fill={req.acceptances?.length > 0 ? 'currentColor' : 'none'} />
                              {req.acceptances?.length > 0 ? 'Podjęto modlitwę' : 'Pomodlę się'} ({req._count.acceptances})
                            </button>
                          </form>
                        )}
                        {!session && (
                          <div className="text-xs font-bold" style={{ color: 'var(--gold-dark)' }}>
                             {req._count.acceptances} modlitw
                          </div>
                        )}
                      </div>
                  </div>
                  {(isOwner || isAdmin) && (
                    <form action={deleteRequest} className="flex justify-end border-t border-border pt-2 mt-2">
                      <input type="hidden" name="reqId" value={reqId} />
                      <button 
                        type="submit"
                        className="text-[10px] text-red-500 hover:text-red-700 uppercase font-bold tracking-wider"
                      >
                        {isAdmin && !isOwner ? 'Usuń (Admin)' : 'Usuń intencję'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
              )
            })}
          </div>
        )}

        {!session && (
          <div className="card mt-6 p-5 text-center" style={{ borderColor: 'rgba(201,162,39,0.3)' }}>
            <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-main)' }}>Dołącz do wspólnoty modlitwy</p>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Zaloguj się, aby złożyć prośbę lub podjąć modlitwę za innych</p>
            <Link href="/login" className="btn-gold text-center block" style={{ borderRadius: '12px', padding: '10px', fontSize: '14px' }}>
              Zaloguj się
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
