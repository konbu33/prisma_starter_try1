import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
	const post = await prisma.post.create({
		data: {
			title: 'Prsma makes database easy',
			author: {
				connect: { email: 'sarah@prisma.io' }
			},
		},
	})
	console.log(post)
	const allUsers = await prisma.user.findMany({
		include: { posts: true },
	})
	console.dir(allUsers, { depth: null })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

