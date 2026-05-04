'use client'
import PageHeader from '@/components/PageHeader'
import { HandHeart, Users, Heart, Plus } from 'lucide-react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

// Mock data — w produkcji zastąpić API
const MOCK_REQUESTS: any[] = []

const CAT_COLORS: Record<string, string> = {
  zdrowie: '#ef4444',
  nawrocenie: '#7c3aed',
  dziekczynienie: '#c9a227',
  rodzina: '#0ea5e9',
  praca: '#059669',
  inne: '#6b7280',
}

const CAT_LABELS: Record<string, string> = {
  zdrowie: '🏥 Zdrowie',
  nawrocenie: '🕊️ Nawrócenie',
  dziekczynienie: '🙏 Dziękczynienie',
  rodzina: '👨‍👩‍👧 Rodzina',
  praca: '💼 Praca',
  inne: '✝️ Inne',
}

export default function RequestsPage() {
  const { data: session } = useSession()

  return (
    <div className="pb-6">
      <PageHeader
        title="Prośby o modlitwę"
        subtitle={`${MOCK_REQUESTS.reduce((s, r) => s + r.acceptances, 0)} modlitw złożonych`}
        right={
          session ? (
            <Link href="/requests/new"
              className="w-9 h-9 flex items-center justify-center rounded-full"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)' }}>
              <Plus size={18} color="white" />
            </Link>
          ) : null
        }
      />

      <div className="px-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { icon: HandHeart, value: MOCK_REQUESTS.length, label: 'Prośby', color: '#c9a227' },
            { icon: Heart, value: MOCK_REQUESTS.reduce((s, r) => s + r.acceptances, 0), label: 'Modlitw', color: '#ef4444' },
            { icon: Users, value: '24', label: 'Modlących', color: '#7c3aed' },
          ].map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="card p-3 text-center">
              <Icon size={18} style={{ color, margin: '0 auto 4px' }} />
              <p className="font-black text-xl" style={{ color }}>{value}</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Prayer requests */}
        <div className="space-y-3">
          {MOCK_REQUESTS.map(req => (
            <div key={req.id} className="card p-4 prayer-card">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${CAT_COLORS[req.category]}15`, border: `1px solid ${CAT_COLORS[req.category]}33` }}>
                  {req.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="pill text-xs"
                      style={{ background: `${CAT_COLORS[req.category]}15`, color: CAT_COLORS[req.category], border: `1px solid ${CAT_COLORS[req.category]}30` }}>
                      {CAT_LABELS[req.category]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-main)' }}>{req.title}</h3>
                  <p className="text-xs line-clamp-2 mb-2" style={{ color: 'var(--text-muted)' }}>{req.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {req.isAnonymous ? '🙏 Anonimowo' : `✝ ${req.author}`}
                    </span>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95"
                      style={{ background: 'rgba(201,162,39,0.12)', color: 'var(--gold)', border: '1px solid rgba(201,162,39,0.25)' }}>
                      🙏 {req.acceptances} modlitw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!session && (
          <div className="card mt-6 p-5 text-center" style={{ borderColor: 'rgba(201,162,39,0.3)' }}>
            <p className="text-lg mb-2">🙏</p>
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
