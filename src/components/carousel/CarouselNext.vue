<template>
	<button type="button" :disabled="!carousel.isNext" @click="carousel.next()">
		<slot />
	</button>
</template>

<script>
export default {
	inject: ["carousel"],
};
</script>
