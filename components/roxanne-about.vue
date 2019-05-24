<template>
	<section class="about">
		<div class="about__content">
			<h2>Skills &amp; Tools</h2>
			<p>And I'm always learning more!</p>
			<ul class="about__content--skilss">
				<li class="ps" />
				<li class="ai" />
				<li class="id" />
				<li class="sk" />
				<li class="ab" />
				<li class="zep" />
				<li class="pr" />
				<li class="html" />
				<li class="css" />
				<li class="vue" />
			</ul>
		</div>
</section></template>

<style lang="scss">
@import '~tools';
.about {
	padding: grid(2 0 0 0);
	&__content {
		width: grid(12);
		margin-left: grid(6);

		&--skilss {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			li {
				font-size: 12px;
				font-weight: 500;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: rem(40);
				margin-bottom: rem(40);
				&.ps {
					height: rem(80);
					width: rem(80);
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/ps.png');
				}
				&.ai {
					height: rem(80);
					width: rem(80);
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/ai.png');
				}
				&.id {
					height: rem(80);
					width: rem(80);
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/id.png');
				}
				&.sk {
					height: rem(80);
					width: rem(80);
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/sk.png');
				}
				&.ab {
					height: rem(80);
					width: rem(80);
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/ab.png');
				}
				&.zep {
					height: rem(80);
					width: rem(80);
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/zep.png');
				}
				&.pr {
					height: rem(80);
					width: rem(80);
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/pr.png');
				}
				&.html {
					height: rem(80);
					width: rem(80);
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/html.png');
				}
				&.css {
					height: rem(80);
					width: rem(80);
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/css.png');
				}
				&.vue {
					height: rem(80);
					width: rem(80);
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					background-image: url('~/images/vue.png');
				}
			}
		}
	}
}
</style>
