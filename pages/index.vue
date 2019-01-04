<template>

	<main class="page page--home">
		<roxanneIntro />
		<roxanneAbout />
		<roxanneWork />
	</main>

</template>

<script>
import roxanneIntro from '~/components/roxanne-intro.vue';
import roxanneAbout from '~/components/roxanne-about.vue';
import roxanneWork from '~/components/roxanne-work.vue';
export default {
	components: {
		roxanneIntro,
		roxanneAbout,
		roxanneWork
	}
};
</script>

<style lang="scss">
@import '~tools';

.page {
	// general page styles
	&--intro {
		// page home styles
	}
	&--about {
		// page home styles
	}
	&--work {
		// page home styles
	}
}
</style>
