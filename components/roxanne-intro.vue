<template>
	<section class="intro">
		<div class="row intro__content">
			<h1>Digital designer &amp; web developer</h1>
			<p>Currently working at
				<a class="textlink" target="_blank" href="http://www.matise.nl">
					<span class="textlink__text">Matise</span>
				</a> located in Amsterdam.
				I have a background in graphic design but my strength lies in branded digital design.</p>
			<p>
				<a class="textlink" target="_blank" href="https://dribbble.com/AnneRox">
					<span class="textlink__text">Dribble</span>
				</a>
				<a class="textlink" target="_blank" href="https://www.linkedin.com/in/roxannevandenaakster/">
					<span class="textlink__text">LinkedIn</span>
				</a>
			</p>
		</div>
</section></template>

<style lang="scss">
@import '~tools';
.intro {
	padding: grid(2 0 0 0);
	&__content {
		width: grid(12);
		margin-left: grid(6);
		padding: grid(0.5 0);
		p {
			padding: grid(0 2 0 0);
		}
		ul {
			display: flex;
		}
	}
}
</style>
