<template>
	<div>
		<slot :page="page" :pages="pages" />
	</div>
</template>

<script>
import clamp from "lodash/clamp";

export default {
	provide() {
		return { carousel: this };
	},
	data: () => ({
		width: 0,
		pageWidth: 0,
		offset: 0
	}),
	computed: {
		pages() {
			return Math.ceil(this.width / this.pageWidth) || 0;
		},
		page() {
			return this.offset + this.pageWidth >= this.width
				? this.pages
				: Math.round((100 * this.offset) / this.pageWidth) / 100 + 1;
		},
		isNext() {
			return this.offset + this.pageWidth < this.width;
		},
		isPrev() {
			return this.offset > 0;
		}
	},
	methods: {
		init(width, pageWidth, offset) {
			this.width = width;
			this.pageWidth = pageWidth;
			this.scrollUpdate(offset);
		},
		scrollUpdate(offset) {
			this.offset = offset;
		},
		scrollToPage(page) {
			this.$emit('scrollTo', (clamp(this.pages, 1, page) - 1) * this.pageWidth);
		},
		next() {
			this.$emit('next');
		},
		prev() {
			this.$emit('prev');
		}
	}
};
</script>
