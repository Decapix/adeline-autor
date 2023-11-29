import { prisma } from "$lib/server/prisma"

import { error, fail } from "@sveltejs/kit"

export const load = async ({ params }) => {
    // Définir les en-têtes HTTP

    const getText = async () => {
        const text = await prisma.Text.findUnique({
            where : {
                id: params.id
            },
            include: {
                title: true, // Charger les données liées de "title"
                description: true,
/*                 texts: true
 */              },
        })
        if(!text) {
            throw error (404, "product not found")
        }
        return text
    }

    return {
        text : getText(),
    }
}

