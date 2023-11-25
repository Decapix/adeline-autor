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
          <div class="col-12 col-sm-12 col-lg-3 mb-4 order-0 order-sm-0"><a class="text-decoration-none" href="#"><img class="img-fluid me-3" src="assets/img/icons/logo.png" alt="" /><span class="fw-bold fs-1 text-1000">DataWarehouse</span></a>
          <p class="mt-4">Warehouse Society, 234 <br />Bahagia Ave Street PRBW 29281</p>
          <p>info@warehouse.project<br />1-232-3434 (Main) </p>
          </div>
          <div class="col-6 col-sm-4 col-lg-3 mb-3 order-2 order-sm-1">
          <h6 class="lh-lg fw-bold mb-4">About</h6>
          <ul class="list-unstyled mb-md-4 mb-lg-0">
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="#!">Profile</a></li>
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="#!">Features</a></li>
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="#!">Careers</a></li>
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="#!">DW News</a></li>
          </ul>
          </div>
          <div class="col-6 col-sm-4 col-lg-3 mb-3 order-3 order-sm-2">
          <h6 class="lh-lg fw-bold mb-4"> Help </h6>
          <ul class="list-unstyled mb-md-4 mb-lg-0">
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="#!">Support</a></li>
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="#!">Sign Up </a></li>
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="#!">Guide</a></li>
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="#!">Reports</a></li>
            <li class="lh-lg"><a class="text-dark fs--1 text-decoration-none" href="#!">Q&amp;A</a></li>
          </ul>
          </div>
          <div class="col-12 col-sm-4 col-lg-3 mb-3 order-1 order-sm-3">
          <h6 class="lh-lg fw-bold mb-4">Me contacter</h6>
          <ul class="list-unstyled mb-md-4 mb-lg-0">
            <li class="list-inline-item"><a class="text-dark fs--1 text-decoration-none" href="#!"><img class="img-fluid" src="assets/img/icons/f.png" width="40" alt="" /></a></li>
            <li class="list-inline-item"><a class="text-dark fs--1 text-decoration-none" href="#!"><img class="img-fluid" src="assets/img/icons/t.png" width="40" alt="" /></a></li>
            <li class="list-inline-item"><a class="text-dark fs--1 text-decoration-none" href="#!"><img class="img-fluid" src="assets/img/icons/i.png" width="40" alt="" /></a></li>
            <p class="pt-2">adeline.pesic@orange.com</p>
            <p>ok ok ok ok ok </p>
          </ul>
          </div>
        </div>
        </div>
        <!-- end of .container-->
    
      </section>
      <!-- <section> close ============================-->
      <!-- ============================================-->
    
    
    

    
    