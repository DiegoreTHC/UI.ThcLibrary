<script lang="ts" setup>
import { computed, nextTick, onMounted, ref } from "vue";

interface ImgProps {
  imgSrc?: {
    small: string;
    medium: string;
    large: string;
  };
  alt?: string;
}

const props = withDefaults(defineProps<ImgProps>(), {
  alt: "Thc Image"
});

const isImgLoaded = ref(false);
const isImgError = ref(false);
const isLoading = ref(true);
const imageSrc = ref(props.imgSrc?.small || "");
const imgEl = ref<HTMLImageElement | null>(null);

onMounted(() => {
  nextTick(() => {
    if (imgEl.value && imgEl.value.complete) {
      isLoading.value = false;
      isImgLoaded.value = true;
    }
  });
});

const imgLoaded = () => {
  isLoading.value = false;
  isImgLoaded.value = true;
};

const handleError = () => {
  isImgError.value = true;
  isLoading.value = false;
  isImgLoaded.value = false;
};

const imageSrcset = computed(() => {
  if (!props.imgSrc) return "";
  return [
    `${props.imgSrc.small} 480w`,
    `${props.imgSrc.medium} 768w`,
    `${props.imgSrc.large} 1200w`
  ].join(", ");
});

const imgClass = computed(() => {
  const classes = ["thc-image"];
  if (isImgError.value) classes.push("thc-image--error");
  if (isLoading && !isImgError.value && !isImgLoaded.value) classes.push("thc-image--loading");
  return classes.join(" ");
});
</script>

<template>
  <div :class="imgClass">
    <img
      ref="imgEl"
      class="thc-image-tag"
      v-show="isImgLoaded && !isImgError && !isLoading"
      :src="imageSrc"
      :srcset="imageSrcset"
      sizes="(max-width: 480px) 480px,
             (max-width: 768px) 768px,
             1200px"
      :alt="props.alt"
      @load="imgLoaded"
      @error="handleError"
    />
    <div
      class="thc-image-error"
      v-if="isImgError && !isLoading"
    >
      <i class="fas fa-image-slash"></i>
      <ThcSkeleton
        width="40px"
        height="16px"
        show
      />
      <ThcSkeleton
        width="20px"
        height="12px"
        show
      />
    </div>
    <div
      class="thc-image-loader"
      v-if="isLoading"
    >
      <i class="fas fa-image"></i>
      <ThcSkeleton
        width="40px"
        height="16px"
        show
      />
      <ThcSkeleton
        width="20px"
        height="12px"
        show
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcImage.scss" as *;
</style>
