<script>
import BigCard from '$lib/components/BigCard.svelte';
	export let data;
</script>

    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->

  
  
		<!-- ============================================-->
		<!-- <section> begin ============================-->
		<section class="py-5">
  
		  <div class="container">
			<div class="row align-items-center">
			  <div class="col-md-5 col-lg-7 order-md-1 pt-8"><img loading="lazy" class="img-fluid centertel rounded-2" src="assets/img/illustrations/fau.jpg" alt="" /></div>
			  <div class="col-md-7 col-lg-5 text-center text-md-start pt-5 pt-md-9">
				<h1 class="mb-4 display-2 fw-bold">Autrice jeunesse</h1>
				<p class="mt-3 mb-4">Ce sont avant tout la joie et la bonne humeur qu'Adeline Pesic transmet
					dans ses textes pour enfants. De l'album au conte en passant par le
					documentaire, la variété de ses créations permet aux enfants une
					diversité d'expérience littéraire.
					</p>
			  </div>
			</div>
		  </div>
		  <!-- end of .container-->
  
		</section>

  
		<section class="py-6">
		  <div class="container-lg">
			<div class="row flex-center mb-5">
			  <div class="col-auto text-center my-4">
				<h1 class="mb-4 fw-bold">Mes textes les plus récents</h1>
			  </div>
			</div>
			<div class="row">


				{#each data.texts as text, index}
				<BigCard item={text} index={index} hrefBase="text" />
			  {/each}			  
			</div>
		  </div>
		</section>


		
		

		
  
  

  
