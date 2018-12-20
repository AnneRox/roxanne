<template>
	<header id="header" class="header">
		<nav>
			<nuxt-link class="button button__home" to="/">Portfolio</nuxt-link>
			<nuxt-link class="button button__about" to="/about">About</nuxt-link>
			<nuxt-link class="button button__work" to="/work">Work</nuxt-link>
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
	nav {
		position: fixed;
		height: 100vh;
		width: 100vw;
		a.button {
			position: relative;
			text-transform: uppercase;
			font-size: rem(12);
			letter-spacing: rem(4);

			&:after {
				background-color: color(Red);
				color: color(Pink);
				transition: ease 0.3s;
				content: '';
				display: flex;
				width: 100%;
				height: 0%;
				position: absolute;
				z-index: -1;
				right: 0;
				opacity: 0.2;
			}
			&:hover {
				&:after {
					height: 100%;
				}
			}
			&.nuxt-link-exact-active {
				&:after {
					height: rem(4);
					bottom: 0px;
				}
				&:hover {
					&:after {
						height: calc(100% + -4px);
						transition: ease 0.3s;
					}
				}
			}
			&__about {
				position: absolute;
				right: rem(0);
				display: flex;
				transform: rotate(90deg);
				top: 50%;
				padding: grid(0 0.25);
			}
			&__work {
				position: absolute;
				left: rem(0);
				display: flex;
				transform: rotate(-90deg);
				top: 50%;
				padding: grid(0 0.25);
			}
			&__home {
				position: absolute;
				display: flex;
				top: rem(20);
				left: 40px;
				padding: grid(0 0.25);
			}
		}
	}
}
</style>
