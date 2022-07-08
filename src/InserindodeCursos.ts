import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()

  await prisma.courses.create({
    data: {
      name: 'Curso Prisma ORM',
      duration: 80,
      description: 'Curso de orm para stack javascript',
      teacher: {
        create: {
          name: 'Flavio Cezar',
        },
      },
    },
  })
}

main()
