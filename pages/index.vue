<template>

	<main class="page page--home">
		<roxanneIntro />
		<roxanneWork />
		<roxanneSkills />
	</main>

</template>

<script>
import roxanneIntro from '~/components/roxanne-intro.vue';
import roxanneWork from '~/components/roxanne-work.vue';
import roxanneSkills from '~/components/roxanne-skills.vue';
export default {
	components: {
		roxanneIntro,
		roxanneWork,
		roxanneSkills
	}
};
</script>

<style lang="scss">
@import '~tools';
</style>
