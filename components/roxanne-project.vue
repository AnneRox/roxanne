<template>
	<section class="project">
		<div class="project__content">
			<h1>project</h1>
		</div>
	</section>
</template>

<style lang="scss">
@import '~tools';
.project {
	height: 100vh;
	display: flex;
	align-items: center;
	&__content {
		width: grid(6);
		margin-left: grid(3);
	}
}
</style>
