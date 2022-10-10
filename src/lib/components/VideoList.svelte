<script lang="ts">
	import Video from './Video.svelte';

	export let items: any[] = [];

	items = items.slice(0, 4);
</script>

<ul class="video-list">
	{#each items as item (item.id)}
		<li><Video /></li>
	{/each}
</ul>

<style lang="scss">
	.video-list {
		list-style: none;
		list-style-position: inside;
		display: flex;
		justify-content: space-between;
		padding: 1rem 0;

		li {
			cursor: default;
			border: 1px solid red;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 22%;
			transition: all 0.5s;

			&:hover {
				transform: scale(1.1);
			}
		}

		@media screen and (max-width: 600px) {
			flex-direction: column;

			li {
				width: 100%;
				margin-bottom: 1rem;
			}
		}
	}
</style>
