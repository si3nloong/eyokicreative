<script lang="ts">
	let className = '';
	export { className as class };
</script>

<button class={className} {...$$restProps} on:click><slot /></button>

<style lang="scss">
	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		border: none;
		height: 42px;
		line-height: 42px;
		font-weight: 600;
		font-size: var(--font-size);
		padding: 0 2.5rem 0 2rem;
		border-radius: 3px;
		justify-content: center;
		background: red;
		color: #fff;
	}
</style>
