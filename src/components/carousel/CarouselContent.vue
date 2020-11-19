<template>
  <div :class="{ 'scrollContainer--noBar': !bar }">
    <slot />
  </div>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  inject: ["carousel"],
  props: {
    bar: { type: Boolean, default: false }
  },
  async mounted() {
    await this.$nextTick();
    this.init();

		const scrollUpdate = debounce(this.scrollUpdate, 50);
		const resizeUpdate = debounce(this.init, 100);
    this.$el.addEventListener("scroll", scrollUpdate);
    window.addEventListener("resize", resizeUpdate);

    this.$once("hook:beforeDestroy", () => {
      this.$el.removeEventListener("scroll", scrollUpdate);
      window.removeEventListener("resize", resizeUpdate);
    });

    this.carousel.$on("scrollTo", this.scrollTo);
		this.carousel.$on("next", this.next);
		this.carousel.$on("prev", this.prev);
  },
  async updated() {
    await this.$nextTick();
    this.init();
  },
  methods: {
    init() {
      this.carousel.init(this.$el.scrollWidth, this.$el.clientWidth, this.$el.scrollLeft);
    },
    scrollUpdate() {
      this.carousel.scrollUpdate(this.$el.scrollLeft);
		},
		scrollTo(offset) {
			this.$el.scrollTo({ left: offset, behavior: "smooth" });
		},
		next() {
			let offset = 0;
			const maxOffset =  this.carousel.offset + this.carousel.pageWidth;
			const items = this.$el.children;

			for(let i = 0, l = items.length; i < l; i++) {
				const itemOffset = offset + items[i].clientWidth;

				if (itemOffset > maxOffset) {
					break;
				}

				offset = itemOffset;
			}

			this.scrollTo(offset);
		},
		prev() {
			let offset = this.carousel.width;
			const minOffset = this.carousel.offset - this.carousel.pageWidth;
			const items = this.$el.children;

			if (minOffset > 0) {
				for(let i = items.length - 1; i > 0; i -= 1) {
					const itemOffset = offset - items[i].clientWidth;

					if (itemOffset < minOffset) {
						break;
					}

					offset = itemOffset;
				}
			} else {
				offset = 0;
			}

			this.scrollTo(offset);
		}
  }
};
</script>
