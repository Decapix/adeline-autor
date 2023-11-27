import { prisma } from "$lib/server/prisma"
import { error, fail } from "@sveltejs/kit"



export const load = async ({ setHeaders, params }) => {
        // Définir les en-têtes HTTP
        setHeaders({
            'Cache-Control': `max-age=0, s-maxage=60`,
        });

    const getBook = async () => {
        const book = await prisma.Book.findUnique({
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
        texts : await prisma.text.findMany(),
    }
}

export const actions = {
    updateBook,
};


const updateBook = async({request, params}) => {
    const data = await request.formData();
    const mainImage = data.get('mainImage');
    const image1 = data.get('image1');
    const image2 = data.get('image2');
    const image3 = data.get('image3');
    const image4 = data.get('image4');
    const type = data.get('type');
  
    let fr = data.get('frt');
    let en = data.get('ent');
    let es = data.get('est');
    let ru = data.get('rut');
    let ja = data.get('jat');
  
  
    try {
  
  
      const bookId = params.id
      const booke = await prisma.Book.findUnique({
        where : {
            id: bookId
        },
        include: {
            title: true, 
            description: true,
          },
      })
  
      const titleId = booke.title.id
      const descriptionId = booke.description.id
  
      const titleBook = await prisma.TitleBook.update({
        where: {
          id: titleId,
        },
        data: {
          fr,
          en,
          es,
          ru,
          ja
        }
      });
  
  
      fr = data.get('frd');
      en = data.get('end');
      es = data.get('esd');
      ru = data.get('rud');
      ja = data.get('jad');
  
  
  
      const TextBook = await prisma.TextBook.update({
        where: {
          id: descriptionId,
        },
        data: {
          fr,
          en,
          es,
          ru,
          ja
        }
      });
  
      const book = await prisma.book.update({
        where: {
          id: bookId,
        },
        data: {
          mainImage,
          image1,
          image2,
          image3,
          image4,
          type,
        }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Failed to update book" });
    }
    return {
      status: 200,
    }
  
  };