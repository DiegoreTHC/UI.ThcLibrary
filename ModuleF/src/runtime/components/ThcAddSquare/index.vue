<script lang="ts" setup>
const emit = defineEmits(["click"]);
</script>

<template>
  <div class="thc-add thc-add-square" @click="emit('click')">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcAddSquare.scss" as *;
</style>
