<script lang="ts">
	import { onMount } from 'svelte';
	import type { Media } from '.';

	export let video: Media;

	let container: HTMLDivElement;
	// let video: HTMLVideoElement;
	let loaded = false;
	let clientWidth = 0;

	// after hover, then we play the video without sound on
	onMount(() => {
		// const clicks = fromEvent(document, 'click');
		// const openings = interval(1000);
		// const buffered = clicks.pipe(bufferToggle(openings, (i) => (i % 2 ? timer(500) : EMPTY)));
		// buffered.subscribe((x) => console.log(x));
		// console.log(clientWidth);
		// const player = new YTPlayer(video);
		// player.load('sk4eLERT1No');
		// player.setSize(clientWidth, 180);
		// player.on('unstarted', () => {
		// 	loaded = true;
		// 	console.log('unstarted!');
		// });
		// player.on('cued', () => {
		// 	loaded = true;
		// 	console.log(player.getState());
		// });
		// player.on('playing', () => {
		// 	loaded = true;
		// 	console.log(player.getProgress());
		// });
		// const mouseout$ = fromEvent(video, 'mouseout');
		// fromEvent(container, 'mouseover')
		// 	.pipe(
		// 		throttleTime(1000),
		// 		tap(() => {
		// 			player.setVolume(0);
		// 			player.play();
		// 			console.log('HERE');
		// 			// video.play();
		// 		})
		// 		// takeUntil(mouseout$)
		// 	)
		// 	.subscribe(console.log);
		// fromEvent(container, 'mouseout').subscribe(() => {
		// 	player.stop();
		// });
		// console.log(video);
		// player.console.log(player);
	});
</script>

<div class="video" bind:clientWidth>
	<img src={video.imageUrl} alt={video.title} />
</div>

<style lang="scss">
	.video {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding-top: 100%; /* 1:1 Aspect Ratio */
		text-align: center;

		img {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
