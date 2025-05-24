<template>
  <div
    :class="['thc-hamburger', { 'thc-hamburger--close': open }]"
    @click="emit('click')"
  >
    <span v-if="!loading">
      <span class="fas fa-xmark" v-if="open"></span>
      <span class="thc-hamburger-lines" v-else></span>
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  loading?: boolean;
  open: boolean;
}>();

const emit = defineEmits(["click"]);
</script>

<style lang="scss" scoped>
@use "./ThcHamburger.scss" as *;
</style>
