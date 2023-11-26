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
			  <div class="col-md-5 col-lg-7 order-md-1 pt-8"><img class="img-fluid" src="assets/img/illustrations/hero1.png" alt="" /></div>
			  <div class="col-md-7 col-lg-5 text-center text-md-start pt-5 pt-md-9">
				<h1 class="mb-4 display-2 fw-bold">Autrice de littérature jeunesse</h1>
				<p class="mt-3 mb-4">Data Warehouse is a data storage area that <br />has been tested for security, so you can store<br />your data here safely but not be afraid of <br />being stolen by others.</p>
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


		
		

		
  
  

  
