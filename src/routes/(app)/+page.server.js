
import { prisma } from "$lib/server/prisma"

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
