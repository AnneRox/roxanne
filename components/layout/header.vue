<template>
	<header id="header" class="header">
		<!-- <nav>
			<nuxt-link class="button button__home" to="/">Portfolio</nuxt-link>
			<nuxt-link class="button button__about" to="/about">About</nuxt-link>
			<nuxt-link class="button button__work" to="/work">Work</nuxt-link>
		</nav> -->
		<nav>
			<nuxt-link class="button button__home" to="/">Roxanne</nuxt-link>
			<a class="button button__linkedIn" target="_blank" href="https://www.linkedin.com/in/roxannevandenaakster/">LinkedIn</a>
		</nav>


	</header>
</template>

<script>
import axios from 'axios';

export default {
	// Watch for $route.query.page to call Component methods (asyncData, fetch, validate, layout, etc.)
	watchQuery: ['page'],
	// Key for <NuxtChild> (transitions)
	key: (to) => to.fullPath,
	// Called to know which transition to apply
	transition(to, from) {
		if (!from) return 'slide-left';
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left';
	},
	async asyncData({ query }) {
		const page = +query.page || 1;
		const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`);
		return {
			page: +data.page,
			totalPages: data.total_pages,
			users: data.data
		};
	}
};
</script>

<style lang="scss">
@import '~tools';

#header {
	position: relative;
	background-color: color(White);
	width: rem(80);
	height: 100vh;
	position: fixed;
	nav {
		a.button {
			position: relative;
			text-transform: uppercase;
			font-size: rem(12);
			letter-spacing: rem(4);
			color: color(Black);
			&__home {
				position: absolute;
				top: grid(1);
				transform: rotate(-90deg);
			}
			&__linkedIn {
				position: absolute;
				bottom: grid(1);
				transform: rotate(-90deg);
			}
		}
	}
}
</style>
