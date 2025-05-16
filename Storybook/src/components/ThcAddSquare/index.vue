<template>
  <div
    class="thc-add thc-add-square"
    @click="emit('click')"
  >
    {{ add }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  add?: any;
}>();

const emit = defineEmits(["click"]);
</script>

<style lang="scss" scoped>
@import "./ThcAddSquare.scss";
</style>
