<script lang="ts">
	import type { Media } from '$lib/components';

	export let data: { videos: Media[] } = { videos: [] };

	console.log(data);
</script>

<ul>
	{#each data.videos as item}
		<li>
			<div class="d-16-9"><img src={item.cover} alt={item.title} /></div>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style: none;
		list-style-position: inside;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		li {
			width: 23.5%;

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
