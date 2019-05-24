<template>

	<main class="page page--home">
		<roxanneIntro />
		<roxanneAbout />
		<roxanneWireframes />
		<roxanneWork />

	</main>

</template>

<script>
import roxanneIntro from '~/components/roxanne-intro.vue';
import roxanneAbout from '~/components/roxanne-about.vue';
import roxanneWireframes from '~/components/roxanne-wireframes.vue';
import roxanneWork from '~/components/roxanne-work.vue';
export default {
	components: {
		roxanneIntro,
		roxanneAbout,
		roxanneWireframes,
		roxanneWork
	}
};
</script>

<style lang="scss">
@import '~tools';
</style>
