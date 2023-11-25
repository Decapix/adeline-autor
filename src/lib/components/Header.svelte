<!-- src/components/Header.svelte -->
<script>
	import TranslationManager from '$lib/lang/translationManager.js';
	import { onMount } from 'svelte';
  
const translationManager = TranslationManager.getInstance();
	let translations = {};
	
	// S'abonner aux mises à jour des traductions
	translationManager.translations.subscribe(value => {
	  translations = value;
	});


let leng;

  onMount(() => {
    if (typeof window !== 'undefined') {
      leng = sessionStorage.getItem('lang');
    }
  });

</script>



<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
  <div class="container"><a class="navbar-brand" href="#"><img class="img-fluid" src="assets/img/icons/logo.png" alt="" /></a>
  <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto ms-lg-4 ms-xl-7  pt-2 pt-lg-0">
    <li class="nav-item"><a class="nav-link fw-bold active" aria-current="page" href="/">Accueil</a></li>
    <li class="nav-item"><a class="nav-link fw-medium" href="/biography/">Biographie</a></li>
    <li class="nav-item"><a class="nav-link fw-medium" href="/text/">Mes Textes</a></li>
    <li class="nav-item"><a class="nav-link fw-medium" href="/book/">Mes livres</a></li>
    </ul>
  </div>
  </div>
</nav>


