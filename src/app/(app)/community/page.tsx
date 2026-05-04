'use client'
import PageHeader from '@/components/PageHeader'
import { Users, Plus, ChevronRight, Lock, Globe } from 'lucide-react'
import Link from 'next/link'

const MOCK_COMMUNITIES: any[] = []

export default function CommunityPage() {
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
        <input className="inp mb-4" placeholder="Szukaj wspólnoty..." />

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
        <div className="card mt-5 p-5 text-center" style={{ borderColor: 'var(--gold)', background: 'white' }}>
          <div className="w-10 h-10 rounded-full bg-[#FAF6F0] flex items-center justify-center mx-auto mb-3" style={{ color: 'var(--gold)' }}>
            <Users size={20} />
          </div>
          <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-main)' }}>Nie ma Twojej wspólnoty?</p>
          <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Załóż grupę dla swojej parafii lub ruchu modlitewnego</p>
          <button className="btn-outline" style={{ fontSize: '14px', padding: '10px' }}>+ Utwórz wspólnotę</button>
        </div>
      </div>
    </div>
  )
}
