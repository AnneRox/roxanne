<template>
	<section class="work">
		<div class="row work__content">
			<h2>Work</h2>
		</div>
		<div class="layout">
			<!-- <div class="container scholtens">
				<div class="container__image scholtens" />
				<div class="container__textHolder">
					<h6>Scholtens werkplek</h6>
					<p>In opdracht van matise heb ik een design gemaakt voor de webshop scholtenswerkplek.nl</p>
				</div>
			</div> -->
			<!-- <div class="container">
				<div class="containter__image" />
				<div class="container__textHolder">
					<h6>Wereldvrede</h6>
					<p>In opdracht van matise heb ik een geholpen met het design voor wereldvrede website en popup winkel</p>
				</div>
			</div> -->
			<!-- <div class="container">
				<div class="containter__image" />
				<div class="container__textHolder">
					<h6>Ticket Chaser</h6>
					<p>In opdracht van matise heb ik een geholpen met het design voor wereldvrede website en popup winkel</p>
				</div>
			</div> -->
		</div>
	</section>
</template>

<style lang="scss">
@import '~tools';
.work {
	padding: grid(2 0);
	padding: grid(2.5 0 2 0);
	&__content {
		width: grid(12);
		margin-left: grid(6);
		padding: grid(0.5 0);
	}
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
