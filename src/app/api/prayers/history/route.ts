import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const [progress, acceptances] = await Promise.all([
    prisma.prayerProgress.findMany({
      where: { userId: session.user.id },
      select: { prayerId: true, dayNumber: true, createdAt: true }
    }),
    prisma.prayerAcceptance.findMany({
      where: { userId: session.user.id },
      include: { request: true }
    })
  ])

  const history = [
    ...progress.map(p => ({
      prayerId: p.prayerId,
      dayNumber: p.dayNumber,
      date: p.createdAt.toISOString().split('T')[0],
      type: 'progress' as const
    })),
    ...acceptances.map(a => ({
      prayerId: a.request.suggestedPrayerId || 'common-prayer',
      dayNumber: 1,
      date: a.createdAt.toISOString().split('T')[0],
      type: 'intention' as const,
      title: a.request.title
    }))
  ]

  return NextResponse.json({ history })
}
