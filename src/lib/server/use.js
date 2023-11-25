// actions/user.js
import { error, fail } from "@sveltejs/kit"

// book

export const createBook = async({request}) => {
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
    return fail(500, { message: "Failed to create book" });
  }

  return {
    status: 201,
  };
};


export const deleteBook = async({url}) => {
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


export const updateBook = async({request, params}) => {
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






// Text



export const createText = async ({request}) => {
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



export const deleteText = async ({url}) => {
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



export const updateText = async ({request, params}) => {
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



