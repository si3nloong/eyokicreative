<script lang="ts">
	const clients = [
		{
			alt: 'AIA',
			src: 'aia.png'
		},
		{
			alt: 'TGV Cinemas',
			src: 'tgv-cinemas.png'
		},
		{
			alt: 'Ducks',
			src: 'duck.png'
		},
		{
			alt: 'Vivo',
			src: 'vivo.png'
		}
	];
</script>

<h1>Our Clients</h1>

<ul class="client-list">
	{#each clients as item}
		<li class="">
			<img src="/logo/{item.src}" alt={item.alt} />
		</li>
	{/each}
</ul>

<style lang="scss">
	.client-list {
		li {
			display: inline-flex;
			max-width: 100px;
		}
	}
</style>
