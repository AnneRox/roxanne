<template>
	<section class="intro">
		<div class="row center">
			<div class="column small-full medium-20 large-10 intro__content">
				<h1>Digital Designer and Web Developer</h1>
				<p>Currently working at
					<a class="text__link matiseLogo" target="_blank" href="http://www.matise.nl"><span>Matise</span></a> located in Amsterdam.
					I have a background in graphic design but my strength lies in branded digital design.</p>
				<a class="button button__white button__icon--eyes" target="_blank" href="https://dribbble.com/AnneRox">
					<span class="textlink__text">Dribble</span>
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
@import '~tools';
section.intro {
	background-color: color(DarkBlue);
	display: flex;
	.intro {
		&__content {
			padding: grid(3.5 0);
			@media #{$medium-down} {
				padding: grid(4 2);
			}
			@media #{$small-only} {
				padding: 6rem 2rem 4rem 2rem;
			}
			p {
				padding-right: grid(3);
				@media #{$small-only} {
					padding-right: 0;
				}
			}
			a {
				&.text__link {
					color: color(White);
					font-size: 1rem;
					line-height: 23px;
					text-decoration: none;
					position: relative;
					display: inline-block;
					&:before {
						content: '';
						height: 2px;
						width: 20%;
						background-color: color(NeonBlue);
						position: absolute;
						display: flex;
						bottom: 2px;
						transition: ease 0.3s;
					}
					&:hover {
						&:before {
							width: 100%;
							transition: ease 0.3s;
						}
						&.matiseLogo {
							&:after {
								transform: translate(-50%, -50%) scale(1);
								transition: ease 0.3s;
							}
						}
					}
					&.matiseLogo {
						position: relative;
						span {
							position: relative;
						}
						&:after {
							content: '';
							display: flex;
							height: 4rem;
							width: 4rem;
							transform: translate(-50%, -50%) scale(0);
							transition: ease 0.3s;
							left: 50%;
							top: 50%;
							position: absolute;
							background-image: url('~/images/matise.png');
							background-repeat: no-repeat;
							background-position: center;
							background-size: contain;
							@media #{$medium-down} {
								display: none;
							}
						}
					}
				}
			}
		}
	}
}
</style>
