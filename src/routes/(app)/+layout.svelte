<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="main" id="top">
<Header />
<slot></slot>
<Footer />


</main>