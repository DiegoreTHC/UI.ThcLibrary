<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    colors: string[];
  }>(),
  {}
);
const emit = defineEmits(["clickOnColor"]);

const clickOnColor = (color: string, index: number) => {
  emit("clickOnColor", color);
};
</script>

<template>
  <div class="thc-cSwitch">
    <p class="thc-text">
      {{ colors.length > 1 ? "Colores" : "1 Color disponible" }}
    </p>
    <ul class="thc-cSwitch-list">
      <li
        class="thc-cSwitch-item"
        :key="`color-${color}`"
        v-for="(color, index) in colors"
        @click="clickOnColor(color, index)"
        :style="{
          color: color
        }"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcColorsSelector.scss" as *;
</style>
