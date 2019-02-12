<template>
	<header id="header" class="header">
		<div class="header__img" />
		<div class="row header__content">
			<p>Roxanne van den Aakster</p>
		</div>

	</header>
</template>


<style lang="scss">
@import '~tools';

#header {
	position: relative;
	top: rem(100);
	left: rem(100);

	.header {
		position: relative;
		&__content {
			p {
				position: absolute;
				top: rem(180);
				left: rem(-30);
				font-size: rem(12);
				font-weight: 500;
				text-transform: uppercase;
				transform: rotate(90deg);
			}
		}
		&__img {
			position: absolute;
			display: flex;
			height: rem(100);
			width: rem(100);
			border-radius: rem(50);
			background-image: url('~/images/Rox.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
	}
}
</style>


<script>
</script>
