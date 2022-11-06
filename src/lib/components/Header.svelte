<script lang="ts">
	export let href = '';
</script>

<header>
	<h3><slot /></h3>
	<a {href}>SHOW ALL</a>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		padding: 1rem 0;
	}
</style>
