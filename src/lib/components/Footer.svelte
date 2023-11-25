<!-- src/components/footer.svelte -->
<script>
	import { setLanguage } from '$lib/lang/languageManager.js';
	import TranslationManager from '$lib/lang/translationManager.js';
    import { onMount } from 'svelte';




let leng;

  onMount(() => {
    if (typeof window !== 'undefined') {
      leng = sessionStorage.getItem('lang');
    }
  });


  const currentYear = new Date().getFullYear();


  const translationManager = TranslationManager.getInstance();
	let translations = {};
	
	// S'abonner aux mises à jour des traductions
	translationManager.translations.subscribe(value => {
	  translations = value;
	});
	
	function changeLanguage(lang) {
	  setLanguage(lang);
	}

</script>




			<!-- ============================================-->
		<!-- <section> begin ============================-->
      <section class="py-6 pb-0">
  
        <div class="container">
        <hr class="text-info opacity-25" />
        <div class="row py-7 justify-content-sm-between text-center text-md-start">
          <div class="col-md-6">
          
        </div>
        <div class="row justify-content-lg-around">
          <div class="col-12 col-sm-12 col-lg-3 mb-4 order-0 order-sm-0"><a class="text-decoration-none" href="#"><img class="img-fluid me-3 pb-3" src="assets/img/icons/logo.png" alt="" style="max-width: 70%;" /></a>
          <p class="mt-4">8 chemin des maraîchers <br />73100  Tresserve <br />France</p>
          </div>
          <div class="col-6 col-sm-4 col-lg-3 mb-3 order-2 order-sm-1">
          <ul class="list-unstyled mb-md-4 mb-lg-0">
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="/">Accueil</a></li>
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="/biography">Biographie</a></li>

          </ul>
          </div>
          <div class="col-6 col-sm-4 col-lg-3 mb-3 order-3 order-sm-2">
          <ul class="list-unstyled mb-md-4 mb-lg-0">
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="/text">Textes</a></li>
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="/book">Livres</a></li>
          </ul>
          </div>
          <div class="col-12 col-sm-4 col-lg-3 mb-3 order-1 order-sm-3">
          <h6 class="lh-lg fw-bold mb-2">Me contacter</h6>
          <ul class="list-unstyled mb-md-4 mb-lg-0">
            <!-- <li class="list-inline-item"><a class="text-dark fs--1 text-decoration-none" href="#!"><img class="img-fluid" src="assets/img/icons/f.png" width="40" alt="" /></a></li>
            <li class="list-inline-item"><a class="text-dark fs--1 text-decoration-none" href="#!"><img class="img-fluid" src="assets/img/icons/t.png" width="40" alt="" /></a></li>
            <li class="list-inline-item"><a class="text-dark fs--1 text-decoration-none" href="#!"><img class="img-fluid" src="assets/img/icons/i.png" width="40" alt="" /></a></li> -->
            <li class="list-inline-item"><a class="text-dark fs--1 text-decoration-none" href="https://www.linkedin.com/today/author/adeline-pesic-aabb75165"><img class="img-fluid" src="assets/img/icons/i.webp" width="40" alt="" style="max-width: 70%;" /></a></li>
            <p class="pt-2">adeline.pesic@orange.com</p>
            <p>+33 (0)6 08 10 64 20</p>
          </ul>
          </div>
        </div>
        </div>
        <!-- end of .container-->
    
      </section>
      <!-- <section> close ============================-->
      <!-- ============================================-->
    
    
    

    
    