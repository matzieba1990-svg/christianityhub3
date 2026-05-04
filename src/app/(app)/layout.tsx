import BottomNav from '@/components/BottomNav'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col" style={{ paddingBottom: '72px' }}>
      <main className="flex-1">{children}</main>
      <BottomNav />
    </div>
  )
}
