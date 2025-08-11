<script lang="ts" setup>
import "@thcode-society/icons/dist/thc-icons.css";
import { ref } from "vue";

const add = ref({
  id: "SMKMX-750594-J",
  title: "Join tha Club!",
  campaign: "CRM",
  subtitle: "Y Obtén un 10% off en tu siguiente compra.",
  media: "/images/smokers-club-campaing.jpg"
});

const product = ref({
  id: 231336,
  name: "Canalas Raw",
  ["category-name"]: "Papeles Para rolar",
  price: {
    fullQuantity: 45.5,
    quantity: 45,
    cents: 50
  },
  stock: 34,
  promotion: {
    text: "10% off",
    active: true,
    variant: "discount"
  },
  media: {
    alt: "Blunts",
    sizes: {
      // small: "./spublic/images/img-bong-01.png",
      // medium: "./spublic/images/img-bong-01.png",
      // large: "./spublic/images/img-bong-01.png"
      small: "/_nuxt/public/images/category-image-rawpapers.png",
      medium: "/_nuxt/public/images/category-image-rawpapers.png",
      large: "/_nuxt/public/images/category-image-rawpapers.png"
    }
  }
});
</script>

<template>
  <div
    :style="{
      color: `#FFF`,
      background: `#11232F`,
      display: `flex`,
      alignItems: `flex-start`,
      flexDirection: `column`,
      gap: `.5em`,
      padding: `2em 1em`
    }"
  >
    <h1 style="font-size: 2em">Single ones</h1>
    <!-- Nuxt module playground!

    <i class="fas fa-chevron-right"></i>

    <ThcButton
      icon="fas fa-sliders"
      variant="primary"
      text="Comprar"
      size="large"
    />
    <ThcButton
      variant="outline"
      text="Especificaciones"
    />
    <ThcButton
      icon="fas fa-chevron-right"
      variant="icon"
      text="Comprar"
      size="large"
    />
    <ThcButton
      icon="fas fa-sliders"
      variant="outline-icon"
      text="Especificaciones"
      prependIcon
      size="large"
    /> -->

    <!-- <ThcColorSelector :colors="['#F00', '#FFF']" /> 

    <ThcProduct :product="product" />

    <img
      src="public/images/img-bong-01.png"
      alt="Bong"
    />

    {{ product?.media?.sizes }}

    <ThcImage
      :imgSrc="product?.media?.sizes"
      :alt="product?.media?.alt"
    />-->

    <!-- <ThcAddSquare :add="add" /> -->
    <p>Regular</p>
    <ThcSkeleton show />
    <br />
    <p>Button</p>
    <ThcSkeleton
      show
      type="button"
    />
    <br />
    <p>image</p>
    <ThcSkeleton
      show
      type="image"
    />
    <br />
    <p>Text</p>
    <ThcSkeleton
      show
      type="text"
    />
    <br />
    <p>Title</p>
    <ThcSkeleton
      show
      type="title"
    />
    <br />
    <br />
    <p>subtitle</p>
    <ThcSkeleton
      show
      type="subtitle"
    />
    <br />
    <br />
    <h1 style="font-size: 2em">Variants (structures)</h1>
    <p>Categories</p>
    <ThcSkeleton
      show
      variant="categories"
    />
    <br />
    <br />
    <p>Product</p>
    <ThcSkeleton
      show
      variant="product"
    />
    <br />
    <br />
    <p>Clothes</p>
    <ThcSkeleton
      show
      variant="product-clothes"
    />
    <br />
    <br />
    <p>Subtitle</p>
    <ThcSkeleton
      show
      variant="subtitle"
    />
    <br />
    <br />
    <p>Title</p>
    <ThcSkeleton
      show
      variant="title"
    />
    <br />
    <br />
    <p>PRoduct Selection</p>
    <ThcSkeleton
      show
      variant="product-selection"
    />
    <br />
    <br />
    <p>Product Compare</p>
    <ThcSkeleton
      show
      variant="product-compare"
    />
  </div>
</template>
