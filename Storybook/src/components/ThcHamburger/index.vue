<template>
  <div :class="[
      'thc-hamburger',
      { 'thc-hamburger--close': openMenu }
    ]"
    @click="openMenu = !openMenu"
  >
    <ThcSkeleton width="16px" height="16px" v-if="props.loading"/>
    <span v-if="!props.loading">
      <span class="fas fa-xmark" v-if="openMenu"></span>
      <span class="thc-hamburger-lines" v-else></span>
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  loading?: boolean
}>();
const uiStore = useUiStore();

const {
  openMenu
} = storeToRefs(uiStore);
</script>

<style lang="scss" scoped>
@import "./ThcHamburger.scss";
</style>
