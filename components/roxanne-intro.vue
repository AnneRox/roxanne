<template>
	<section class="intro">
		<div class="intro__content">
			<h1>Hi,</h1>
			<p>I am Roxanne van den Aakster a digital designer &amp; web developer. Currently working at
				<a class="textlink" target="_blank" href="http://www.matise.nl">Matise</a> located in Amsterdam.
				With a background in Graphic Design, my strength lies in website design and app design.</p>
		</div>
		<div class="intro__img" />
</section></template>

<style lang="scss">
@import '~tools';
.intro {
	height: 100vh;
	display: flex;
	align-items: center;
	&__content {
		width: grid(6);
		margin-left: grid(3);
	}
	&__img {
		height: 100vh;
		width: grid(12);
		margin-left: grid(3);
		background-image: url('~/images/Rox.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
}
</style>
