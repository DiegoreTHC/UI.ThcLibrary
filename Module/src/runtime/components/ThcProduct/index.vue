<script lang="ts" setup>
import { computed } from "vue";
import { ProductVariants } from "../../utils/enums";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "outline" | "category" | "inline" | "vertical" | string;
    product?: any;
    isCurrent?: boolean;
  }>(),
  {
    variant: "default",
    isCurrent: false
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
        <p class="thc-product-name">{{ product.name }}</p>
        <p
          v-if="!isCurrent"
          class="thc-product-category"
        >
          {{ product["category-name"] }}
        </p>

        <p
          class="thc-product-category"
          v-else
        >
          {{ product?.brand }}
        </p>
      </div>
      <ThcImage
        class="thc-image"
        :imgSrc="product?.media?.sizes"
        :alt="product?.media?.alt"
      />
    </div>
    <div
      class="thc-product-item"
      v-if="props.variant === 'inline'"
    >
      <div class="thc-product-media">
        <ThcImage
          :imgSrc="product?.media?.sizes"
          :alt="product?.media?.alt"
        />
        <ThcCard
          class="thc-product-card"
          variant="primary"
        />
      </div>
      <div class="thc-product-data">
        <p class="thc-product-title">{{ product.name }}</p>
        <div class="thc-product-data-flex">
          <ThcPrice
            :price="product?.price"
            variant="default"
          />
          <p
            class="thc-product-category-name"
            v-if="!isCurrent"
          >
            {{ product["category-name"] }}
          </p>
          <p
            class="thc-product-category-name"
            v-else
          >
            {{ product?.brand }}
          </p>
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
            <ThcPill :text="product.stock" />
            <ThcTitle
              variant="dual"
              type="h5"
              :title="product['category-name']"
              :highlight-words="2"
            />
          </div>
        </div>
      </ThcCard>
      <div class="thc-product-media">
        <ThcImage
          :imgSrc="product?.media?.sizes"
          :alt="product?.media?.alt"
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
          <p class="thc-product-title">{{ product.name }}</p>
          <p class="thc-product-subtitle">{{ product["category-name"] }}</p>

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
          class="thc-image"
          :imgSrc="product?.media?.sizes"
          :alt="product?.media?.alt"
        />
      </div>
    </div>
    <ThcPill
      v-if="product?.label && product?.label.text.length"
      :text="product?.label?.text"
      :variant="product?.label?.variant"
      class="thc-product-pill"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcProduct.scss" as *;
</style>
