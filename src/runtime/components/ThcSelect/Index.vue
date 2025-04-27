<template>
  <select
    v-model="model"
    class="ui-select"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
defineProps<{ options: string[] }>();
const model = defineModel<string>();
</script>

<style lang="scss" scoped>
.ui-select {
  padding: 0.5em;
  border-radius: $border-radius;
  border: 1px solid #ccc;
  font-size: $font-size-base;
}
</style>
