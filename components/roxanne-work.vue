<template>
	<section class="work">
		<div class="layout">
			<div class="container scholtens">
				<div class="container__image scholtens" />
				<div class="container__textHolder">
					<h6>Scholtens werkplek</h6>
					<p>In opdracht van matise heb ik een design gemaakt voor de webshop scholtenswerkplek.nl</p>
				</div>
			</div>
			<div class="container">
				<div class="containter__image" />
				<div class="container__textHolder">
					<h6>Wereldvrede</h6>
					<p>In opdracht van matise heb ik een geholpen met het design voor wereldvrede website en popup winkel</p>
				</div>
			</div>
			<div class="container">
				<div class="containter__image" />
				<div class="container__textHolder">
					<h6>Ticket Chaser</h6>
					<p>In opdracht van matise heb ik een geholpen met het design voor wereldvrede website en popup winkel</p>
				</div>
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
		width: grid(8);
		margin: grid(0.5);
		position: relative;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		&__textHolder {
			padding: grid(0.5);
		}
		&__image {
			&.scholtens {
				height: grid(6);
				width: 100%;
				position: relative;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				background-image: url('~/images/Scholtens.png');
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
