import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Curso de node js',
      description: 'Curso perfeito',
    },
  })
}

main()
