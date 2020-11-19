<template>
  <Carousel>
    <CarouselContent class="scrollContainer">
      <div
				v-for="index of 20"
				:key="index"
				class="item-3"
				:style="{
					background: `hsl(0, 0%, ${50 + 3 * index}%)`,
					width: `${Math.floor(Math.random() * (200 - 60 + 1)) + 60}px`
				}"
			>{{ index }}</div>
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
  components: { Carousel, CarouselContent, CarouselPrev, CarouselNext },
	computed: {
		width: () => {
			const widthArray = [];
			for(let i = 0, l = 20; i < l; i++) {
				widthArray.push(Math.floor(Math.random() * (120 - 60 + 1)) + 60);
			}
			return widthArray;
		}
	},
};
</script>

<style lang="scss">
.item-3 {
  flex-shrink: 0;
  height: 50px;
  background: gray;
  scroll-snap-align: start;
}
</style>
