<template>
	<header id="header" class="header">
		<div class="header__FixedContainer">
			<h1 class="small">🙋‍ Roxanne van den Aakster</h1>
		</div>
	</header>
</template>


<style lang="scss">
@import '~tools';

#header {
	position: relative;
	margin: grid(0 7);
	@media #{$medium-down} {
		margin: grid(0 4);
	}
	@media #{$small-only} {
		margin: 0rem 2rem;
	}
	.header {
		&__FixedContainer {
			position: absolute;
			margin-top: 4rem;
			@media #{$small-only} {
				margin-top: 2rem;
			}
		}
	}
}
</style>

<script>
</script>
