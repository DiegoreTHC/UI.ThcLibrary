<template>
  <div :class="imgClass">
    <img;
      class="thc-image-tag"
      :srcset="`${imgSrc.medium} 480w, ${imgSrc.large} 1280w`"
      :src="imgSrc.small"
      :alt="alt"
      @load="imgLoaded"
      @error="imgLoaded"
      v-show="isImgLoaded && !isImgError"
    />
    <div class="thc-image-error" v-if="isImgError">
      <i class="fas fa-image"></i>
      <ThcSkeleton width="40px" height="16px" />
      <ThcSkeleton width="20px" height="12px" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    imgSrc?: {
      small: string;
      medium: string;
      large: string;
    };
    alt?: string;
  }>(),
  {
    alt: "Thc Image",
  },
);

const isImgLoaded = ref(false);
const isImgError = ref(false);

const imgLoaded = (event: Event) => {
  if (event.type === "error") {
    isImgError.value = true;
    isImgLoaded.value = false;
  }
  isImgLoaded.value = true;
};

const imgClass = computed(() => {
  const classes = ["thc-image"];
  if (isImgError.value) classes.push("thc-image--error");
  return classes.join(" ");
});
</script>

<style lang="scss" scoped>
@use "./ThcImage.scss" as *;
</style>
