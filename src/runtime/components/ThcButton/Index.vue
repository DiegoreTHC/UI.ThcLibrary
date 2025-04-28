<template>
  <button class="ui-button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ui-button {
  background-color: var(--color-primary);
  font-size: var(--font-size-units);
  padding: 0.5em 1em;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
}
</style>
