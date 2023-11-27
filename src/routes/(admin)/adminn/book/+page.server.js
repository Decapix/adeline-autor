
import { prisma } from "$lib/server/prisma"
import {
  createBook,
   deleteBook, 
} from '$lib/server/use';
import { error, fail } from "@sveltejs/kit"



export const actions = {
  createBook,
  deleteBook,
};


export const load = async ({ setHeaders }) => {
  // Définir les en-têtes HTTP
  setHeaders({
      'Cache-Control': `max-age=0, s-maxage=${60 * 60}`,
  }); 
    return {
    books : await prisma.book.findMany(
      {
      include: {
        title: true, // Charger les données liées de "title"
        description: true
      }}),
    texts : await prisma.text.findMany(),
    
  };
};