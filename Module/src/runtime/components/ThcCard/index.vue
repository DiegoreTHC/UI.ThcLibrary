<script lang="ts" setup>
const props = defineProps<{
  variant?: "primary" | "gradient" | "dark" | "transparent"; // Only affect colors,
}>();

const emit = defineEmits<{
  (event: "click"): void;
  (event: "outside-click"): void;
}>();

const cardRef = ref(null);

const handleClickOutside = (event: Event) => {
  if (cardRef.value && !cardRef.value.contains(event.target)) {
    emit("outside-click");
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    :class="['thc-card', `thc-card--${props.variant}`]"
    ref="cardRef"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcCard.scss" as *;
</style>
