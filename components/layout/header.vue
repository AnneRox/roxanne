<template>
	<header id="header" class="header">
		<div class="header__img" />
		<div class="header__name">
			<p>Roxanne van den Aakster</p>
		</div>
	</header>
</template>


<style lang="scss">
@import '~tools';

#header {
	position: fixed;
	display: flex;
	transition: 0.3s ease;
	&:hover {
		.header__img {
			transform: scale(1.1);
			transition: 0.3s ease;
		}
		.header__name {
			opacity: 1;
			transition: 0.3s ease;
		}
	}
	.header {
		&__img {
			height: rem(100);
			width: rem(100);
			background-image: url('~/images/Rox.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			transition: 0.3s ease;
		}
		&__name {
			padding: rem(20);
			display: flex;
			align-items: center;
			opacity: 0.2;
			transition: 0.3s ease;
			p {
				font-size: rem(14);
			}
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
