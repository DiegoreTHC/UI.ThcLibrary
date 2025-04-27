<template>
  <label class="ui-checkbox">
    <input
      type="checkbox"
      v-model="model"
    />
    <span><slot /></span>
  </label>
</template>

<script setup lang="ts">
const model = defineModel<boolean>();
</script>

<style lang="scss" scoped>
.ui-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5em;

  input {
    accent-color: $primary-color;
  }
}
</style>
