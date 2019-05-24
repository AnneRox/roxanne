<template>
	<section class="work">
		<div class="layout">
			<div class="layout__textHolder">
				<h2>Work</h2>
			</div>
		</div>
		<div class="layout">
			<div class="layout__work ">
				<div class="block animation_1" />
				<div class="block animation_2" />
				<div class="block animation_3" />
				<div class="block animation_4" />
			</div>
		</div>
	</section>
</template>

<style lang="scss">
@import '~tools';
.work {
	padding: grid(2 0);
	padding: grid(2.5 0 2 0);
	.layout {
		&__textHolder {
			width: grid(12);
			margin-left: grid(6);
		}
		&__work {
			width: grid(20);
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-left: grid(2);
			.block {
				height: rem(300);
				width: grid(6);
				margin-top: grid(1);
				border-radius: 4px;
				position: relative;
				display: flex;
				background-color: white;
				&.animation_1 {
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
					background-image: url('~/images/micro.gif');
				}
				&.animation_2 {
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
					background-image: url('~/images/button_hover.gif');
				}
				&.animation_3 {
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
					background-image: url('~/images/bike_loader.gif');
				}
				&.animation_4 {
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
					background-image: url('~/images/pomp_loader.gif');
				}
			}
		}
	}
}
</style>
