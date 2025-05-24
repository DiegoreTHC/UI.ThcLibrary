<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    loading?: boolean;
    label: string;
    name?: string;
  }>(),
  {
    loading: true,
    label: "Label"
  }
);
</script>

<template>
  <label
    class="thc-label"
    :for="name"
  >
    {{ label }}
  </label>
</template>

<style lang="scss" scoped>
@use "./ThcLabel.scss" as *;
</style>
