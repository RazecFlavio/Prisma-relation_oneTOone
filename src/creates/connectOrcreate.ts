import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Curso de react js',
      description: 'Curso para ficar rico',
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Flavio de Paula Cezar',
          },
          create: {
            name: 'Flavio de Paula Cezar',
          },
        },
      },
    },
  })
}

main()
