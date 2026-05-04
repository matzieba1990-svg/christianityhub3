'use client'
import PageHeader from '@/components/PageHeader'
import { Users, Plus, ChevronRight, Lock, Globe } from 'lucide-react'
import Link from 'next/link'

const MOCK_COMMUNITIES = [
  { id: '1', name: 'Parafia Wniebowzięcia NMP Kraków', description: 'Wspólnota parafialna ul. Długa. Zapraszamy wszystkich!', members: 234, isPublic: true, emoji: '⛪' },
  { id: '2', name: 'Żywy Różaniec – Małopolska', description: 'Różańcowa wspólnota modlitewna dla wszystkich grup wiekowych.', members: 89, isPublic: true, emoji: '📿' },
  { id: '3', name: 'Wspólnota Odnowy w Duchu Świętym', description: 'Modlitwa charyzmatyczna, uwielbienie, lectio divina.', members: 47, isPublic: true, emoji: '🕊️' },
  { id: '4', name: 'Oaza Rodzin – Diecezja Krakowska', description: 'Ruch Światło-Życie dla rodzin.', members: 156, isPublic: false, emoji: '👨‍👩‍👧' },
]

export default function CommunityPage() {
  return (
    <div className="pb-6">
      <PageHeader
        title="Wspólnoty"
        subtitle="Grupy modlitewne i parafialne"
        right={
          <Link href="/community/new"
            className="w-9 h-9 flex items-center justify-center rounded-full"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)' }}>
            <Plus size={18} color="white" />
          </Link>
        }
      />

      <div className="px-4">
        {/* Search */}
        <input className="inp mb-4" placeholder="🔍 Szukaj wspólnoty..." />

        {/* Communities */}
        <div className="space-y-3">
          {MOCK_COMMUNITIES.map(c => (
            <Link key={c.id} href={`/community/${c.id}`}
              className="card prayer-card flex items-center gap-4 p-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
                {c.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-sm truncate" style={{ color: 'var(--text-main)' }}>{c.name}</p>
                  {!c.isPublic && <Lock size={12} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />}
                  {c.isPublic && <Globe size={12} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />}
                </div>
                <p className="text-xs line-clamp-2 mb-2" style={{ color: 'var(--text-muted)' }}>{c.description}</p>
                <div className="flex items-center gap-1">
                  <Users size={11} style={{ color: 'var(--gold)' }} />
                  <span className="text-xs font-semibold" style={{ color: 'var(--gold)' }}>{c.members} członków</span>
                </div>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </Link>
          ))}
        </div>

        {/* Create CTA */}
        <div className="card mt-5 p-5 text-center" style={{ borderColor: 'rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.05)' }}>
          <p className="text-2xl mb-2">⛪</p>
          <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-main)' }}>Nie ma Twojej wspólnoty?</p>
          <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Załóż grupę dla swojej parafii lub ruchu modlitewnego</p>
          <button className="btn-outline" style={{ fontSize: '14px', padding: '10px' }}>+ Utwórz wspólnotę</button>
        </div>
      </div>
    </div>
  )
}
