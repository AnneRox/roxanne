<template>
	<section class="work">
		<h5>Recent work</h5>
		<div class="project row">
			<div class="project__tile project__tile--kalkhoff">
				<p>Kalkhoff navigation animation</p>
				<p class="credits">© Matise</p>
			</div>
			<div class="project__tile project__tile--mth">
				<p>mth fluid website design</p>
				<p class="credits">© Matise</p>
			</div>
			<div class="project__tile project__tile--jan">
				<p>JAN fluid redesign</p>
				<p class="credits">© Matise</p>
			</div>
			<div class="project__tile project__tile--kalkhoff-2">
				<p>Kalkhoff responsive navigation</p>
				<p class="credits">© Matise</p>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
@import '~tools';
.work {
	background-color: color(DarkBlue);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: grid(2 1 0);
	@media #{$medium-down} {
		padding: grid(2 2 0);
	}
	@media #{$small-only} {
		padding: 2rem 1rem;
	}
	h5 {
		padding-bottom: 4rem;
		@media #{$medium-down} {
			padding-bottom: 2rem;
		}
	}
	.project {
		display: flex;
		justify-content: space-between;
		p {
			color: color(DarkBlue);
			font-size: rem(12);
			line-height: 24px;
			font-weight: 500;
			&.credits {
				color: color(DarkBlue, 0.5);
				font-weight: 700;
				position: absolute;
				bottom: 1.5rem;
			}
		}
		&__tile {
			border-radius: 4px;
			-webkit-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
			-moz-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
			box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
			padding: 1.5rem;
			position: relative;
			width: grid(10.8);
			height: grid(8);
			margin-bottom: 2rem;
			display: inline-flex;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			@media #{$medium-down} {
				width: grid(20);
				height: 70vw;
			}
			@media #{$small-only} {
				width: 100%;
				height: 80vw;
				margin-bottom: 1rem;
			}
			&--kalkhoff {
				background-image: url('~/images/img_KalkhofffNav.png');
			}
			&--kalkhoff-2 {
				background-image: url('~/images/img_KalkhofffNav2.png');
			}
			&--mth {
				background-image: url('~/images/img_mthHome.png');
			}
			&--jan {
				background-image: url('~/images/img_JanHome.png');
			}
		}
	}
}
</style>
