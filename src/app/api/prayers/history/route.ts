import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const progress = await prisma.prayerProgress.findMany({
    where: { userId: session.user.id },
    select: {
      prayerId: true,
      dayNumber: true,
      createdAt: true
    }
  })

  // Format the dates as YYYY-MM-DD
  const history = progress.map(p => ({
    prayerId: p.prayerId,
    dayNumber: p.dayNumber,
    date: p.createdAt.toISOString().split('T')[0]
  }))

  return NextResponse.json({ history })
}
