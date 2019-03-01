<template>
	<header id="header" class="header">
		<div class="label">
			<p>Wip</p>
		</div>
		<div class="content">
			<div class="hello" />
			<h5>Roxanne </h5>
		</div>
	</header>
</template>


<style lang="scss">
@import '~tools';

#header {
	position: relative;
	top: rem(100);
	left: rem(100);
	.label {
		position: absolute;
		top: rem(-80);
		left: rem(-80);
		p {
			background-color: color(Red);
			font-size: rem(12);
			font-weight: 500;
			text-transform: uppercase;
			padding: rem(5 10);
			border-radius: 2px;
			color: color(White);
		}
	}
	&.header {
		.content {
			position: absolute;
			display: flex;
			cursor: pointer;
			.hello {
				transition: ease 0.2s;
				height: 40px;
				width: 40px;
				margin-right: rem(10);
				background-image: url('~/images/hello.png');
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
			}
			h5 {
				margin: 0;
			}
			&:hover {
				.hello {
					transform: rotate(40deg);
					transition: ease 0.2s;
				}
			}
		}
	}
}
</style>


<script>
</script>
