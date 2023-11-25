<script>
import BigCard from '$lib/components/BigCard.svelte';
export let data;
</script>

<section class="py-4 pt-10">
  {#each data.texts as text, index}
    <BigCard item={text} index={index} hrefBase="text"/>
  {/each}
</section>



        
    
