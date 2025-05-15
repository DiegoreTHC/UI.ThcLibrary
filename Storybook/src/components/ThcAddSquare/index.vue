<template>
  <div class="thc-add thc-add-square">
    {{ add }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  add?: any;
}>();
</script>

<style lang="scss" scoped>
// @import "./ThcAddSquare.scss";
</style>
