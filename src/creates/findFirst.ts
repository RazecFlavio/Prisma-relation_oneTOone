import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.findFirst({
    // take: -1,  - busca o ultimo arquivo inserido ->
    // skip: 3 ---- junto com o take - ajuda a montar uma paginacao
  })
  console.log(result)
}

main()
