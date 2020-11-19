<template>
  <button type="button" :disabled="disabled" @click="carousel.scrollToPage(page)">
    <slot />
  </button>
</template>

<script>
export default {
  inject: ["carousel"],
  props: {
    page: { type: Number, required: true }
  },
  computed: {
    disabled() {
      return this.page < 1 || this.page > this.carousel.pages || this.page === this.carousel.page;
    }
  }
};
</script>
