
import { prisma } from "$lib/server/prisma"

export const load = async ({ setHeaders }) => {
  // Définir les en-têtes HTTP
  setHeaders({
      'Cache-Control': `max-age=0, s-maxage=${60 * 60}`,
  });

  // Récupérer les données avec Prisma
  const texts = await prisma.text.findMany({
      include: {
          title: true,
          description: true
      }
  });

  // Retourner les données
  return {
      texts: texts
  };
};