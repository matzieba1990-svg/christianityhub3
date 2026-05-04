import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const progress = await prisma.prayerProgress.findMany({
    where: { userId: session.user.id },
    orderBy: { dayNumber: 'asc' },
    select: {
      prayerId: true,
      dayNumber: true,
    }
  })

  // Group by prayerId and get the max day
  const activePrayers: Record<string, number[]> = {}
  progress.forEach(p => {
    if (!activePrayers[p.prayerId]) activePrayers[p.prayerId] = []
    activePrayers[p.prayerId].push(p.dayNumber)
  })

  const result = Object.entries(activePrayers).map(([id, days]) => ({
    prayerId: id,
    completedDays: days,
    lastDay: Math.max(...days)
  }))

  return NextResponse.json({ activePrayers: result })
}
