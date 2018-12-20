<template>

	<main class="page page--home">
		<roxanneIntro />
	</main>

</template>

<script>
import roxanneIntro from '~/components/roxanne-intro.vue';
export default {
	components: {
		roxanneIntro
	}
};
</script>

<style lang="scss">
@import '~tools';

.page {
	// general page styles
	&--home {
		// page home styles
	}
}
</style>
