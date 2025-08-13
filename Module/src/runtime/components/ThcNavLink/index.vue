<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    text: string;
    to: string;
    icon?: string;
    arrow?: boolean;
    arrowDirection?: "right" | "down" | "up" | "left";
    disabled?: boolean;
    loading: boolean;
  }>(),
  {
    icon: "",
    arrow: false,
    disabled: false,
    arrowDirection: "right"
  }
);

const linkClass = computed(() => {
  const classes = ["thc-link"];
  if (props.arrow) classes.push("thc-link--arrow");
  if (props.icon) classes.push("thc-link--icon");
  if (props.disabled) classes.push("thc-link--disabled");

  return classes.join(" ");
});
</script>

<template>
  <div>
    <ThcSkeleton
      :show="loading"
      type="text"
      variant="default"
    />
    <span
      :class="linkClass"
      v-if="to && to === 'parent' && !loading"
    >
      <i
        :class="[icon, 'thc-link-icon']"
        v-if="icon"
      ></i>
      {{ text }}
      <i
        :class="['fas thc-link-arrow', `fa-chevron-${arrowDirection}`]"
        v-if="arrow"
      ></i>
    </span>
    <NuxtLink
      :class="linkClass"
      :to="to ? to : '/'"
      v-if="!loading && to !== 'parent'"
    >
      <i
        :class="[icon, 'thc-link-icon']"
        v-if="icon"
      ></i>
      {{ text }}
      <i
        :class="['fas thc-link-arrow', `fa-chevron-${arrowDirection}`]"
        v-if="arrow"
      ></i>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcNavLink.scss" as *;
</style>
