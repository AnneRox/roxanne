<template>
	<header id="header" class="header">
		<div class="header__FixedContainer">
			<h1 class="small"><a target="_blank" href="https://www.linkedin.com/in/roxannevandenaakster/">
				<span>Roxanne van den Aakster</span>
				<span class="HideAndSeek">LinkedIn</span>
			</a></h1>
		</div>
	</header>
</template>


<style lang="scss">
@import '~tools';

#header {
	position: relative;
	margin: grid(0 7);
	@media #{$medium-down} {
		margin: grid(0 4);
	}
	@media #{$small-only} {
		margin: 0rem 2rem;
	}
	.header {
		&__FixedContainer {
			position: absolute;
			margin-top: 4rem;
			@media #{$small-only} {
				margin-top: 2rem;
			}
			a {
				text-decoration: none;
				position: relative;
			}
			h1 {
				display: flex;
				align-items: baseline;
				cursor: pointer;
				position: relative;
				&:before {
					content: '';
					display: inline-flex;
					height: 1.5rem;
					width: 1.5rem;
					margin-right: 0.375rem;
					background-image: url('~/images/icon_hi.png');
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
					z-index: 1;
				}
				span {
					z-index: 1;
					&.HideAndSeek {
						opacity: 0;
						position: absolute;
						left: 0px;
						top: 0px;
					}
				}
				&:after {
					position: absolute;
					content: '';
					display: flex;
					height: 8rem;
					width: 8rem;
					border-radius: 50%;
					left: -3rem;
					top: -2rem;
					transform: scale(0);
					transition: ease 0.3s;
					background-image: url('~/images/img_rox.png');
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
					@media #{$medium-down} {
						display: none;
					}
				}
				&:hover {
					&:before {
						background-image: url('~/images/icon_laptop.png');
					}
					&:after {
						transform: scale(1);
						left: -9rem;
						transition: ease 0.3s;
					}
					span {
						opacity: 0;
					}
					span.HideAndSeek {
						opacity: 1;
					}
				}
			}
		}
	}
}
</style>

<script>
</script>
