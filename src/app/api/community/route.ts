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
