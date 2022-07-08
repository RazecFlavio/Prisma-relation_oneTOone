import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: '91a551f5-ba61-4df1-9a36-6265f1c52e25',
    },
    data: {
      duration: 150,
    },
  })
  console.log(result)
}

main()
