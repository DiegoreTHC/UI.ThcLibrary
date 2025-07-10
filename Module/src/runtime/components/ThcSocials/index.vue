<script lang="ts" setup>
defineProps<{
  socials: any[];
  loading?: boolean;
}>();
</script>

<template>
  <ul class="thc-socials">
    <li
      class="thc-socials-item"
      v-for="social in socials"
      :key="social"
    >
      <ThcSkeleton
        class="thc-socials-item--loading"
        type="default"
        variant="default"
        width="1.5em"
        height="1.5em"
        :show="loading"
      />
      <NuxtLink
        v-if="!loading && social?.link"
        :to="social?.link ? social?.link : '/'"
        class="thc-socials-link"
        target="_blank"
      >
        <i :class="social?.icon" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "./ThcSocials.scss" as *;
</style>
