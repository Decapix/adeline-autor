<script>
	import { onMount } from 'svelte';
    import {countImages, getImagesFromSellerPost} from '$lib/action/method';
    import { Carousel } from 'flowbite-svelte';



    export let post; 

	let leng;

	onMount(() => {
		if (typeof window !== 'undefined') {
			leng = sessionStorage.getItem('lang');
		}
	});

    // count image of post
    const countpo = countImages(post)
    const images = getImagesFromSellerPost(post);

</script>



<div class="py-8 ">
    <div class="rounded-xl shadow-lg overflow-hidden bg-primary-50">
    <div class="md:flex-grow">
        <div class="md:shrink-0">
            {#if countpo !== 0}
              <Carousel {images} let:Controls class="min-h-[800px] lg:min-h-[900px]">
                  <Controls />
              </Carousel>
            {/if}
          </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-primary-700  font-semibold">{post.title[leng]}</div>
<!--         <a href="/salewomen/" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">okokokokok</a> -->
        <p class="mt-2 text-slate-500 line-clamp-6">{post.description[leng]} </p>
      </div>
    </div>
  </div>
  </div>