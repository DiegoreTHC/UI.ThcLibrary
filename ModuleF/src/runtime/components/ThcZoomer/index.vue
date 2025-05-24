<script lang="ts" setup>
import { ZoomImg } from "vue3-zoomer";

defineProps<{
  "zoom-type": string;
  trigger: string;
  src: string;
  scale: number;
}>();
</script>

<template>
  <div class="thc-zoomer">
    <ZoomImg
      class="thc-zoomer-img"
      :zoom-type="[['zoom-type']]"
      :trigger="trigger"
      :src="src"
      :zoom-scale="scale"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcZoomer.scss" as *;
</style>
