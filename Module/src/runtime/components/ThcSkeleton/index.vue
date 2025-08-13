<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "default" | "image" | "button" | "title" | "text" | "subtitle";
    variant?:
      | "default"
      | "title"
      | "subtitle"
      | "product"
      | "categories"
      | "product-clothes"
      | "product-selection"
      | "product-compare";
    show?: boolean;
    width?: string;
    height?: string;
  }>(),
  {
    type: "default",
    variant: "default"
  }
);

const localStyles = computed(() => {
  let styles = {};

  if (props.width) {
    styles = { ...styles, width: props.width };
  }

  if (props.height) {
    styles = { ...styles, height: props.height };
  }
  return styles;
});
</script>

<template>
  <div
    :class="['thc-skeleton-shape', `thc-skeleton--${variant}`]"
    v-show="show"
  >
    <!-- Regular -->
    <div
      :class="['thc-skeleton', `thc-skeleton--${type}`]"
      v-if="variant === 'default'"
      :style="localStyles"
    />

    <!-- Type title -->
    <div
      class="thc-skeletons"
      v-if="variant === 'title'"
      :style="localStyles"
    >
      <div class="thc-skeleton thc-skeleton-title"></div>
    </div>

    <!-- Type Subtitle Structure -->
    <div
      class="thc-skeletons"
      v-if="variant === 'subtitle'"
      :style="localStyles"
    >
      <div class="thc-skeleton thc-skeleton-subtitle"></div>
      <div class="thc-skeleton thc-skeleton-text"></div>
      <div class="thc-skeleton thc-skeleton-text"></div>
    </div>

    <!-- Type Product Structure -->
    <div
      class="thc-skeletons"
      v-if="variant === 'product'"
    >
      <div class="thc-skeletons-card">
        <ThcImage
          :imgSrc="{}"
          class="thc-skeletons-image"
        />
        <div class="thc-skeleton thc-skeleton-text"></div>
      </div>
      <div class="thc-skeleton thc-skeleton-subtitle"></div>
      <div class="thc-skeleton thc-skeleton-text"></div>
    </div>

    <!-- Type Product Clothes Structure -->
    <div
      class="thc-skeletons"
      v-if="variant === 'product-clothes'"
    >
      <div class="thc-skeletons-card">
        <ThcImage
          :imgSrc="{}"
          class="thc-skeletons-image"
        />
        <div class="thc-skeleton thc-skeleton-text"></div>
      </div>
      <div class="thc-skeleton thc-skeleton-subtitle"></div>
      <div class="thc-skeleton thc-skeleton-text"></div>
    </div>

    <!-- Type Categories Structure -->
    <div
      class="thc-skeletons"
      v-if="variant === 'categories'"
    >
      <div class="thc-skeletons-card">
        <div class="thc-skeletons-left">
          <div class="thc-skeleton thc-skeleton-subtitle"></div>
          <div class="thc-skeleton thc-skeleton-text"></div>
        </div>
      </div>
    </div>

    <div
      class="thc-skeletons"
      v-if="variant === 'product-selection'"
    >
      <div class="thc-skeletons-card">
        <figure class="thc-skeletons-img">
          <i class="fas fa-image"></i>
        </figure>
        <div class="thc-skeletons-left">
          <div class="thc-skeleton thc-skeleton-subtitle"></div>
          <div class="thc-skeleton thc-skeleton-text"></div>
        </div>
      </div>
    </div>

    <div
      class="thc-skeletons"
      v-if="variant === 'product-compare'"
    >
      <div class="thc-skeletons-card">
        <figure class="thc-skeletons-img">
          <i class="fas fa-image"></i>
        </figure>
        <div class="thc-skeletons-left">
          <div class="thc-skeleton thc-skeleton-title"></div>
          <div class="thc-skeleton thc-skeleton-subtitle"></div>
          <div class="thc-skeleton thc-skeleton-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcSkeleton.scss" as *;
</style>
