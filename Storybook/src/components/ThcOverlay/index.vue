<template>
  <div class="thc-overlay" v-if="openMenu" @click="openMenu = !openMenu"/>
</template>

<script lang="ts" setup>
const uiStore = useUiStore();

const {
  openMenu
} = storeToRefs(uiStore);
</script>

<style lang="scss" scoped>
@import "./ThcOverlay.scss";
</style>
