<script lang="ts" setup>
withDefaults(
  defineProps<{
    loading?: boolean;
    warranties: any;
  }>(),
  {
    loading: true,
    warranties: []
  }
);
</script>

<template>
  <div :class="['thc-warranties', { 'thc-warranties--loading': loading }]">
    <div
      class="thc-warranty--loading"
      v-if="loading"
    >
      <div
        class="thc-warranty"
        v-for="n in 4"
        :key="`loading--${n}`"
      >
        <!-- <ThcSkeleton
          width="40px"
          height="40px"
        />
        <ThcSkeleton
          width="60px"
          height="10px"
          class="spacer"
        /> -->
      </div>
    </div>
    <div
      class="thc-warranty"
      v-for="item in warranties"
      :key="item"
      v-else
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
@use "./ThcWarranties.scss";
</style>
