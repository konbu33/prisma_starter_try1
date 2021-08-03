import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

	//const allUsers: ( User & {
	//	posts: Post[]
	//})[]

	//export type Post = {
	//	id: number
	//	title: string
	//	content: stirng | null
	//	published: boolean
	//	authorId: number | null
	//}

	const allUsers = await prisma.user.findMany({
		include: { posts: true },
	})
	console.dir(allUsers, { depth: null } )
	// console.log('allUsers: ', allUsers)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
