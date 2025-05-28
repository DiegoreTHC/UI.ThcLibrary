<script lang="ts" setup>
import type { PropType } from "vue";
import VueSlider from "vue-3-slider-component";

const props = withDefaults(
  defineProps<{
    step?: number;
    minPrice: number;
    maxPrice: number;
  }>(),
  {
    step: 10
  }
);

const emit = defineEmits(["update"]);

const model = defineModel({ type: [Array] as PropType<any[]> });
</script>

<template>
  <div class="thc-slider">
    <div class="thc-slider-values">
      <ThcInputText
        :value="String(minPrice)"
        variant="cash"
        type="number"
        hideLabel
        disabled
      />
      <ThcInputText
        :value="String(props.maxPrice)"
        variant="cash"
        type="number"
        hideLabel
        disabled
      />
    </div>
    <div class="thc-slider-rail">
      <vue-slider
        v-model="model"
        :min="props.minPrice"
        :max="props.maxPrice"
        :step="props.step"
        @change="emit('update')"
        class="thc-slider-model"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcRangeSlider.scss" as *;
</style>
