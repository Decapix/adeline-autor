
import { prisma } from "$lib/server/prisma"
import { error, fail } from "@sveltejs/kit"



export const load = async () => {
  // Définir les en-têtes HTTP

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



// book

const createBook = async({request}) => {
  const data = await request.formData();
  const image1 = data.get('image1');
  const image2 = data.get('image2');
  const image3 = data.get('image3');
  const image4 = data.get('image4');
  const image5 = data.get('image5');
  const type = data.get('type');


  let fr = data.get('frt');
  let en = data.get('ent');
  let es = data.get('est');
  let ru = data.get('rut');
  let ja = data.get('jat');

  try {

    const titleBook = await prisma.TitleBook.create({
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



    const textBook = await prisma.TextBook.create({
      data: {
        fr,
        en,
        es,
        ru,
        ja
      }
    });

    let titleId = titleBook.id;
    let descriptionId = textBook.id;

    const book = await prisma.book.create({
      data: {
        titleId,
        descriptionId,
        
        image1,
        image2,
        image3,
        image4,
        image5,
        type,
      }
    });
  } catch (err) {
    console.error(err);
    return fail(500, { message: "Failed to create book" });
  }

  return {
    status: 201,
  };
};


const deleteBook = async({url}) => {
  const id = url.searchParams.get("id");

  if (!id) {
    return fail(400, { message: "Invalid request" });
  }

  try {
    const product = await prisma.book.delete({
      where: {
        id
      }
    });
  } catch (err) {
    console.error(err);
    return fail(500, { message: "Failed to delete book" });
  }

  // titleProduct & textproduct delete automatically by OnDelete=True

  return {
    status: 200,
  };
};



export const actions = {
  createBook,
  deleteBook,
};


