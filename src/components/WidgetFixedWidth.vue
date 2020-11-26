<template>
	<Carousel>
		<CarouselContent>
			<div v-for="index of 17" :key="index" class="item-2" :style="{ background: `hsl(0, 0%, ${50 + 3 * index}%)` }">{{ index }}</div>
		</CarouselContent>

		<div class="flex">
			<CarouselPrev class="mr-a">Prev</CarouselPrev>
			<CarouselNext class="ml-a">Next</CarouselNext>
		</div>
	</Carousel>
</template>

<script>
import Carousel from "./carousel/Carousel.vue";
import CarouselContent from "./carousel/CarouselContent.vue";
import CarouselPrev from "./carousel/CarouselPrev.vue";
import CarouselNext from "./carousel/CarouselNext.vue";

export default {
	components: { Carousel, CarouselContent, CarouselPrev, CarouselNext }
};
</script>

<style lang="scss">
.item-2 {
	flex-shrink: 0;
	width: 150px;
	height: 50px;
	background: gray;
	scroll-snap-align: start;
}
</style>
