<script lang="ts">
	export let items: string[] = [];
</script>

{#each items as item, i}
	{#if i > 0}
		<span style="margin-right: 2px">,</span>
	{/if}
	<span>{item}</span>
{/each}

<style>
	/* your styles go here */
</style>
