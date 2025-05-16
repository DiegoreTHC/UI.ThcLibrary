<template>
  <div
    class="thc-overlay"
    v-if="open"
    @click="emit('click')"
  />
</template>

<script lang="ts" setup>
defineProps<{
  open: boolean;
}>();

const emit = defineEmits(["click"]);
</script>

<style lang="scss" scoped>
@import "./ThcOverlay.scss";
</style>
