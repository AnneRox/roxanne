<template>

	<main class="page page--home">
		<roxanneIntro />
		<roxanneAbout />
		<roxanneWork />
		<roxanneWireframes />

	</main>

</template>

<script>
import roxanneIntro from '~/components/roxanne-intro.vue';
import roxanneAbout from '~/components/roxanne-about.vue';
import roxanneWork from '~/components/roxanne-work.vue';
import roxanneWireframes from '~/components/roxanne-wireframes.vue';
export default {
	components: {
		roxanneIntro,
		roxanneAbout,
		roxanneWork,
		roxanneWireframes
	}
};
</script>

<style lang="scss">
@import '~tools';
</style>
