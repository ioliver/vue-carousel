<template>
	<div class="vertical-container">
		<Carousel v-slot="{ page, pages }">
			<CarouselContent class="scrollContainer">
				<div
					v-for="(chunk, chunkIndex) of chunkedItems"
					:key="chunkIndex"
					class="chunk"
				>
					<div
						v-for="(item, index) of chunk"
						:key="index"
						:style="{ background: `hsl(0, 0%, ${50 + 3 * index}%)` }"
						class="item-4"
					>
						{{ item }}
					</div>
				</div>
			</CarouselContent>

			<div class="flex">
				<CarouselScrollToPage :page="page - 1" class="mr-a">Prev</CarouselScrollToPage>
				<CarouselScrollToPage v-for="page of pages" :key="page" :page="page">{{ page }}</CarouselScrollToPage>
				<CarouselScrollToPage :page="page + 1" class="ml-a">Next</CarouselScrollToPage>
			</div>
		</Carousel>
	</div>
</template>

<script>
import Carousel from "./carousel/Carousel.vue";
import CarouselContent from "./carousel/CarouselContent.vue";
import CarouselScrollToPage from "./carousel/CarouselScrollToPage.vue";

import chunk from 'lodash/chunk';

const itemsArray = [...Array(10)].map((item, i) => i + 1);

export default {
	components: { Carousel, CarouselContent, CarouselScrollToPage },
	computed: {
		chunkedItems: () => {
			return chunk(itemsArray, 4);
		}
	}
};
</script>

<style lang="scss">
.item-4 {
  flex-shrink: 0;
  width: 100%;
  height: 100px;
  background: gray;
  scroll-snap-align: start;
}

.vertical-container{
	width: 250px;
	margin: 0 auto;
}

.chunk{
	width: 100%;
	flex-shrink: 0;
}
</style>
