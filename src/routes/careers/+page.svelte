<script context="module" lang="ts">
	const jobs = [
		{ name: 'Intern', subject: 'Application for Internship' },
		{ name: 'Junior Director', subject: 'Application for Junior Director' },
		{ name: 'Junior Director of Photography (DP/DoP)', subject: 'Application for Junior DP' },
		{ name: 'Junior Video Editor (Offline/Online)', subject: 'Application for Junior Video Editor' }
	];
</script>

<script lang="ts">
	let opening = true;
</script>

<section>
	<div class="headline">
		<h1>
			WE FOCUS ON <span class="highlight">CULTURE</span> AND
			<span class="highlight">TEAM</span>
		</h1>
	</div>
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
		<!-- <div>The processes for joining Eyoki Creative :</div>
		<ol class="step-list">
			<li>Values interview</li>
			<li>Technical interview</li>
			<li>Team interview</li>
			<li>Offer and Package discussion (Optional)</li>
		</ol> -->
	{:else}
		<div>Sorry, there are no opening at the moment.</div>
	{/if}
</section>

<style lang="scss">
	@import '../global.scss';

	.headline {
		padding: 0 0 2rem;

		h1 {
			font-size: 42px;
			line-height: 1.2;
		}

		@media screen and (min-width: $minWidth) {
			padding: 5rem 0;
			text-align: center;
		}
	}

	.highlight {
		background: linear-gradient(60deg, red, blue);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	section {
		padding: var(--padding);

		@media screen and (min-width: $minWidth) {
			padding: var(--padding) 0;
		}
	}

	ul {
		list-style-position: inside;
	}

	.job-list {
		margin-top: var(--margin);

		li {
			display: flex;
			padding: 0.5rem 0;

			.position {
				flex-grow: 1;
			}
		}
	}
</style>
