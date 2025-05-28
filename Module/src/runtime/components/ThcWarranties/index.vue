<script lang="ts" setup>
withDefaults(
  defineProps<{
    loading?: boolean;
    warranties: any;
  }>(),
  {
    warranties: []
  }
);
</script>

<template>
  <div :class="['thc-warranties']">
    <div
      class="thc-warranty"
      v-for="item in warranties"
      :key="item"
    >
      <ThcImage
        class="thc-warranty-media"
        :imgSrc="item.media.sizes"
        :alt="item.media.alt"
      />
      <p class="thc-warranty-text">{{ item.title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcWarranties.scss" as *;
</style>
