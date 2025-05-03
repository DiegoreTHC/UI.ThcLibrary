<template>
  <span
    :class="['thc-price', `thc-price--${props.size}`, `thc-price--${props.variant}`]"
    :data-price="props.price?.fullQuantity"
  >
    <span class="thc-price-currency">$</span>
    <span class="thc-price-integer">{{ props.price?.quantity }}</span>
    <span class="thc-price-cents">.{{ props.price?.cents }}</span>
  </span>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    variant?: "default" | "dark" | "light";
    size?: "small" | "medium" | "large";
    loading?: boolean;
    price?: {
      fullQuantity: number;
      quantity: number;
      cents: number;
    };
  }>(),
  {
    size: "small",
    variant: "default",
    loading: false
  }
);

defineEmits<{
  (event: "click"): void;
}>();
</script>

<style lang="scss" scoped>
@use "./ThcPrice.scss" as *;
</style>
