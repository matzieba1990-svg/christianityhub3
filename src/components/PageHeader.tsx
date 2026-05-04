'use client'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

interface Props {
  title: string
  subtitle?: string
  back?: boolean
  right?: React.ReactNode
}

export default function PageHeader({ title, subtitle, back, right }: Props) {
  const router = useRouter()
  return (
    <header className="flex items-center gap-3 px-4 py-4 sticky top-0 z-40"
      style={{ background: 'linear-gradient(180deg, rgba(15,7,32,1) 70%, transparent)', backdropFilter: 'blur(8px)' }}>
      {back && (
        <button onClick={() => router.back()} className="w-9 h-9 flex items-center justify-center rounded-full"
          style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--text-main)' }}>
          <ChevronLeft size={20} />
        </button>
      )}
      <div className="flex-1 min-w-0">
        <h1 className="font-bold text-xl truncate" style={{ color: 'var(--text-main)' }}>{title}</h1>
        {subtitle && <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-muted)' }}>{subtitle}</p>}
      </div>
      {right && <div>{right}</div>}
    </header>
  )
}
