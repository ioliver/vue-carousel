<template>
	<div id="app">
		<h3>Pages</h3>
		<WidgetPages />
		<br />
		<h3>Fixed width (200px)</h3>
		<WidgetFixedWidth />
		<br />
		<h3>Intrinsic width</h3>
		<WidgetIntrinsicWidth />
		<br />
		<h3>Vertical</h3>
		<WidgetVertical />
		<br />
		<br />
	</div>
</template>

<script>
import WidgetPages from './components/WidgetPages';
import WidgetFixedWidth from './components/WidgetFixedWidth';
import WidgetIntrinsicWidth from './components/WidgetIntrinsicWidth';
import WidgetVertical from './components/WidgetVertical';

export default {
	name: 'App',
	components: {
		WidgetPages,
		WidgetFixedWidth,
		WidgetIntrinsicWidth,
		WidgetVertical,
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.scrollContainer {
	display: flex;
	overflow-x: auto;
	scroll-snap-type: x mandatory;

	&--noBar {
		overflow: -moz-scrollbars-none;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
}

.flex {
	display: flex;
}

.ml-a {
	margin-left: auto;
}

.mr-a {
	margin-right: auto;
}
</style>
