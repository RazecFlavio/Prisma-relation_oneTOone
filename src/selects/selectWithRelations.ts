import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const result = await prisma.courses.findMany({
    include: {
      teacher: true,
    },
  })
  console.log(result)
}
main()
