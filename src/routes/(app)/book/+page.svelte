<script>
	import BigCard from '$lib/components/BigCard.svelte';

	export let data;
</script>
	
<section class="py-4 pt-10">
{#each data.books as book, index}
	<BigCard item={book} index={index} hrefBase="book" />
	{/each}
</section>
	