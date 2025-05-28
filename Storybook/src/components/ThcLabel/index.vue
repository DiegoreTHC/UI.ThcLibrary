<template>
  <label class="thc-label" :for="name">
    {{ label }}
  </label>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  loading?: boolean,
  label: string,
  name?: string
}>(), {
  loading: true,
  label: 'Label',
});
</script>

<style lang="scss" scoped>
@import "./ThcLabel.scss";
</style>