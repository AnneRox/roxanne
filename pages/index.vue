<template>

	<main class="page page--home">
		<roxanneIntro />
		<roxanneWork />

	</main>

</template>

<script>
import roxanneIntro from '~/components/roxanne-intro.vue';
import roxanneWork from '~/components/roxanne-work.vue';
export default {
	components: {
		roxanneIntro,
		roxanneWork
	}
};
</script>

<style lang="scss">
@import '~tools';
</style>
