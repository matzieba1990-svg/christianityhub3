import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json()

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Wszystkie pola są wymagane' }, { status: 400 })
  }
  if (password.length < 8) {
    return NextResponse.json({ error: 'Hasło musi mieć min. 8 znaków' }, { status: 400 })
  }

  const exists = await prisma.user.findUnique({ where: { email } })
  if (exists) {
    return NextResponse.json({ error: 'Ten email jest już zajęty' }, { status: 409 })
  }

  const hashed = await bcrypt.hash(password, 12)
  const user = await prisma.user.create({
    data: { name, email, password: hashed }
  })

  return NextResponse.json({ ok: true, userId: user.id }, { status: 201 })
}
