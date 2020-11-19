<template>
  <Carousel v-slot="{ page, pages }">
    <CarouselContent class="scrollContainer">
      <div v-for="index of 5" :key="index" class="item" :style="{ background: `hsl(0, 0%, ${50 + 3 * index}%)` }">{{ index }}</div>
    </CarouselContent>

    <div class="flex">
      <CarouselScrollToPage :page="page - 1" class="mr-a">Prev</CarouselScrollToPage>
      <CarouselScrollToPage v-for="page of pages" :key="page" :page="page">{{ page }}</CarouselScrollToPage>
      <CarouselScrollToPage :page="page + 1" class="ml-a">Next</CarouselScrollToPage>
    </div>
  </Carousel>
</template>

<script>
import Carousel from "./carousel/Carousel.vue";
import CarouselContent from "./carousel/CarouselContent.vue";
import CarouselScrollToPage from "./carousel/CarouselScrollToPage.vue";

export default {
  components: { Carousel, CarouselContent, CarouselScrollToPage }
};
</script>

<style lang="scss">
.item {
  flex-shrink: 0;
  width: 100%;
  height: 100px;
  background: gray;
  scroll-snap-align: start;
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  .item {
    width: 50%;
    scroll-snap-align: none;
    &:nth-child(2n-1) {
      scroll-snap-align: start;
    }
  }
}

@media screen and (min-width: 768px) {
  .item {
    width: 25%;
    scroll-snap-align: none;
    &:nth-child(4n-3) {
      scroll-snap-align: start;
    }
  }
}
</style>
