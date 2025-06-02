<script lang="ts" setup>
import { computed } from "vue";

interface Appearance {
  bgColor: string;
  bgHalfColor: string;
  buttonColor: string;
  buttonBgColor: string;
  buttonBorderColor: string;
  bgImgProduct: string;
}

interface Media {
  alt: string;
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

interface Campaign {
  id?: string;
  slug?: string;
  direction?: "rtl" | "ltr";
  title?: string;
  subtitle?: string;
  copy?: string;
  disclaimer?: string;
  btnText?: string;
  link?: string;
  media?: Media;
  appearance?: Appearance;
}

const props = withDefaults(
  defineProps<{
    loading?: boolean;
    campaign?: Campaign;
  }>(),
  {
    loading: true
  }
);

const customClass = computed(() => {
  const classes = ["thc-banner"];

  if (props.campaign?.direction) {
    classes.push(`thc-banner--${props.campaign?.direction}`);
  }
  return classes.join(" ");
});
</script>

<template>
  <div :class="customClass">
    <div
      class="thc-banner-card"
      :style="{
        backgroundColor: campaign?.appearance?.bgColor,
        backgroundImage: `url(${campaign?.appearance?.bgImgProduct})`
      }"
    >
      <div
        class="thc-banner-card-half"
        :style="{ backgroundColor: campaign?.appearance?.bgHalfColor }"
      />
      <div class="thc-banner-data">
        <ThcTitle
          :title="campaign?.title"
          variant="dark"
          :highlightWords="1"
          type="h3"
          class="title"
        />
        <p
          class="thc-banner-copy"
          v-if="campaign?.copy?.length"
        >
          {{ campaign?.copy }}
        </p>
        <ThcButton
          :style="{
            backgroundColor: campaign?.appearance?.buttonBgColor,
            border: `1px solid ${campaign?.appearance?.buttonBorderColor}`,
            color: campaign?.appearance?.buttonColor
          }"
          icon="fas fa-cart-shopping"
          :text="campaign?.btnText"
          @click="$emit('clickBtn')"
        />
      </div>
    </div>
    <figure
      class="thc-banner-image"
      v-if="campaign?.media"
    >
      <ThcImage
        :imgSrc="campaign?.media.sizes"
        :alt="campaign?.media.alt"
      />
    </figure>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcSpecialProduct.scss" as *;
</style>
