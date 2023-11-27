
import { prisma } from "$lib/server/prisma"
import { error, fail } from "@sveltejs/kit"



export const actions = {
  createText,
    deleteText,
};

export const load = async ({ setHeaders }) => {
  // Définir les en-têtes HTTP
  setHeaders({
      'Cache-Control': `max-age=0, s-maxage=${60 * 60}`,
  }); 
      return {
      texts : await prisma.text.findMany(
        {
          include: {
            title: true, // Charger les données liées de "title"
            description: true
            
          }}),
      
    };
  };



   const createText = async ({request}) => {
    const data = await request.formData();
    // Retrieve image and bookId fields
    const imageFields = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8'];
    const images = imageFields.reduce((acc, field) => {
      acc[field] = data.get(field);
      return acc;
    }, {});
    const bookId = data.get('bookId');
  
    // Retrieve language fields
    let fr = data.get('frt');
    let en = data.get('ent');
    let es = data.get('est');
    let ru = data.get('rut');
    let ja = data.get('jat');
  
    try {
      const titleText = await prisma.TitleText.create({
        data: { fr, en, es, ru, ja }
      });
  
      // Similar for description
      fr = data.get('frd');
      en = data.get('end');
      es = data.get('esd');
      ru = data.get('rud');
      ja = data.get('jad');
  
      const textText = await prisma.TextText.create({
        data: { fr, en, es, ru, ja }
      });
  
      let titleId = titleText.id;
      let descriptionId = textText.id;
  
      function isValidUUID(uuid) {
        const regexExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return regexExp.test(uuid);
      }
      const validBookId = bookId && isValidUUID(bookId) ? bookId : null;
  
        const text = await prisma.text.create({
          data: {
            titleId,
            descriptionId,
            ...images,
            bookId: validBookId,
          }
        });
      
  
  
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Failed to create text" });
    }
  
    return { status: 201 };
  };
  
  
  
   const deleteText = async ({url}) => {
    const id = url.searchParams.get("id");
  
    if (!id) {
      return fail(400, { message: "Invalid request" });
    }
  
    try {
      const text = await prisma.text.delete({
        where: { id }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Failed to delete text" });
    }
  
    return { status: 200 };
  };
  
  
  

  
  
  
  