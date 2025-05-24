<script lang="ts" setup>
import { computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    loading?: boolean;
    variant?: "default" | "icon" | "cash";
    type: "text" | "email" | "number" | "password" | "color";
    label?: string;
    value: string;
    placeholder?: string;
    hideLabel?: boolean;
    useIcon?: boolean;
    icon?: string;
  }>(),
  {
    loading: true,
    variant: "default",
    type: "text",
    label: "Text input",
    placeholder: "",
    hideLabel: false
  }
);

const inputValue = ref(props.value);
const isInvalid = ref(false);
const emit = defineEmits(["update"]);

const validateInput = () => {
  if (props.type === "email") {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    isInvalid.value = !regex.test(inputValue.value);
  }
};

const inputClass = computed(() => {
  const classes = ["thc-text-input", `thc-text-input--${props.variant}`];
  if (isInvalid) classes.push("thc-text-input--error");
  if (props.useIcon) classes.push("thc-text-input--icon");
  return classes.join(" ");
});
</script>

<template>
  <div :class="inputClass">
    <ThcLabel
      :label="label"
      v-if="!hideLabel"
    />
    <div class="thc-text-input-wrapper">
      <i
        :class="['thc-text-input-icon', icon]"
        v-if="useIcon"
      ></i>
      <input
        :type="type"
        :id="type"
        :value="value"
        @blur="validateInput"
        @input="emit('update', value)"
        class="thc-text-input-tag"
        :placeholder="placeholder"
      />
    </div>
    <p
      v-if="isInvalid"
      class="thc-text-input-error"
    >
      Please enter a valid email address.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcInputText.scss" as *;
</style>
