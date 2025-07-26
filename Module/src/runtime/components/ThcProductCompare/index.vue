<script lang="ts" setup>
import { computed, ref } from "vue";
import { Product } from "../../utils/models";

const props = withDefaults(
  defineProps<{
    loading?: boolean;
    product?: Product;
    mobile?: boolean;
    showDetails?: boolean;
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

const includeTitles = ref<boolean>(props.showDetails);

const actionsClass = computed(() => {
  const classes = ["thc-compare-actions", "fas"];

  if (toggleDetails.value) classes.push("fa-chevron-down");
  if (!toggleDetails.value) classes.push("fa-chevron-right");

  return classes.join(" ");
});

const onBeforeEnter = (el: Element) => {
  el.style.height = "0";
};

const onEnter = (el: Element) => {
  el.style.display = "block";
  const height = (el as HTMLElement).scrollHeight;
  el.style.transition = "height 0.3s linear";
  el.style.height = height + "px";
};

const onAfterEnter = (el: Element) => {
  el.style.height = "auto";
};

const onBeforeLeave = (el: Element) => {
  el.style.height = (el as HTMLElement).scrollHeight + "px";
  el.style.opacity = "1";
};

const onLeave = (el: Element) => {
  // Force reflow to apply starting height
  void (el as HTMLElement).offsetHeight;
  el.style.transition = "height 0.3s ease, opacity 0.3s ease";
  el.style.height = "0";
};

const onAfterLeave = (el: Element) => {
  el.style.height = "";
};

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
          v-for="item in product?.amenities.list"
          :key="item.title"
        >
          {{ item }}
        </p>
      </div>
    </ThcCard>
    <ThcCard
      class="thc-compare-data"
      variant="transparent"
    >
      <ThcImage
        class="thc-compare-image"
        :img-src="product?.media?.sizes"
        :alt="product?.media?.alt"
      />
      <div class="thc-compare-info">
        <div class="thc-compare-info-top">
          <ThcRatings
            :rating="product?.ratings.rating"
            :totalRatings="product.ratings['total-ratings']"
            showData
          />
          <p class="thc-sku">{{ product?.sku }}</p>
        </div>
        <ThcTitle
          class="thc-compare-title"
          :title="product?.name"
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
      <transition
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
      >
        <div
          v-if="isMobile"
          v-show="toggleDetails"
          class="thc-compare-mobile-toggle thc-compare-similarities"
        >
          <div
            class="thc-compare-similarities-list"
            v-for="(item, index) in product?.amenities.values"
            :key="item"
          >
            <p class="thc-compare-similarity">{{ product?.amenities.list[index] }}</p>
            <i
              v-if="typeof item === `boolean`"
              :class="['fas', { 'fa-clipboard-check': item }, { 'fa-clipboard': !item }]"
            />
            <p
              v-if="typeof item !== 'boolean'"
              class="thc-compare-similarity thc-compare-similarity-name"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </transition>
      <div
        class="thc-compare-similarities"
        v-if="!isMobile"
      >
        <div
          class="thc-compare-similarities-list"
          v-for="item in product?.amenities.values"
          :key="item.similarity"
        >
          <i
            v-if="typeof item === `boolean`"
            :class="['fas', { 'fa-clipboard-check': item }, { 'fa-clipboard': !item }]"
          />
          <p
            v-if="typeof item !== 'boolean'"
            class="thc-compare-similarity thc-compare-similarity-name"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </ThcCard>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcProductCompare.scss" as *;
</style>
