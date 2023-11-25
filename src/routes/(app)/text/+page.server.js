
import { prisma } from "$lib/server/prisma"
import { error, fail } from "@sveltejs/kit"



export const load = async () => {
    return {
      texts : await prisma.text.findMany(
        {
          include: {
            title: true, // Charger les données liées de "title"
            description: true
          }}),
      
    };
  };
