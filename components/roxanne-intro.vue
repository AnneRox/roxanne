<template>
	<section class="intro">
		<div class="row center">
			<div class="column small-full medium-20 large-14 intro__content">
				<h2>Hi, I am a digital designer</h2>
				<p>Currently working at
					<a class="textlink" target="_blank" href="http://www.matise.nl">
						<span class="textlink__text">Matise</span>
					</a> located in Amsterdam.
					I have a background in graphic design but my strength lies in branded digital design.</p>
				<a class="button" target="_blank" href="https://dribbble.com/AnneRox">
					<span class="textlink__text">Dribble</span>
				</a>
				<a class="button" target="_blank" href="https://www.linkedin.com/in/roxannevandenaakster/">
					<span class="textlink__text">LinkedIn</span>
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
@import '~tools';
section.intro {
	background-color: color(Pink);
	padding: grid(4 0 2 0);
	@media #{$small-only} {
		padding: grid(4 2);
	}
	.intro {
		&__content {
			z-index: 1;
			.button {
				margin-top: 32px;
			}
		}
	}
}
</style>
