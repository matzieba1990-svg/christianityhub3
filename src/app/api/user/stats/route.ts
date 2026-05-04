import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const [prayersCount, requestsCount, communitiesCount] = await Promise.all([
    prisma.prayerProgress.count({ where: { userId: session.user.id } }),
    prisma.prayerRequest.count({ where: { userId: session.user.id } }),
    prisma.communityMember.count({ where: { userId: session.user.id } })
  ])

  return NextResponse.json({
    stats: {
      prayers: prayersCount,
      requests: requestsCount,
      communities: communitiesCount
    }
  })
}
