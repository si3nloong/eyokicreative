<script lang="ts">
	export let items: string[] = [];
</script>

{#each items as item}
	<span>{item}</span>
{/each}

<style>
	/* your styles go here */
</style>
