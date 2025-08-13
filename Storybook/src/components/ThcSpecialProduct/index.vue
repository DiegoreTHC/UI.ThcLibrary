<script lang="ts" setup>
import { computed } from "vue";
import type { Campaign } from "~/src/utils/models";

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

  if (props.loading) {
    classes.push(`thc-banner--loading`);
  }

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
          :loading="props.loading"
          :title="campaign?.title"
          variant="dark"
          :highlightWords="1"
          type="h3"
          class="title"
        />
        <p
          class="thc-banner-copy"
          v-if="campaign?.copy"
        >
          {{ campaign?.copy }}
        </p>
        <ThcSkeleton
          type="default"
          variant="default"
          :show="props.loading"
        />
        <ThcSkeleton
          type="default"
          variant="default"
          width="18em"
          :show="props.loading"
        />
        <ThcSkeleton
          type="default"
          variant="button"
          :show="props.loading"
        />
        <ThcButton
          v-if="!props.loading"
          :style="{
            backgroundColor: campaign?.appearance?.buttonBgColor,
            border: `1px solid ${campaign?.appearance?.buttonBorderColor}`,
            color: campaign?.appearance?.buttonColor
          }"
          l
          icon="fas fa-cart-shopping"
          :text="campaign?.btnText"
          @click="$emit('clickBtn')"
        />
      </div>
    </div>

    <figure class="thc-banner-image">
      <ThcImage
        :imgSrc="campaign?.media?.sizes"
        :alt="campaign?.media?.alt"
        :loading="props.loading"
      />
    </figure>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcSpecialProduct.scss" as *;
</style>
