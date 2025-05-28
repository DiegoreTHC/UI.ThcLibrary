<script lang="ts" setup>
defineProps<{
  open: boolean;
}>();

const emit = defineEmits(["click"]);
</script>

<template>
  <div
    class="thc-overlay"
    v-if="open"
    @click="emit('click')"
  />
</template>

<style lang="scss" scoped>
@use "./ThcOverlay.scss" as *;
</style>
