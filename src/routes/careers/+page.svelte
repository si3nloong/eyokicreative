<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	let opening = true;
</script>

<section>
	<h1>Careers in Eyoki Creative</h1>
	{#if opening}
		<p>Internship</p>
	{:else}
		<div>Sorry, there are no opening at the moment.</div>
	{/if}
</section>

<style lang="scss">
</style>
