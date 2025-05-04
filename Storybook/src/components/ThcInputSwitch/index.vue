<template>
  <div
    :class="[
      'thc-switch',
      {
        'thc-switch--on': model,
        'thc-switch--off': !model
      }
    ]"
  >
    <input
      class="thc-switch-input"
      :id="id"
      :name="name"
      type="checkbox"
      v-model="model"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  id: string;
}>();
const model = defineModel({ type: [Boolean, String] as PropType<boolean | string | string[]> });
</script>

<style lang="scss" scoped>
@use "./ThcInputSwitch.scss" as *;
</style>
