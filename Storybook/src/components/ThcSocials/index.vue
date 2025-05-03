<template>
  <ul
    class="thc-socials"
    v-if="loading"
  >
    <li
      class="thc-socials-item thc-socials-item--loading"
      v-for="n in 4"
      :key="n"
    >
      <ThcSkeleton type="image" />
    </li>
  </ul>
  <ul
    class="thc-socials"
    v-else
  >
    <li
      class="thc-socials-item"
      v-for="social in socials"
      :key="social"
    >
      <NuxtLink
        :to="social?.link"
        class="thc-socials-link"
        target="_blank"
      >
        <i :class="social?.icon" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{
  socials: any[];
  loading?: boolean;
}>();
</script>
