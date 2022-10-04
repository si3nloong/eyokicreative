<script>
	import './app.scss';
</script>

<svelte:head>
	<title>Eyoki Creative | The Social Media Creative Studio in Malaysia.</title>
	<meta
		name="description"
		content="We provide creative solution, pitching, film making solution."
	/>
</svelte:head>

<main>
	<!-- Header section -->
	<header>
		<span class="left">
			<a class="logo" href="/">
				<!-- <picture class="logo"> -->
				<!-- <source srcset="svelte-welcome.webp" type="image/webp" /> -->
				<img src="logo.png" alt="Eyoki" />
				<!-- </picture> -->
			</a></span
		>
		<a class="cta" href="/quotation">Ask for Quotation</a>
		<nav>
			<ul class="nav-list">
				<li><a href="/our-clients">Our Clients</a></li>
				<li><a href="/about-us">About Us</a></li>
				<li><a href="/contact-us">Contact Us</a></li>
			</ul>
		</nav>
	</header>

	<!-- Body section -->
	<div style="min-height: 500px;"><slot /></div>

	<!-- Footer section -->
	<footer>
		<div>
			<p>Copyright Reserved © 2022 Eyoki Creative.</p>
			<div>Registered in Malaysia. (002865528-A)</div>
			<p>Made by <a href="https://github.com/si3nloong" target="_blank">SianLoong</a>.</p>
		</div>

		<!-- Connect with us section -->
		<div>
			Connect with us

			<ul>
				<li><a href="https://www.facebook.com/eyokicreative">facebook</a></li>
				<li><a href="https://www.instagram.com/eyokicreative">instagram</a></li>
			</ul>
		</div>
	</footer>
</main>

<style lang="scss" global>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem 0;

		.left {
			flex-grow: 1;
		}

		.logo {
			display: inline-flex;
			width: 150px;
		}

		.cta {
			display: flex;
			height: 45px;
			line-height: 45px;
			white-space: nowrap;
			font-size: 16px;
			padding: 0 20px;
			border-radius: 25px;
			color: #fff;
			background: linear-gradient(60deg, red, blue);
		}

		.nav-list {
			display: flex;
			align-items: center;
			list-style: none;
			list-style-position: inside;
			margin-left: 15px;

			li {
				margin: 0 0.5rem;
			}
		}

		@media screen and (max-width: 600px) {
			padding: 1rem 0;

			nav {
				display: none;
			}
		}
	}

	main {
		max-width: 1280px;
		width: 85%;
		margin: 0 auto;
	}

	footer {
		// border-top: 1px solid #333949;
		color: #aeb8ca;
		padding: 2rem 0 100px;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
</style>
