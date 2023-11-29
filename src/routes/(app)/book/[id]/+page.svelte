<script>
  export let data;

  // Destructuration pour obtenir directement l'objet 'text'.
  const  book  = data.book;

  // Fonction pour obtenir un tableau des images définies.
  function getImages(book) {
  return [
    book.image1, book.image2, book.image3, book.image4,
    book.image5
  ].filter(image => image); // Cela exclura `null`, `undefined`, et les chaînes vides
}

  function handleMouseOver(imageSrc) {
    mainImage = imageSrc;
  }
  // Tableau des images valides

  const images = getImages(book);
  // Cette variable contiendra le chemin de la grande image affichée
  let mainImage = images.length > 0 ? images[0] : '';



</script>


<section class="py-5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-5 col-lg-7 order-md-1 pt-8">
        <img class="img-fluid rounded-3" src={mainImage} alt="Image principale" />
        <div class="row mt-3">
          <div class="col">
            <!-- Miniatures des images -->
            {#each images as image}
              <img
                class="img-thumbnail mx-1 small-image"
                src={image}
                alt="Image miniature"
                on:mouseover={handleMouseOver.bind(this, image)}
                style="height: 100px; cursor: pointer;" />
            {/each}
          </div>
        </div>
      </div>
      <div class="col-md-7 col-lg-5 text-center text-md-start pt-5 pt-md-9">
        <h1 class="mb-4 display-2 fw-bold">{book.title.fr}</h1>
        <p class="mt-3 mb-4">{book.description.fr}</p>
      </div>
    </div>
  </div>
</section>



