<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps<{
  id: string;
  disabled?: boolean;
  value?: string | boolean | undefined;
  label?: string;
  name?: string;
  theme?: "default" | "switch";
}>();

const model = defineModel({
  type: [Boolean, String, Array] as PropType<boolean | undefined | string | string[]>
});
</script>

<template>
  <div :class="['thc-radio', { 'thc-radio--switch': theme === 'switch' }]">
    <div class="thc-radio-item">
      <input
        :class="[
          'thc-radio-box',
          { 'thc-radio-box--disabled': disabled },
          { 'thc-radio-box--switch': theme === 'switch' }
        ]"
        type="radio"
        v-model="model"
        :id="id"
        :value="value"
      />
      <Thc-Label
        :for="id"
        class="thc-radio-label"
        v-if="label"
        :label="label"
        :name="name"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcInputRadio.scss" as *;
</style>
