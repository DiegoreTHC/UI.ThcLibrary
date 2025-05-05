<script lang="ts" setup></script>

<template>
  <header class="thc-header">
    <ThcLogo
      variant="primary"
      mode="full"
    />
    <nav class="">
      <slot />
      <div class="thc-header-hamburger"></div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
