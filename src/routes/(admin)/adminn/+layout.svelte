<script>
    import HeaderAdmin from '$lib/components/HeaderAdmin.svelte';
    import LoginAdmin from '$lib/components/LoginAdmin.svelte';
    export let data;
    const isConnected = (data.connect === 'true' || data.connect === true);

</script>
    
{#if isConnected}
<HeaderAdmin />    
<slot></slot>
{:else}
<LoginAdmin />
{/if}