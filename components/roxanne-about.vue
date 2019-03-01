<template>
	<section class="about">
		<div class="about__content">
			<h2>Skills &amp; Tools</h2>
			<p>And I'm always learning more!</p>
			<ul class="about__content--skilss">
				<li>Photoshop</li>
				<li>Illustrator</li>
				<li>Indesign</li>
				<li>Sketch</li>
				<li>Abstract</li>
				<li>Zeplin</li>
				<li>Principle</li>
				<li>Html5</li>
				<li>SCSS</li>
				<li>SASS</li>
				<li>BEM</li>
				<li>Vue</li>
			</ul>
		</div>
</section></template>

<style lang="scss">
@import '~tools';
.about {
	padding: grid(2 0 0 0);
	&__content {
		width: grid(12);
		margin-left: grid(6);

		&--skilss {
			display: flex;
			flex-wrap: wrap;
			li {
				font-size: 12px;
				color: color(Black);
				font-weight: 500;
				height: rem(140);
				border-radius: 70px;
				border: solid 2px color(Black, 0.25);
				width: rem(140);
				margin: rem(10);
				display: flex;
				justify-content: center;
				align-items: center;
				background-size: contain;
				background-repeat: no-repeat;
			}
		}
	}
}
</style>
