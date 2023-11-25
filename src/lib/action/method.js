

//count image for post

export const countImages = (sellerPost) => {
    let imageCount = 0;
    
    // Liste des champs images
    const imageFields = ['image1', 'image2', 'image3', 'image4', 'image5'];
    
    // Parcourir chaque champ pour vérifier si une image est présente
    for (const field of imageFields) {
      const image = sellerPost[field];
      
      // Vérifier si l'image est définie et n'est pas une chaîne vide ou constituée uniquement d'espaces
      if (image && image.trim() !== "") {
        imageCount++;
      }
    }
    
    return imageCount;
  };


  export const getImagesFromSellerPost = (sellerPost) => {
    // Initialise un tableau vide pour stocker les images
    const images = [];
  
    // Liste des champs d'images dans l'objet SellerPost
    const imageFields = ['image1', 'image2', 'image3', 'image4', 'image5'];
  
    // Parcourir chaque champ d'image et ajouter l'image au tableau si elle existe
    for (const field of imageFields) {
      if (sellerPost[field]) {
        images.push({
          src: sellerPost[field],
          alt: `Image from ${sellerPost.title}`,  // Supposant que `title` est une propriété de texte de l'objet SellerPost
          title: sellerPost.title  // Idem
        });
      }
    }
  
    return images;
  };
  