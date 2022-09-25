<script>
	import './app.scss';
</script>

<svelte:head>
	<title>Eyoki Creative | The Fun Creative Studio.</title>
</svelte:head>

<main><slot /></main>

<style lang="scss" global>
	main {
		max-width: 1280px;
		width: 85%;
		margin: 0 auto;
	}
</style>
