<script lang="ts" setup>
import { computed } from "vue";

export type ButtonVariantsTypes =
  | "primary"
  | "outline"
  | "outline-icon"
  | "icon"
  | "icon-transparent";

export type ButtonTypes = "button" | "submit" | "reset";

export type ButtonSizes = "small" | "medium" | "large";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariantsTypes;
    size?: ButtonSizes;
    href?: string | null;
    disabled?: boolean;
    iconButton?: boolean;
    prependIcon?: boolean;
    type?: ButtonTypes;
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
  if (props.size) classes.push(`thc-button--${props.size}`);
  if (isLink.value) classes.push("thc-button--link");
  if (
    props.variant === "icon" ||
    props.variant === "icon-transparent" ||
    props.variant === "outline-icon"
  ) {
    if (props.variant === "icon-transparent") classes.push("thc-button--icon");
    if (props.iconButton) classes.push("thc-button--icon-only");
    if (props.prependIcon) classes.push("thc-button--prepend");
  }

  return classes.join(" ");
});
</script>

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
      v-if="
        variant === 'icon' ||
        variant === 'icon-transparent' ||
        ('outline' && prependIcon) ||
        variant === 'outline-icon'
      "
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

<style lang="scss" scoped>
@use "./ThcButton.scss" as *;
</style>
