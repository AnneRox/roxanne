<template>
	<section class="about">
		<div class="about__content">
			<h1>About</h1>

			<ul>
				<h5>Education</h5>
				<li>Grafisch Vormgeving MBO - Media College amsterdam</li>
				<li>Communication and Multimedia HBO - Hogeschool van Amsterdam</li>
			</ul>

			<ul>
				<h5>Specialized in</h5>
				<li>Branding</li>
				<li>UX &amp; UI</li>
				<li>Micro interaction</li>
				<li>Animated prototype</li>
				<li>Frontend</li>
			</ul>

			<ul>
				<h5>Skilss</h5>
				<li>Photoshop</li>
				<li>Illustrator</li>
				<li>Indesign</li>
				<li>Sketch</li>
				<li>Abstract</li>
				<li>Zeplin</li>
				<li>Principle</li>
				<li>Html5</li>
				<li>SCCS</li>
				<li>Vue</li>
			</ul>

		</div>
</section></template>

<style lang="scss">
@import '~tools';
.about {
	h1,
	li {
		color: color(Blue);
	}
	height: 100vh;
	display: flex;
	align-items: center;
	&__content {
		width: grid(6);
		margin-left: grid(4);
	}
}
</style>
