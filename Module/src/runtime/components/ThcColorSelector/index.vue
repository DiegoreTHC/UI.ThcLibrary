<script lang="ts" setup>
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    colors: string[];
  }>(),
  {}
);
const emit = defineEmits(["clickOnColor"]);

const selectedIndex = ref<number | null>(0);

const clickOnColor = (index: number) => {
  selectedIndex.value = index;
  emit("clickOnColor", index);
};
</script>

<template>
  <div class="thc-cSwitch">
    <p class="thc-text">
      {{ colors.length > 1 ? "Colores" : "1 Color disponible" }}
    </p>
    <ul class="thc-cSwitch-list">
      <li
        :key="`color-${color}`"
        v-for="(color, index) in colors"
        :class="['thc-cSwitch-item', { 'thc-cSwitch-item--active': selectedIndex === index }]"
        @click="clickOnColor(index)"
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
