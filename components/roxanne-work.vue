<template>
	<section class="work">
		<div class="swiper swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="swiper__content">
						<h2>Project naam 1</h2>
						<p>hier iets over het project</p>
						<nuxt-link class="button" to="/project-page">Go to project</nuxt-link>
					</div>
					<div class="swiper__image" />
				</div>
				<div class="swiper-slide">
					<div class="swiper__content">
						<h2>Project naam 2</h2>
						<p>hier iets over het project</p>
					</div>
					<div class="swiper__image" />
				</div>
				<div class="swiper-slide">
					<div class="swiper__content">
						<h2>Project naam 3</h2>
						<p>hier iets over het project</p>
					</div>
					<div class="swiper__image" />
				</div>
				<div class="swiper-slide">
					<div class="swiper__content">
						<h2>Project naam 4</h2>
						<p>hier iets over het project</p>
					</div>
					<div class="swiper__image" />
				</div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination" />
			<!-- Add Arrows -->
			<div class="swiper-button-next">
				<h6>Next</h6>
				<div class="arrow" />
			</div>
			<div class="swiper-button-prev">
				<div class="arrow" />
				<h6>Prev</h6>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
@import '~tools';

.work {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

	.swiper-container {
		width: grid(20);
		height: 80vh;
		padding-top: 50px;
		padding-bottom: 50px;
		.swiper-slide {
			background-color: color(Pink);
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
			.swiper {
				&__content {
					position: absolute;
					left: grid(1.5);
					z-index: 1;
				}
				&__image {
					background-color: silver;
					height: 100%;
					width: 80%;
					display: flex;
					position: absolute;
					right: 0;
				}
			}
		}
		.swiper-pagination {
			bottom: 0px;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.swiper-pagination-bullet {
				height: 4px;
				width: 20px;
				border-radius: 2px;
				background-color: color(Red);
			}
		}
		.swiper-button-next {
			right: auto;
			left: 110px;
		}
		.swiper-button-next,
		.swiper-button-prev {
			background-image: none;
			display: flex;
			align-items: center;
			width: auto;
			top: grid(1);
			h6 {
				margin: 0px;
				display: flex;
				text-transform: uppercase;
				font-size: rem(12);
				letter-spacing: rem(4);
				font-weight: 100;
				line-height: 2;
			}
			.arrow {
				background-color: red;
				display: flex;
				height: 10px;
				width: 10px;
				margin: 0 8px;
			}
		}
	}
}
</style>



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
			slidesPerView: '1',
			spaceBetween: 30,
			loop: true,
			effect: 'fade',
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	}
};
</script>
