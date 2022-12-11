<script lang="ts">
	import { goto } from '$app/navigation';

	export let items: { label: string; href: string }[] = [];

	let toggle: HTMLInputElement;

	const onRedirect = (e: Event) => {
		e.preventDefault();
		e.stopPropagation();
		const el = e.target as HTMLAnchorElement;
		toggle.checked = false;
		goto(el.href);
	};
</script>

<span class="menu-toggle">
	<input bind:this={toggle} type="checkbox" />
	{@html `<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H19M1 1H19M1 13H19" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
	<!-- <aside class="menu"> -->
	<ul class="menu">
		{#each items as item}
			<li><a href={item.href} on:click={onRedirect}>{item.label}</a></li>
		{/each}
	</ul>
	<!-- </aside> -->
</span>

<style lang="scss">
	.menu-toggle {
		position: relative;
		display: inline-flex;
		cursor: pointer;
		user-select: none;

		input[type='checkbox'] {
			display: block;
			width: 40px;
			height: 32px;
			position: absolute;
			top: -7px;
			left: -5px;
			cursor: pointer;

			opacity: 0; /* hide this */
			z-index: 2; /* and place it over the hamburger */

			-webkit-touch-callout: none;
		}

		input:checked ~ ul {
			transform: none;
		}

		@media (prefers-color-scheme: dark) {
			:global(svg path) {
				stroke: #fff !important;
			}
		}
	}

	.menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--background-color);
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		/* to stop flickering of text in safari */

		transform-origin: 0% 0%;
		transform: translate(-100%, 0);

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		// z-index: 10;

		ul {
			padding: var(--padding);
		}
	}
</style>
