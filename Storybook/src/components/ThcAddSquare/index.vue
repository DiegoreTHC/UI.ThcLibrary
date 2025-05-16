<template>
  <div
    class="thc-add thc-add-square"
    @click="emit('click')"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["click"]);
</script>

<style lang="scss" scoped>
@import "./ThcAddSquare.scss";
</style>
