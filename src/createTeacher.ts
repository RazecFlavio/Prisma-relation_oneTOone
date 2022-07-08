import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  await prisma.teachers.create({
    data: {
      name: 'Professor de ReactJS',
      course: {
        create: {
          name: 'Curso de react',
          duration: 250,
          description: 'curso de react, TOP',
        },
      },
    },
  })
}
main()
