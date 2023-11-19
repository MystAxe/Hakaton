<script>
	import Form from '$lib/components/Form.svelte';
	import { bdAnkets } from '../../store/store';
	import AnketTemplate from './AnketTemplate.svelte';
    console.log($bdAnkets);
</script>

<div class="ankets__wrapper">
	
	<div class="ankets">
		{#each $bdAnkets as anket}
		<AnketTemplate
		inpname={anket.fio}
		inpage={anket.age}
		inpheight={anket.height}
		inpcity={anket.city}
		inpfeat={anket.description}
		inpImage={anket.image}
		/>
		{/each}
	</div>
</div>

<style>
	.ankets__wrapper {
        background: rgb(223, 223, 223);
		padding: 50px;
	}

    .ankets {
        max-width: 800px;
        width: 90%;
        margin: 0 auto 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
</style>