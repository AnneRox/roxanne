<template>
	<header id="header" class="header">
		<div class="header__img" />
	</header>
</template>


<style lang="scss">
@import '~tools';

#header {
	position: absolute;
	display: flex;
	top: grid(1);
	left: grid(7);
	.header {
		&__img {
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
