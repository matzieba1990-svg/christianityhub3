import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const prayerId = searchParams.get('prayerId')
  if (!prayerId) return NextResponse.json({ error: 'Missing prayerId' }, { status: 400 })

  const progress = await prisma.prayerProgress.findMany({
    where: {
      userId: session.user.id,
      prayerId: prayerId
    },
    select: { dayNumber: true }
  })

  return NextResponse.json({ completedDays: progress.map(p => p.dayNumber) })
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { prayerId, dayNumber, completed } = await req.json()

  if (completed) {
    await prisma.prayerProgress.upsert({
      where: {
        userId_prayerId_dayNumber: {
          userId: session.user.id,
          prayerId,
          dayNumber
        }
      },
      update: {},
      create: {
        userId: session.user.id,
        prayerId,
        dayNumber
      }
    })
  } else {
    await prisma.prayerProgress.deleteMany({
      where: {
        userId: session.user.id,
        prayerId,
        dayNumber
      }
    })
  }

  return NextResponse.json({ ok: true })
}
