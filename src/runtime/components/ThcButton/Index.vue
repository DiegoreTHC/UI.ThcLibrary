<template>
  <button class="ui-button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ui-button {
  background-color: var(--primary-color);
  color: white;
  font-size: var(--font-size-base);
  padding: 0.5em 1em;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
}
</style>
