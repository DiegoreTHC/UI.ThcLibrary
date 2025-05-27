<script lang="ts" setup>
defineProps<{
  loading: boolean;
}>();
</script>

<template>
  <header class="thc-header">
    <div class="thc-header-logo">
      <slot name="logo" />
    </div>
    <nav class="thc-header-nav">
      <slot />
    </nav>
  </header>
</template>
