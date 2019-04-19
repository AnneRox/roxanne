<template>
	<section class="work">
		<div class="layout">
			<div class="layout__textHolder">
				<h2>Work</h2>
				<p>I create designs and animations to explain the static designs.</p>
			</div>
		</div>
		<div class="layout">
			<div class="layout__work ">
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
		&__work {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			.block {
				height: rem(300);
				width: grid(5.5);
				margin-top: grid(1);
				border-radius: 4px;
				position: relative;
				display: flex;
				background-color: white;
				&.animation_1 {
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					// background-image: url('~/images/animation1.gif');
				}
				&.animation_2 {
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-color: pink;
					// background-image: url('~/images/animation1.gif');
				}
				&.animation_3 {
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
