<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text: string;
    to: string;
    icon?: string;
    arrow?: boolean;
    arrowDirection?: "right" | "down" | "up";
    disabled?: boolean;
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
  <span
    :class="linkClass"
    v-if="to && to === 'parent'"
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
    :to="to"
    v-else
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
</template>

<style lang="scss" scoped>
@use "./ThcNavLink.scss" as *;
</style>
