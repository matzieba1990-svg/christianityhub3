import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await auth()
    const { id } = await params

    const community = await prisma.community.findUnique({
      where: { id },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          },
          orderBy: {
            joinedAt: 'asc'
          }
        },
        prayerRequests: {
          include: {
            user: {
              select: {
                name: true,
                image: true
              }
            },
            _count: {
              select: { acceptances: true }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    if (!community) {
      return NextResponse.json({ error: 'Community not found' }, { status: 404 })
    }

    // Check visibility
    const memberRecord = session?.user?.id ? community.members.find(m => m.userId === session.user.id) : null
    const isMember = !!memberRecord
    const isAdmin = memberRecord?.role === 'admin'

    if (!community.isPublic && !isMember) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    return NextResponse.json({ community, isMember, isAdmin })
  } catch (error) {
    console.error('Failed to fetch community:', error)
    return NextResponse.json({ error: 'Failed to fetch community' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    const membership = await prisma.communityMember.findUnique({
      where: {
        userId_communityId: {
          userId: session.user.id,
          communityId: id
        }
      }
    })

    if (!membership || membership.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden. Only admins can delete the community.' }, { status: 403 })
    }

    await prisma.community.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete community:', error)
    return NextResponse.json({ error: 'Failed to delete community' }, { status: 500 })
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const action = req.nextUrl.searchParams.get('action')

    if (action === 'join') {
      const community = await prisma.community.findUnique({ where: { id } })
      if (!community) return NextResponse.json({ error: 'Not found' }, { status: 404 })
      
      // If private, joining directly might not be allowed in the future, but for now we'll allow or we can restrict it.
      if (!community.isPublic) {
        return NextResponse.json({ error: 'Cannot join private community without invitation' }, { status: 403 })
      }

      await prisma.communityMember.create({
        data: {
          userId: session.user.id,
          communityId: id,
          role: 'member'
        }
      })
      return NextResponse.json({ success: true })
    }

    if (action === 'leave') {
      await prisma.communityMember.deleteMany({
        where: {
          userId: session.user.id,
          communityId: id
        }
      })
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Community action error:', error)
    return NextResponse.json({ error: 'Action failed' }, { status: 500 })
  }
}
