<template>
  <div
    :class="['thc-product', `thc-product--${props.variant}`]"
    @click="$emit('click')"
    :data-id="product.id"
  >
    <div
      class="thc-product-item"
      v-if="props.variant === ProductVariants.Default || props.variant === ProductVariants.Outline"
    >
      <ThcCard
        class="thc-product-card"
        :variant="cardVariant"
      >
        <ThcPrice
          :price="product.price"
          variant="light"
        />
      </ThcCard>
      <div class="thc-product-data">
        <p class="thc-product-name">{{ product.productName }}</p>
        <p class="thc-product-category">{{ product.categoryName }}</p>
      </div>
      <ThcImage
        class="thc-image"
        :img-src="product.media.sizes"
        :alt="product.media.alt"
      />
    </div>
    <div
      class="thc-product-item"
      v-if="props.variant === 'inline'"
    >
      <div class="thc-product-media">
        <ThcImage
          :img-src="product.media.sizes"
          :alt="product.media.alt"
        />
        <ThcCard
          class="thc-product-card"
          variant="primary"
        />
      </div>
      <div class="thc-product-data">
        <p class="thc-product-title">{{ product?.productName }}</p>
        <div class="thc-product-data-flex">
          <ThcPrice
            :price="product?.price"
            variant="default"
          />
          <p class="thc-product-category-name">{{ product?.categoryName }}</p>
        </div>
      </div>
      <nav class="thc-product-action">
        <ThcButton
          icon="fas fa-cart-shopping"
          variant="icon"
          iconButton
          @click="$emit('clickBtn')"
        />
      </nav>
    </div>
    <div
      class="thc-product-item"
      v-if="props.variant === ProductVariants.Category"
    >
      <ThcCard
        class="thc-product-card"
        :variant="cardVariant"
      >
        <div class="thc-product">
          <div class="thc-product-data">
            <ThcPill
              :text="product.stock"
              :loading="loading"
            />
            <ThcTitle
              variant="dual"
              type="h5"
              :title="product.categoryName"
              :loading="loading"
              :highlight-words="2"
            />
          </div>
        </div>
      </ThcCard>
      <div class="thc-product-media">
        <ThcImage
          :img-src="product.media.sizes"
          :alt="product.media.alt"
        />
      </div>
    </div>
    <div
      class="thc-product-item"
      v-if="props.variant === ProductVariants.Vertical"
    >
      <ThcCard
        class="thc-product-card"
        :variant="cardVariant"
      >
        <div class="thc-product-data">
          <p class="thc-product-title">{{ product.productName }}</p>
          <p class="thc-product-subtitle">{{ product.categoryName }}</p>

          <div class="thc-product-actions">
            <ThcPrice
              :price="product.price"
              variant="dark"
            />
            <ThcButton
              icon="fas fa-cart-shopping"
              variant="icon"
              iconButton
            />
          </div>
        </div>
      </ThcCard>
      <div class="thc-product-media">
        <ThcImage
          :img-src="product.media.sizes"
          :alt="product.media.alt"
        />
      </div>
    </div>
    <ThcPill
      v-if="product?.promotion && product?.promotion.active"
      :text="product?.promotion?.text"
      :variant="product?.promotion?.variant"
      class="thc-product-pill"
    />
  </div>
</template>

<script lang="ts" setup>
import { ProductVariants } from "~/src/utils/enums";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "outline" | "category" | "inline" | "vertical" | string;
    loading?: boolean;
    product?: any;
  }>(),
  {
    loading: false,
    variant: "default"
  }
);

const cardVariant = computed(() => {
  if (props.variant === ProductVariants.Outline) {
    return "gradient";
  }
  return "primary";
});

defineEmits<{
  (event: "click"): void;
  (event: "clickBtn"): void;
}>();
</script>

<style lang="scss" scoped>
@import "./ThcProduct.scss";
</style>
