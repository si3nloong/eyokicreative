<script lang="ts">
	export let href: string | null = null;
</script>

<header>
	<h3><slot /></h3>
	{#if href}
		<a {href} class="link">SHOW ALL</a>
	{/if}
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		padding: var(--padding) 0;

		.link {
			position: relative;
			color: #da0037;
			font-size: 12px;
			font-weight: bold;
			top: -1.5px;
		}
	}
</style>
