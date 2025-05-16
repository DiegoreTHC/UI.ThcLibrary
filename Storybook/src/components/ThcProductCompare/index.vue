<script lang="ts" setup>
import type { Product } from "~/src/utils/models";

const props = withDefaults(
  defineProps<{
    loading?: boolean;
    product?: Product;
    mobile?: boolean;
    showHeaders?: boolean;
  }>(),
  {
    loading: false,
    showDetails: false
  }
);

const toggleDetails = ref<boolean>(false);
const isMobile = ref<boolean>(props.mobile);

const updateToggleDetails = () => {
  toggleDetails.value = !toggleDetails.value;
};

const includeTitles = ref<boolean>(props.showHeaders);

const actionsClass = computed(() => {
  const classes = ["thc-compare-actions", "fas"];

  if (toggleDetails.value) classes.push("fa-chevron-down");
  if (!toggleDetails.value) classes.push("fa-chevron-right");

  return classes.join(" ");
});

defineEmits<{
  (event: "click"): void;
  (event: "clickBtn"): void;
}>();
</script>

<template>
  <div :class="['thc-compare', { 'thc-compare--titles': includeTitles }]">
    <ThcCard
      class="thc-compare-titles"
      variant="transparent"
      v-if="includeTitles"
    >
      <div class="thc-compare-similarities-titles">
        <p
          class="thc-compare-similarity thc-compare-similarity-name"
          v-for="item in product?.similarities"
          :key="item.similarity"
        >
          {{ item.similarity }}
        </p>
      </div>
    </ThcCard>
    <ThcCard
      class="thc-compare-data"
      variant="transparent"
    >
      <ThcImage
        class="thc-compare-image"
        :img-src="props.product?.media?.sizes"
        :alt="props.product?.media?.alt"
      />
      <div class="thc-compare-info">
        <div class="thc-compare-info-top">
          <ThcRatings
            :rating="product?.rating"
            :totalRatings="product?.totalRatings"
            showData
          />
          <p class="thc-sku">{{ product?.sku }}</p>
        </div>
        <ThcTitle
          class="thc-compare-title"
          :title="product?.['product-name']"
          type="h4"
          :highlight-words="2"
        />
        <ThcPrice
          :price="product?.price"
          variant="dark"
        />
      </div>
      <nav class="thc-compare-mobile-nav">
        <i
          :class="actionsClass"
          @click="updateToggleDetails"
        />
      </nav>
      <div
        v-motion
        v-if="toggleDetails && isMobile"
        :initial="{
          height: 0
        }"
        :enter="{
          height: 200,
          transition: {
            delay: 100,
            type: 'keyframes',
            ease: 'easeInOut',
            duration: 200
          }
        }"
        :leave="{
          height: 1
        }"
        class="thc-compare-mobile-toggle thc-compare-similarities"
      >
        <div
          class="thc-compare-similarities-list"
          v-for="item in product?.similarities"
          :key="item.similarity"
        >
          <p class="thc-compare-similarity thc-compare-similarity-name">{{ item.similarity }}</p>
          <p class="thc-compare-similarity">{{ item["similarity-value"] }}</p>
        </div>
      </div>

      <div
        class="thc-compare-similarities"
        v-if="!isMobile"
      >
        <div
          class="thc-compare-similarities-list"
          v-for="item in product?.similarities"
          :key="item.similarity"
        >
          <p class="thc-compare-similarity thc-compare-similarity-name">{{ item.similarity }}</p>
          <p class="thc-compare-similarity">{{ item["similarity-value"] }}</p>
        </div>
      </div>
    </ThcCard>
  </div>
</template>

<style lang="scss" scoped>
@import "./ThcProductCompare.scss";
</style>
