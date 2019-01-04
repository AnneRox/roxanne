<template>
	<section class="work">
		<div class="layout">
			<div class="container__project1">
				<nuxt-link class="button__project" to="/project-page" />
				<h6>Project naam</h6>
			</div>
			<div class="container__project2">
				<nuxt-link class="button__project" to="/project-page" />
				<h6>Project naam</h6>
			</div>
			<div class="container__project3">
				<nuxt-link class="button__project" to="/project-page" />
				<h6>Project naam</h6>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
@import '~tools';
.work {
	padding: grid(2 0);
	.layout {
		display: inline-flex;
		flex-wrap: wrap;
		width: grid(18);
		margin-left: grid(3);
	}
	.container {
		&__project1 {
			h6 {
				border: solid 1px red;
			}
			background-color: grey;
			height: grid(6);
			width: 100%;
			position: relative;
		}
		&__project2 {
			background-color: silver;
			height: grid(6);
			width: 50%;
			position: relative;
		}
		&__project3 {
			background-color: dimgray;
			height: grid(6);
			width: 50%;
			position: relative;
		}
	}
}
</style>




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
