const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const email = 'matzieba1990@gmail.com'
  try {
    const user = await prisma.user.update({
      where: { email },
      data: { emailVerified: new Date() }
    })
    console.log(`Success: User ${email} has been verified.`)
  } catch (error) {
    console.error(`Error: Could not find user with email ${email}.`)
  } finally {
    await prisma.$disconnect()
  }
}

main()
