<template>
  <div :class="ratingsClass">
    <span
      class="thc-ratings-text thr-ratings-eval"
      v-if="showData"
    >
      {{ rating }}
    </span>
    <div class="thc-ratings-stars">
      <span
        v-for="n in fullStars"
        :key="'full-' + n"
        class="thc-star fam-weed-full"
      />
      <span
        v-if="hasPartialStar"
        class="thc-star thc-star--partial fam-weed-half"
      />
      <div
        v-if="emptyStars > 0"
        class="thc-ratings-stars"
      >
        <span
          v-for="n in emptyStars"
          :key="'empty-' + n"
          class="thc-star fam-weed-outline"
        />
      </div>
    </div>
    <span
      class="thc-ratings-text thr-ratings-count"
      v-if="showData"
    >
      {{ totalRanksCount }}
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    rating?: number;
    maxStars?: number;
    showData?: boolean;
    totalRatings?: number;
  }>(),
  {
    rating: 3,
    maxStars: 5,
    showData: false,
    totalRatings: 0
  }
);

const fullStars = computed(() => Math.floor(props.rating));
const hasPartialStar = computed(() => props.rating % 1 !== 0);
const emptyStars = computed(() => props.maxStars - Math.ceil(props.rating));

const totalRanksCount = computed(() => {
  if (props.totalRatings === 0) {
    return "(No Ratings)";
  }

  return `(${props.totalRatings})`;
});

const ratingsClass = computed(() => {
  const classes = ["thc-ratings"];
  if (props.showData) classes.push("thc-ratings--with-data");

  return classes.join(" ");
});
</script>

<style lang="scss" scoped>
@use "./ThcRatings.scss" as *;
</style>
