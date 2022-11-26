<script lang="ts">
	export let items: string[] = [];

	const reg = new RegExp(`eyoki`, 'i');
	const checkRelated = (v: string) => {
		return reg.test(v) ? `highlight` : '';
	};
</script>

{#each items as item, i}
	{#if i > 0}
		<span style="margin-right: 2px">,</span>
	{/if}
	<span class={checkRelated(item)}>{item}</span>
{/each}

<style lang="scss">
	:global(.highlight) {
		text-decoration: underline;
		// text-decoration-color: red;
	}
</style>
