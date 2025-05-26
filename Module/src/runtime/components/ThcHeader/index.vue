<script lang="ts" setup>
defineProps<{
  isMobile: boolean;
  loading: boolean;
}>();
</script>

<template>
  <header class="thc-header">
    <ThcLogo
      variant="primary"
      mode="responsive"
      :loading="loading"
      :mobile="isMobile"
    />
    <nav class="thc-header-nav">
      <slot />
    </nav>
  </header>
</template>
