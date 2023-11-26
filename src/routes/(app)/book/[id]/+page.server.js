import { prisma } from "$lib/server/prisma"

import { error, fail } from "@sveltejs/kit"

export const load = async({params}) => {

    const getBook = async () => {
        const book = await prisma.book.findUnique({
            where : {
                id: params.id
            },
            include: {
                title: true, // Charger les données liées de "title"
                description: true,
/*                 texts: true
 */              },
        })
        if(!book) {
            throw error (404, "product not found")
        }
        return book
    }

    return {
        book : getBook(),
    }
}

