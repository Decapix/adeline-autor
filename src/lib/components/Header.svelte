<!-- src/components/Header.svelte -->
<script>
	import TranslationManager from '$lib/lang/translationManager.js';
	import { onMount } from 'svelte';
  import { page } from '$app/stores'; // si vous utilisez SvelteKit ou un store personnalisé pour le routage

  let activeRoute;

  $: activeRoute = $page.url.pathname; // Réagit aux changements d'itinéraire

  // Action pour fermer la navbar sur mobile après le clic
  function closeNavbarOnMobile(node) {
    node.addEventListener('click', () => {
      if (window.innerWidth < 992) { // Utilisez votre breakpoint mobile
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (!navbarToggler.classList.contains('collapsed')) {
          navbarToggler.click();
        }
      }
    });

    return {
      destroy() {
        // Nettoyer l'écouteur d'événements si le noeud est détruit
        node.removeEventListener('click', closeNavbarOnMobile);
      }
    };
  }
  
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


<style>
  /* Style pour l'effet de survol */
  .nav-link:hover {
    color: grey; /* Votre couleur pour l'effet de survol */
  }
  /* Style pour l'élément actif */
  .nav-link.active {
    color: purple; /* Votre couleur pour l'élément actif */
  }
</style>


<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
  <div class="container"><a class="navbar-brand" href="#"><img loading="lazy" class="img-fluid pt-2" src="assets/img/icons/logo.png" alt="" style="max-width: 70%;" /></a>
  <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto ms-lg-4 ms-xl-7  pt-2 pt-lg-0">
    <li class="nav-item">
      <a
      use:closeNavbarOnMobile
      class="nav-link fw-bold {activeRoute === '/' ? 'active' : ''}"
      href="/">Accueil</a>
    </li>
    <li class="nav-item">
      <a
    use:closeNavbarOnMobile
    class="nav-link fw-bold {activeRoute === '/biography/' ? 'active' : ''}"
    href="/biography/">Biographie</a>

    </li>
    <li class="nav-item">
      <a
      use:closeNavbarOnMobile
      class="nav-link fw-bold {activeRoute === '/text/' ? 'active' : ''}"
      href="/text/">Mes textes</a>
    </li>
    <li class="nav-item">
      <a
      use:closeNavbarOnMobile
      class="nav-link fw-bold {activeRoute === '/book/' ? 'active' : ''}"
      href="/book/">Mes livres</a>
    </li>
    </ul>
  </div>
  </div>
</nav>

