import BottomNav from '@/components/BottomNav'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-dvh flex flex-col" style={{ paddingBottom: '72px' }}>
      <main className="flex-1">{children}</main>
      <BottomNav />
    </div>
  )
}
