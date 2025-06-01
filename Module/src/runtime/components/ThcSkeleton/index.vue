<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "default" | "image" | "button" | "title" | "text";
    variant?: "default" | "title" | "subtitle" | "product" | "product-clothes" | "categories";
    show?: boolean;
    width?: string;
    height?: string;
  }>(),
  {
    type: "default"
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
    <div
      :class="['thc-skeleton', `thc-skeleton--${type}`]"
      v-if="variant === 'default'"
      :style="localStyles"
    ></div>
    <div
      class="thc-skeletons"
      v-if="variant === 'title'"
      :style="localStyles"
    >
      <div class="thc-skeleton thc-skeleton-title"></div>
    </div>
    <div
      class="thc-skeletons"
      v-if="variant === 'subtitle'"
      :style="localStyles"
    >
      <div class="thc-skeleton thc-skeleton-subtitle"></div>
      <div class="thc-skeleton thc-skeleton-text"></div>
      <div class="thc-skeleton thc-skeleton-text"></div>
    </div>
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
    <div
      class="thc-skeletons"
      v-if="variant === 'categories'"
    >
      <div class="thc-skeletons-card">
        <ThcImage
          :imgSrc="{}"
          class="thc-skeletons-image"
        />
        <div class="thc-skeletons-left">
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
