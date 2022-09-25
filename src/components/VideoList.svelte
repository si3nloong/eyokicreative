<script lang="ts">
	import Video from './Video.svelte';

	export let items: any[] = [];
</script>

<ul class="video-list">
	{#each items as item}
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
			width: 18%;
			height: 220px;
			background: #0d101b;
			// border: 1px solid #0d101b;
			// transition: all 0.5s;

			// &:hover {
			// 	transform: scale(1.1);
			// }
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
