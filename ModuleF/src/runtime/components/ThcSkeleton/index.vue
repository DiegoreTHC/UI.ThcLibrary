<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type?: "default" | "image" | "button" | "title" | "text";
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
    :class="['thc-skeleton', `thc-skeleton--${props.type}`]"
    :style="localStyles"
  ></div>
</template>

<style lang="scss" scoped>
@use "./ThcSkeleton.scss" as *;
</style>
