import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { auth } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: 'Nie jesteś zalogowany' }, { status: 401 })
    }

    const { title, content, category, isAnonymous, communityId } = await req.json()

    if (!title || !content) {
      return NextResponse.json({ error: 'Tytuł i treść są wymagane' }, { status: 400 })
    }

    const request = await prisma.prayerRequest.create({
      data: {
        title,
        content,
        category: category || 'inne',
        isAnonymous: Boolean(isAnonymous),
        userId: session.user.id,
        ...(communityId ? { communityId } : {})
      }
    })

    return NextResponse.json({ ok: true, request }, { status: 201 })
  } catch (error) {
    console.error('Request creation error:', error)
    return NextResponse.json({ error: 'Wystąpił błąd po stronie serwera' }, { status: 500 })
  }
}
