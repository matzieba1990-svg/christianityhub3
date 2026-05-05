import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { name, description, isPublic } = await req.json()

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    // Create community and add the creator as an admin member in one transaction
    const community = await prisma.$transaction(async (tx) => {
      const newCommunity = await tx.community.create({
        data: {
          name,
          description,
          isPublic: isPublic ?? true,
        }
      })

      await tx.communityMember.create({
        data: {
          userId: session.user.id,
          communityId: newCommunity.id,
          role: 'admin' // Creator is admin
        }
      })

      return newCommunity
    })

    return NextResponse.json({ success: true, community })
  } catch (error) {
    console.error('Failed to create community:', error)
    return NextResponse.json({ error: 'Failed to create community' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await auth()
    // Fetch all public communities and communities the user is a member of
    const whereClause = session?.user?.id 
      ? { OR: [{ isPublic: true }, { members: { some: { userId: session.user.id } } }] }
      : { isPublic: true }

    const communities = await prisma.community.findMany({
      where: whereClause,
      include: {
        _count: {
          select: { members: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    const formatted = communities.map(c => ({
      id: c.id,
      name: c.name,
      description: c.description,
      isPublic: c.isPublic,
      membersCount: c._count.members,
      createdAt: c.createdAt
    }))

    return NextResponse.json({ communities: formatted })
  } catch (error) {
    console.error('Failed to fetch communities:', error)
    return NextResponse.json({ error: 'Failed to fetch communities' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await auth()
    const isAdmin = (session?.user as any)?.role === 'admin'
    if (!isAdmin) {
      return NextResponse.json({ error: 'Brak uprawnień administratora' }, { status: 403 })
    }

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'ID wspólnoty jest wymagane' }, { status: 400 })
    }

    await prisma.community.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete community:', error)
    return NextResponse.json({ error: 'Nie udało się usunąć wspólnoty' }, { status: 500 })
  }
}
