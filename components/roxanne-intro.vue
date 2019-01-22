<template>
	<section class="intro">
		<!-- <div class="intro__img">
			<div class="imageHolder" />
			<h6>Roxanne van den Aakster</h6>
		</div> -->
		<div class="row intro__content">
			<h1>Digital designer &amp; web developer</h1>
			<p>Currently working at
				<a class="textlink" target="_blank" href="http://www.matise.nl">
					<span class="textlink__text">Matise</span>
				</a> located in Amsterdam.
				With a background in Graphic Design, my strength lies in webdesign and app design.</p>
		</div>
</section></template>

<style lang="scss">
@import '~tools';
.intro {
	padding: grid(1 0);
	// &__img {
	// 	display: flex;
	// 	align-items: center;
	// 	position: fixed;
	// 	h6 {
	// 		padding: rem(20 40);
	// 		margin-top: rem(-10);
	// 		margin-left: rem(-15);
	// 		background-color: color(Black);
	// 		color: color(White);
	// 		font-size: rem(12);
	// 	}
	// 	.imageHolder {
	// 		margin-left: grid(1);
	// 		height: rem(180);
	// 		width: rem(180);
	// 		border-radius: rem(90);
	// 		background-image: url('~/images/Rox.png');
	// 		background-position: center;
	// 		background-repeat: no-repeat;
	// 		background-size: cover;
	// 		transition: 0.3s ease;
	// 		&:hover {
	// 			transform: scale(1.1);
	// 			transition: 0.3s ease;
	// 		}
	// 	}
	// }
	&__content {
		width: grid(10);
		margin-left: grid(8);
		padding: grid(0.5 0);
	}
}
</style>
