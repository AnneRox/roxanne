<template>
	<section class="wireframe">
		<div class="layout">
			<div class="layout__textHolder">
				<h2>Clever UX design</h2>
				<p>I create dynamic prototypes and user experiences for web.</p>
			</div>
			<div class="layout__image" />
	</div></section>
</template>

<style lang="scss">
@import '~tools';
.wireframe {
	padding: grid(2 0 0 0);
	.layout {
		// text-align: center;
		&__textHolder {
			margin-left: grid(6);
			padding: grid(0.5 0);
		}
		&__image {
			width: grid(20);
			height: grid(6);
			position: relative;
			margin: auto;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			background-image: url('~/images/wireframes.png');
		}
	}
}
</style>




<script>
</script>
