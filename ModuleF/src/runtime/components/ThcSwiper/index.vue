<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { SliderDirections } from "~/src/utils/enums";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = withDefaults(
  defineProps<{
    uid?: any;
    slides: any[] | undefined;
    slidesPerView?: number | "auto";
    breakpoints?: any | undefined;
    slideClass?: string;
    loop?: boolean;
    autoplay?: {
      delay: number;
      disableOnInteraction: boolean;
    };
    effect?: "slide" | "fade";
    speed?: number;
    customPagination?: boolean;
    customNavigation?: boolean;
    direction?: "horizontal" | "vertical" | undefined;
    topNav?: boolean;
    spaceBetween?: string | number;
    mobile?: boolean;
  }>(),
  {
    slidesPerView: 1,
    loop: false,
    effect: "slide",
    speed: 500,
    customNavigation: false,
    customPagination: false,
    direction: SliderDirections.Default
  }
);

const modules = [Navigation, Pagination, Autoplay];

// Pagination configuration (can be customized more if needed)
const paginationOptions = props.customPagination
  ? {
      type: "bullets",
      clickable: true,
      renderBullet: (index: number, className: string) =>
        '<span class="thc-pagination-bullet ' + className + '"></span>'
    }
  : false;

// Navigation options for custom buttons
const navigationOptions = props.customNavigation
  ? {
      nextEl: `.swiper-button-next--${props.uid}`,
      prevEl: `.swiper-button-prev--${props.uid}`
    }
  : undefined;

const swiperInstance = ref<any>({});
const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

watch(
  () => props.mobile,
  (newValue: any) => {
    if (newValue) {
      setTimeout(() => {
        swiperInstance.value.update();
      }, 1000);
    }
  }
);
</script>

<template>
  <div class="swiper-container thc-swiper">
    <div
      class="thc-swiper-nav thc-swiper-nav--vertical"
      v-if="topNav"
    >
      <ThcButton
        variant="icon-transparent"
        icon="fas fa-chevron-up"
        :class="`swiper-button-next swiper-button-next--${props.uid}`"
        iconButton
      />
      <ThcButton
        variant="icon-transparent"
        icon="fas fa-chevron-down"
        :class="`swiper-button-prev swiper-button-prev--${props.uid}`"
        iconButton
      />
    </div>

    <Swiper
      :id="uid"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :loop="loop"
      :autoplay="autoplay"
      :breakpoints="breakpoints"
      :navigation="navigationOptions"
      :pagination="paginationOptions"
      :direction="direction"
      :effect="effect"
      :speed="speed"
      :modules="modules"
      @swiper="onSwiper"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="slide"
        :class="slideClass"
      >
        <slot
          name="slide"
          v-bind="{ slide, index }"
        />
      </SwiperSlide>

      <div
        class="thc-swiper-nav"
        v-if="!topNav"
      >
        <!-- Custom Navigation -->
        <div
          v-if="customNavigation"
          :class="`swiper-button-next swiper-button-next--${props.uid}`"
        >
          <i class="fas fa-chevron-right"></i>
        </div>
        <div
          v-if="customNavigation"
          :class="`swiper-button-prev swiper-button-prev--${props.uid}`"
        >
          <i class="fas fa-chevron-left"></i>
        </div>
      </div>
    </Swiper>

    <!-- Custom Pagination -->
    <div
      v-if="customPagination"
      class="swiper-pagination thc-pagination"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
@import "./ThcSwiper.scss";
</style>
