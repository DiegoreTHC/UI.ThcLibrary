<template>
  <div :class="componentClass">
    <ThcSkeleton
      v-if="loading"
      class="thc-title-loader"
      width="200px"
    />
    <component;<div
      v-else
      :is="type"
      :class="titleClass"
    >
      <span v-html="splittedTitle" />
      <span
        class="thc-subtitle"
        v-html="splittedSubTitle"
        v-if="subtitle?.length"
      ></span>
    </component>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "dual" | "dark" | "quote";
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
    title?: string;
    highlightWords?: number;
    subtitle?: string;
    loading?: boolean;
    splitHalf?: boolean;
  }>(),
  {
    variant: "primary",
    type: "h2",
    highlightWords: 1
  }
);

const splittedTitle = computed(() => {
  if (props.title) {
    const trimmedStr = props.title.trim();
    const lastSpaceIndex = trimmedStr.lastIndexOf(" ");

    if (props.variant === "quote") {
      return props.title;
    }

    if (trimmedStr.indexOf(" ") === -1) {
      return trimmedStr;
    }

    if (props.highlightWords === 1) {
      const firstPart = trimmedStr.substring(0, lastSpaceIndex);
      const lastWord = trimmedStr.substring(lastSpaceIndex + 1);

      let newTitle = `${firstPart} <span class="thc-title-highlight--${props.variant}">${lastWord}</span>`;

      if (props.splitHalf) {
        const splittedText = newTitle.split(" ");
        const mitad = Math.floor(splittedText.length / 2);

        const firstPart = splittedText.slice(0, mitad).join(" ");
        const secondPart = splittedText.slice(mitad).join(" ");

        newTitle = `${firstPart} <span class="thc-title--half">${secondPart}</span>`;

        return newTitle;
      }

      return newTitle;
    }

    if (props.highlightWords === 2) {
      const secondLastSpaceIndex = trimmedStr.lastIndexOf(" ", lastSpaceIndex - 1);

      if (secondLastSpaceIndex === -1) {
        return `<span class="thc-title-highlight--${props.variant}">${trimmedStr}</span>`;
      }

      const firstPart = trimmedStr.substring(0, secondLastSpaceIndex);
      const lastTwoWords = trimmedStr.substring(secondLastSpaceIndex + 1);
      let newTitle = `${firstPart} <span class="thc-title-highlight--${props.variant}">${lastTwoWords}</span>`;

      if (props.splitHalf) {
        const splittedText = newTitle.split(" ");
        const half = Math.floor(splittedText.length / 2);

        const firstPart = splittedText.slice(0, half).join(" ");
        const secondPart = splittedText.slice(half).join(" ");

        newTitle = `${firstPart} <span class="thc-title--half">${secondPart}</span>`;

        return newTitle;
      }

      return newTitle;
    }

    return trimmedStr;
  }

  return "";
});

const splittedSubTitle = computed(() => {
  if (props.subtitle) {
    const trimmedStr = props.subtitle.trim();
    const lastSpaceIndex = trimmedStr.lastIndexOf(" ");

    if (props.highlightWords === 1) {
      const firstPart = trimmedStr.substring(0, lastSpaceIndex);
      const lastWord = trimmedStr.substring(lastSpaceIndex + 1);
      return `${firstPart} <span class="thc-subtitle-highlight">${lastWord}</span>`;
    }
  }

  return "";
});

const componentClass = computed(() => {
  const classes = ["thc-title", `thc-title--${props.variant}`];
  if (props.loading) classes.push("thc-title--loading");
  return classes.join(" ");
});

const titleClass = computed(() => {
  const classes = [`thc-title-tag`];
  if (props.variant === "primary" || props.variant === "dark")
    classes.push("thc-title-tag--double");
  if (props.variant === "dual") classes.push("thc-title-tag--dual");

  return classes.join(" ");
});
</script>

<style lang="scss" scoped>
@import "./ThcTitle.scss";
</style>
