<template>
	<header id="header" class="header">
		<div class="header__FixedContainer">
			<h5>Roxanne </h5>
			<h1>Digital designer &amp; web developer</h1>
		</div>
	</header>
</template>


<style lang="scss">
@import '~tools';

#header {
	position: relative;
	top: rem(100);
	left: rem(100);
	@media #{$small-only} {
		left: grid(1);
		top: grid(2);
	}
	.header {
		&__FixedContainer {
			position: fixed;
			opacity: 0.1;
			h1 {
				font-size: 10vw;
			}
		}
	}
}
</style>


<script>
</script>
