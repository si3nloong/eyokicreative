<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	let opening = true;
</script>

<section>
	<h1>Careers in Eyoki Creative</h1>
	{#if opening}
		<ul class="job-list">
			<li>
				<span class="position">Intern</span>
				<a
					class="apply-btn"
					href="mailto:hr@eyokicreative.com?subject=Application for Intern position">Apply</a
				>
			</li>
			<li>
				<span class="position">Junior Director</span>
				<a
					class="apply-btn"
					href="mailto:hr@eyokicreative.com?subject=Application for Junior Director position"
					>Apply</a
				>
			</li>
			<li>
				<span class="position">Junior Director of Photography</span>
				<a
					class="apply-btn"
					href="mailto:hr@eyokicreative.com?subject=Application for Junior DoP position">Apply</a
				>
			</li>
		</ul>
	{:else}
		<div>Sorry, there are no opening at the moment.</div>
	{/if}
</section>

<style lang="scss">
	.job-list {
		margin-top: 2rem;
		list-style-position: inside;

		li {
			display: flex;
			padding: 0.5rem 0;

			.position {
				flex-grow: 1;
			}
		}
	}
</style>
