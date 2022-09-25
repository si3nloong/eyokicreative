<script lang="ts">
	import PlayList from '../components/PlayList.svelte';
	import VideoList from '../components/VideoList.svelte';

	const popularVideos = [
		{ id: '1', title: 'Just like Fire', imageUrl: '', time: '' },
		{ id: '2', title: 'Just like Fire', imageUrl: '', time: '' },
		{ id: '3', title: 'Just like Fire', imageUrl: '', time: '' },
		{ id: '4', title: 'Just like Fire', imageUrl: '', time: '' },
		{ id: '5', title: 'Just like Fire', imageUrl: '', time: '' }
	];
</script>

<header>
	<span class="logo">
		<picture>
			<!-- <source srcset="svelte-welcome.webp" type="image/webp" /> -->
			<img src="logo.png" alt="Eyoki" />
		</picture>
	</span>
	<nav>
		<ul class="nav-list">
			<li><a class="cta" href="/about-us">Ask for Quotation</a></li>
			<li><a href="/about-us">Our Clients</a></li>
			<li><a href="/about-us">About Us</a></li>
			<li><a href="/contact-us">Contact Us</a></li>
		</ul>
	</nav>
</header>

<section>
	<h1><span class="highlight">Eyoki Creative</span> is a Future Production House</h1>
	<h2>We are Fun and Young.</h2>
</section>

<section>
	<h3>Popular work you may like</h3>
	<VideoList items={popularVideos} />
</section>

<section class="works">
	<div>
		<h3>Most Popular on This Week</h3>
		<PlayList items={popularVideos} />
	</div>
	<div>
		<h3>Most Impactful</h3>
		<PlayList items={popularVideos} />
	</div>
</section>

<footer>
	<p>Copyright Reserved © 2022 Eyoki Creative. All Rights Reserved.</p>
	<div>Registered in Malaysia. (002865528-A)</div>
	<p>Made by <a href="https://github.com/si3nloong" target="_blank">SianLoong</a>.</p>
</footer>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 4rem 0;

		& > .logo {
			max-width: 100px;
			flex-grow: 1;

			img {
				display: block;
				width: 100%;
			}
		}

		.nav-list {
			display: flex;
			align-items: center;
			list-style: none;
			list-style-position: inside;

			li {
				margin: 0 0.5rem;
			}
		}

		@media screen and (max-width: 600px) {
			padding: 1.5rem 0;
		}
	}

	footer {
		border-top: 1px solid #333949;
		color: #aeb8ca;
		padding: 2rem 0 100px;
		font-size: 12px;
	}

	h1 {
		font-size: 48px;
		line-height: 1.1;
		width: 60%;
		margin-bottom: 1.5rem;
	}

	.cta {
		display: flex;
		height: 40px;
		line-height: 40px;
		white-space: nowrap;
		padding: 0 20px;
		border-radius: 25px;
		background: linear-gradient(60deg, red, blue);
	}

	.highlight {
		background: linear-gradient(60deg, red, blue);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.works {
		display: flex;
		padding: 1rem 0;
		justify-content: space-between;

		& > div {
			width: 49%;
		}

		@media screen and (max-width: 600px) {
			flex-direction: column;

			& > div {
				margin: 1rem 0;
				width: 100%;
			}
		}
	}
</style>
