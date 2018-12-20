<template>
	<section class="work">
		<div class="swiper swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Project 1</div>
				<div class="swiper-slide">Project 2</div>
				<div class="swiper-slide">Project 3</div>
				<div class="swiper-slide">Project 4</div>
				<div class="swiper-slide">Project 5</div>
				<div class="swiper-slide">Project 6</div>
				<div class="swiper-slide">Project 7</div>
				<div class="swiper-slide">Project 8</div>
				<div class="swiper-slide">Project 9</div>
				<div class="swiper-slide">Project 10</div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination" />
			<!-- Add Arrows -->
			<div class="swiper-button-next" />
			<div class="swiper-button-prev" />
		</div>
	</section>
</template>


<script>
const Swiper = require('swiper');
export default {
	props: {
		products: {
			default: () => [],
			type: Array
		}
	},
	data() {
		return {
			translate: 0
		};
	},
	mounted() {
		this.mySwiper = new Swiper.default('.swiper-container', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				loop: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	}
};
</script>

<style lang="scss">
@import '~tools';

.work {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	.swiper-container {
		border: solid 1px red;
		width: grid(20);
		height: 80vh;
	}
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		border: solid 1px green;
		width: grid(8);
		height: calc(100% - 10px);
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	.swiper-pagination {
		bottom: 0px;
		border: solid 1px blue;
		display: flex;
		justify-content: center;
		align-items: center;
		.swiper-pagination-bullet {
			height: 4px;
			width: 20px;
			border-radius: 2px;
		}
	}
	.swiper-button-next,
	.swiper-button-prev {
		background-color: gold;
	}
}
</style>
