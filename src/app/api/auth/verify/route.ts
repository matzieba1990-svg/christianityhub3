import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json({ error: 'Brak tokenu' }, { status: 400 })
    }

    const verification = await prisma.verificationToken.findUnique({
      where: { token }
    })

    if (!verification) {
      return NextResponse.json({ error: 'Nieprawidłowy lub nieaktualny link weryfikacyjny' }, { status: 400 })
    }

    if (verification.expires < new Date()) {
      return NextResponse.json({ error: 'Link weryfikacyjny wygasł' }, { status: 400 })
    }

    // Aktywuj konto użytkownika
    const user = await prisma.user.findUnique({ where: { email: verification.email } })
    if (!user) {
      return NextResponse.json({ error: 'Użytkownik nie istnieje' }, { status: 404 })
    }

    await prisma.user.update({
      where: { email: verification.email },
      data: { emailVerified: new Date() }
    })

    // Usuń token po użyciu
    await prisma.verificationToken.delete({ where: { id: verification.id } })

    // Redirect to a success page
    const origin = req.headers.get('origin') || process.env.NEXTAUTH_URL || new URL(req.url).origin
    return NextResponse.redirect(`${origin}/login?verified=1`)

  } catch (error) {
    console.error('Verify error:', error)
    return NextResponse.json({ error: 'Wystąpił błąd weryfikacji' }, { status: 500 })
  }
}
