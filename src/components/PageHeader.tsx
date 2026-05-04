'use client'
import { ChevronLeft, LogOut } from 'lucide-react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

interface Props {
  title: string
  subtitle?: string
  back?: boolean
  backHref?: string
  right?: React.ReactNode
}

export default function PageHeader({ title, subtitle, back, backHref, right }: Props) {
  const { data: session } = useSession()

  return (
    <header className="flex items-center gap-3 px-4 py-4 sticky top-0 z-40"
      style={{ background: 'rgba(250,246,240,0.98)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border)' }}>
      {back && (
        <Link href={backHref || '..'} className="w-9 h-9 flex items-center justify-center rounded-full"
          style={{ background: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid var(--border)' }}>
          <ChevronLeft size={20} />
        </Link>
      )}
      <div className="flex-1 min-w-0">
        <h1 className="font-bold text-xl truncate font-mystic" style={{ color: 'var(--gold-dark)' }}>{title}</h1>
        {subtitle && <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-muted)' }}>{subtitle}</p>}
      </div>
      
      <div className="flex items-center gap-2">
        {right && <div>{right}</div>}
        
        {session && (
          <button onClick={() => signOut({ callbackUrl: '/login' })} className="w-9 h-9 flex items-center justify-center rounded-full"
            style={{ background: '#FFF', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}
            title="Wyloguj się">
            <LogOut size={16} />
          </button>
        )}
      </div>
    </header>
  )
}
