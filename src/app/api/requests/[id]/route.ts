import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    const request = await prisma.prayerRequest.findUnique({
      where: { id }
    })

    if (!request) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    // Only the author can delete their own request, unless we want to allow community admins to delete them.
    // For now, let's allow the author or an admin of the community where it's posted.
    let isAuthorized = request.userId === session.user.id

    if (!isAuthorized && request.communityId) {
      const membership = await prisma.communityMember.findUnique({
        where: {
          userId_communityId: {
            userId: session.user.id,
            communityId: request.communityId
          }
        }
      })
      if (membership && membership.role === 'admin') {
        isAuthorized = true
      }
    }

    if (!isAuthorized) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    await prisma.prayerRequest.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete request:', error)
    return NextResponse.json({ error: 'Failed to delete request' }, { status: 500 })
  }
}
