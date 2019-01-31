<template>
	<section class="wireframe">
		<div class="layout">
			<div class="layout__textHolder">
				<h2>Clever UX design</h2>
				<p>I create dynamic prototypes and user experiences for web</p>
			</div>
			<div class="layout__image" />
	</div></section>
</template>

<style lang="scss">
@import '~tools';
.wireframe {
	padding: grid(2 0 0 0);
	background-color: color(Red);
	.layout {
		text-align: center;
		&__textHolder {
			padding: grid(0.5);
		}
		&__image {
			width: grid(24);
			height: grid(8);
			position: relative;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			background-image: url('~/images/wireframes.png');
		}
	}
}
</style>




<script>
</script>
