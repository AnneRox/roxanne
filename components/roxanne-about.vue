<template>
	<section class="about">
		<div class="about__content">

			<ul class="about__content--specialized">
				<h5>Specialized in</h5>
				<li>Branding</li>
				<li>UX &amp; UI</li>
				<li>Micro interaction</li>
				<li>Animated prototype</li>
				<li>Frontend</li>
			</ul>

			<ul class="about__content--education">
				<h5>Education</h5>
				<li>Grafisch Vormgeving MBO - Media College amsterdam</li>
				<li>Communication and Multimedia HBO - Hogeschool van Amsterdam</li>
			</ul>


			<ul class="about__content--skilss">
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
	padding: grid(1 0);
	&__content {
		width: grid(10);
		margin-left: grid(8);
		&--specialized {
			background-color: red;
		}
		&--education {
			background-color: green;
		}
		&--skilss {
			background-color: blue;
		}
	}
}
</style>
