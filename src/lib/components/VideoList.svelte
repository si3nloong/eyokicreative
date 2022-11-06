<script lang="ts">
	import { store } from '$lib/store';
	import type { Media } from '.';
	import Video from './Video.svelte';

	export let items: Media[] = [];

	items = items.splice(0, 4);

	const onPreview = (item: Media) => () => {
		store.preview(item);
	};
</script>

<ul class="video-list">
	{#each items as item (item.id)}
		<li on:click={onPreview(item)}><Video video={item} /></li>
	{/each}
</ul>

<style lang="scss">
	.video-list {
		list-style: none;
		list-style-position: inside;
		display: flex;
		justify-content: space-between;

		li {
			cursor: default;
			width: 23.5%;
			transition: all 0.5s;

			&:hover {
				transform: scale(1.05);
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
