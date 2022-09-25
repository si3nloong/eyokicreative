<script lang="ts">
	import { fromEvent, debounceTime, tap, takeUntil, from } from 'rxjs';
	import { onMount } from 'svelte';

	let video: HTMLVideoElement;

	onMount(() => {
		const mouseout$ = fromEvent(video, 'mouseout');
		fromEvent(video, 'timeupdate').subscribe(console.log);
		fromEvent(video, 'mouseover')
			.pipe(
				debounceTime(1000),
				tap(() => {
					console.log('HERE');
					video.play();
				})
				// takeUntil(mouseout$)
			)
			.subscribe(console.log);
		console.log(video);
	});
</script>

<div class="video">
	<video bind:this={video} width="100%" controls playsinline={true} muted={true}>
		<!-- <source src="/SK Magic Jiksoo Ria Water Purifier.mp4" type="video/mp4" /> -->
	</video>
	<div class="cover"><img src="/favicon.png" alt="cover" /></div>
</div>

<style lang="scss">
	.video {
		display: flex;
		align-items: center;
		height: 180px;
		justify-content: center;
		text-align: center;

		video {
			display: none;
		}
	}
</style>
