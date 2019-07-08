<template>
	<section class="work">
		<div class="layout">
			<div class="row center">
				<h2>Work</h2>
				<div class="column large-full layout__blocks">
					<div class="block__small animation_1" />
					<div class="block__medium mth" />
					<div class="block__medium BBB_kalkhoff_loader" />
					<div class="block__small ScholtensWerkplek" />
				</div>
			</h2></div>
	</div></section>
</template>

<style lang="scss">
@import '~tools';
.work {
	background-color: color(Grey);
	.layout {
		padding: grid(2 0 2 0);
		&__blocks {
			padding-top: grid(1);
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			z-index: 1;
			.block {
				&__small,
				&__medium,
				&__full {
					box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.4);
				}
				&__small {
					height: grid(8);
					width: grid(6.5);
					margin: grid(0.5);
					@media #{$small-only} {
						height: grid(20);
						width: grid(20);
						margin: grid(1 0.5);
					}
					&.animation_1 {
						background-position: center;
						background-repeat: no-repeat;
						background-size: cover;
						background-image: url('~/images/micro.gif');
					}
					&.ScholtensWerkplek {
						background-position: center;
						background-repeat: no-repeat;
						background-size: cover;
						background-image: url('~/images/ScholtensWerkplek.png');
					}
				}
				&__medium {
					height: grid(8);
					width: grid(14);
					margin: grid(0.5);
					@media #{$small-only} {
						height: grid(20);
						width: grid(20);
						margin: grid(1 0.5);
					}
					&.BBB_kalkhoff_loader {
						background-position: center;
						background-repeat: no-repeat;
						background-size: cover;
						background-image: url('~/images/BBB+kalkhoff_loader.gif');
					}
					&.mth {
						background-position: center;
						background-repeat: no-repeat;
						background-size: cover;
						background-image: url('~/images/mth.png');
					}
				}
				&__full {
					height: grid(10);
					width: grid(21.5);
					margin: grid(0.5);
				}
			}
		}
	}
}
// .work {
// 	padding: grid(2 0);
// 	padding: grid(2.5 0 2 0);
// 	.layout {
// 		&__textHolder {
// 			width: grid(12);
// 			margin-left: grid(6);
// 		}
// 		&__work {
// 			width: grid(20);
// 			display: flex;
// 			flex-direction: row;
// 			flex-wrap: wrap;
// 			justify-content: space-between;
// 			margin-left: grid(2);
// 			.block {
// 				height: rem(300);
// 				width: grid(6);
// 				margin-top: grid(1);
// 				border-radius: 4px;
// 				position: relative;
// 				display: flex;
// 				background-color: white;
// 				&.animation_1 {
// 					background-position: center;
// 					background-repeat: no-repeat;
// 					background-size: cover;
// 					background-image: url('~/images/micro.gif');
// 				}
// 				&.animation_2 {
// 					background-position: center;
// 					background-repeat: no-repeat;
// 					background-size: cover;
// 					background-image: url('~/images/button_hover.gif');
// 				}
// 				&.animation_3 {
// 					background-position: center;
// 					background-repeat: no-repeat;
// 					background-size: cover;
// 					background-image: url('~/images/bike_loader.gif');
// 				}
// 				&.animation_4 {
// 					background-position: center;
// 					background-repeat: no-repeat;
// 					background-size: cover;
// 					background-image: url('~/images/pomp_loader.gif');
// 				}
// 			}
// 		}
// 	}
// }
</style>
