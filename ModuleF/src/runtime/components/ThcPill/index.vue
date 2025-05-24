<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    variant?:
      | "new"
      | "default"
      | "discount"
      | "gradient"
      | "outline"
      | undefined;
    text?: string | number | undefined;
    active?: boolean;
    loading?: boolean;
  }>(),
  {
    variant: "new",
    text: "Nuevo",
    loading: false,
  },
);
const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emit("click");
};
</script>

<template>
  <div
    :class="[
      'thc-pill',
      `thc-pill--${props.variant}`,
      { 'thc-pill--loading': loading },
      { 'thc-pill--active': active },
    ]"
    @click="onClick"
  >
    <span v-if="!loading">{{ props.text }}</span>
    <ThcSkeleton v-if="loading" />
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcPill.scss" as *;
</style>
