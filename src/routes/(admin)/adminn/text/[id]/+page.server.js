import { prisma } from "$lib/server/prisma"
import { error, fail } from "@sveltejs/kit"

export const load = async ({ setHeaders, params }) => {
        // Définir les en-têtes HTTP
        setHeaders({
            'Cache-Control': `max-age=0, s-maxage=60`,
        }); 

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

export const actions = {
    updateText,
};




 const updateText = async ({request, params}) => {
    const data = await request.formData();
    // Retrieve image fields
    const imageFields = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8'];
    const images = imageFields.reduce((acc, field) => {
      acc[field] = data.get(field);
      return acc;
    }, {});
  
    // Retrieve language fields for title
    let es = data.get('est');
    let en = data.get('ent');
    let fr = data.get('frt');
    let ru = data.get('rut');
    let ja = data.get('jat');
  
    try {
      const textId = params.id;
      const texte = await prisma.Text.findUnique({
        where: { id: textId },
        include: { title: true, description: true },
      });
  
      const titleId = texte.title.id;
      const descriptionId = texte.description.id;
  
      // Update TitleText
      const updatedTitleText = await prisma.TitleText.update({
        where: { id: titleId },
        data: { fr, en, es, ru, ja }
      });
  
      // Retrieve language fields for description
      fr = data.get('frd');
      en = data.get('end');
      es = data.get('esd');
      ru = data.get('rud');
      ja = data.get('jad');
  
      // Update TextText
      const updatedTextText = await prisma.TextText.update({
        where: { id: descriptionId },
        data: { fr, en, es, ru, ja }
      });
  
      // Update the Text record with new data
      const updatedText = await prisma.Text.update({
        where: { id: textId },
        data: {
          ...images,
          titleId,
          descriptionId,
        }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Failed to update text" });
    }
  
    return { status: 200 };
  };