<template>
	<button type="button" :disabled="!carousel.isPrev" @click="carousel.prev()">
		<slot />
	</button>
</template>

<script>
export default {
	inject: ["carousel"],
};
</script>
