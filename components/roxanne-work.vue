<template>
	<section class="work">
		<div class="layout">
			<div class="layout__textHolder">
				<h2>Clever animations</h2>
				<p>I create animations to explain static designs and micro interactions</p>
			</div>
		</div>
		<div class="layout">
			<div class="layout__work row">
				<div class="block animation_1" />
				<div class="block animation_2" />
				<div class="block animation_3" />
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
		width: grid(12);
		margin-left: grid(6);
		padding: grid(0.5 0);
		&__work {
			display: flex;
			justify-content: space-between;
			.block {
				height: rem(300);
				width: rem(400);
				border-radius: 4px;
				position: relative;
				display: flex;
				&.animation_1 {
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/animation1.gif');
				}
				&.animation_2 {
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-color: pink;
					// background-image: url('~/images/animation1.gif');
				}
				&.animation_3 {
					margin-top: 40px;
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-color: teal;
					// background-image: url('~/images/animation1.gif');
				}
			}
		}
	}
}
</style>
