<script context="module" lang="ts">
	const jobs = [
		{ name: 'Intern', subject: 'Application for Internship' },
		{ name: 'Junior Director', subject: 'Application for Junior Director' },
		{ name: 'Junior Director of Photography (DP/DoP)', subject: 'Application for Junior DP' },
		{ name: 'Junior Video Editor (Offline/Online)', subject: 'Application for Junior Video Editor' }
	];

	export const prerender = true;
</script>

<script lang="ts">
	let opening = true;
</script>

<section>
	<h1>Careers in Eyoki Creative</h1>
	{#if opening}
		<ul class="job-list">
			{#each jobs as item}
				<li>
					<span class="position">{item.name}</span>
					<a class="apply-btn" href="mailto:hr@eyokicreative.com?subject={encodeURI(item.subject)}"
						>Apply</a
					>
				</li>
			{/each}
		</ul>
		<div style="margin: 2rem 0; color: red">Note: Kindly attach your resume and portfolio.</div>
		<div>The processes for joining Eyoki Creative :</div>
		<ol class="step-list">
			<li>Values interview</li>
			<li>Technical interview</li>
			<li>Team interview</li>
			<li>Offer and Package discussion (Optional)</li>
		</ol>
	{:else}
		<div>Sorry, there are no opening at the moment.</div>
	{/if}
</section>

<style lang="scss">
	ul,
	ol {
		list-style-position: inside;
	}

	.job-list {
		margin-top: 2rem;

		li {
			display: flex;
			padding: 0.5rem 0;

			.position {
				flex-grow: 1;
			}
		}
	}
</style>
