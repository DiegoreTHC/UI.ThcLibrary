<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="isLink ? href : undefined"
    :class="buttonClass"
    :type="isLink ? '' : type"
    :disabled="disabled"
    @click="onClick"
  >
    <i
      :class="['thc-button-icon', icon]"
      v-if="variant === 'icon' || variant === 'icon-transparent' || ('outline' && prependIcon)"
    />
    <span
      class="thc-button-text"
      v-if="!iconButton && !isLink"
    >
      {{ text }}
    </span>
    <template v-if="isLink">{{ text }}</template>
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { ButtonVariantsTypes } from "~/src/utils";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariantsTypes;
    size?: "small" | "medium" | "large";
    href?: string | null;
    disabled?: boolean;
    iconButton?: boolean;
    prependIcon?: boolean;
    type?: "button" | "submit" | "reset";
    icon?: string | null;
    text?: string;
  }>(),
  {
    variant: "primary",
    text: "Nuevo",
    href: "",
    type: "button",
    disabled: false
  }
);

const emit = defineEmits(["click"]);

const isLink = computed(() => props.href && props.href.length > 0);

const onClick = (event: Event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};

const buttonClass = computed(() => {
  const classes = ["thc-button", `thc-button--${props.variant}`];
  if (props.disabled) classes.push("thc-button--disabled");
  if (isLink.value) classes.push("thc-button--link");
  if (props.variant === "icon" || props.variant === "icon-transparent") {
    if (props.variant === "icon-transparent") classes.push("thc-button--icon");
    if (props.iconButton) classes.push("thc-button--icon-only");
    if (props.prependIcon) classes.push("thc-button--prepend");
  }

  return classes.join(" ");
});
</script>

<style lang="scss" scoped>
@use "./ThcButton.scss";
</style>
