<script lang="ts" setup>
import "@thcode-society/icons/dist/thc-icons.css";
import { ref } from "vue";

const clickOnColor = (event) => {
  console.log(event);
};

const nepe = ref([
  {
    id: "SMKMX-066280-L-PRDCT",
    name: "Low Temp Captive Cap",
    amenities: {
      title: "Captive smokes",
      icon: "fas fa-chevron-left",
      list: ["Temperatura ajustable", "Garantia", "Peso", "Bateria", "Accesorios"],
      values: [false, "10 anos", "50 g", "Ion Litio", "Incluidos"]
    },
    "category-slug": "accesorios",
    label: {
      variant: "discount",
      text: "Promocion"
    },
    media: [
      {
        alt: "Low Temp Captive Cap",
        sizes: {
          medium: "/images/category-image-rawpapers.png",
          large: "/images/category-image-rawpapers.png"
        }
      }
    ],
    price: {
      fullQuantity: 1399,
      quantity: 1399,
      cents: 0
    },
    ratings: {
      rating: 4,
      "total-ratings": 3
    },
    slug: "low-temp-captive-cap",
    sku: "SMKMX-SKU-066280-W"
  },
  {
    id: "SMKMX-025986-P-PRDCT",
    name: "Pink Blazy 2",
    "category-slug": "accesorios",
    label: {
      variant: "available",
      text: "Nuevo"
    },
    media: [
      {
        alt: "Pink Blazy 2",
        sizes: {
          medium: "/images/category-image-rawpapers.png",
          large: "/images/category-image-rawpapers.png"
        }
      }
    ],
    price: {
      fullQuantity: 100,
      quantity: 100,
      cents: 0
    },
    ratings: {
      rating: 2,
      "total-ratings": 44
    },
    slug: "pink-blazy-2",
    sku: "SMKMX-SKU-025986-N"
  },
  {
    id: "SMKMX-025985-P-PRDCT",
    name: "Pink Blazy 3",
    "category-slug": "accesorios",
    label: {
      variant: "discount",
      text: "Nuevo"
    },
    media: [
      {
        alt: "Pink Blazy 3",
        sizes: {
          medium: "/images/category-image-rawpapers.png",
          large: "/images/category-image-rawpapers.png"
        }
      }
    ],
    price: {
      fullQuantity: 22,
      quantity: 22,
      cents: 0
    },
    ratings: {
      rating: 3,
      "total-ratings": 44
    },
    slug: "pink-blazy-3",
    sku: "SMKMX-SKU-025985-N"
  },

  {
    id: "SMKMX-025982-P-PRDCT",
    name: "Pink Blazy 6",
    "category-slug": "accesorios",
    label: {
      variant: "unavailable",
      text: "Nuevo"
    },
    media: [
      {
        alt: "Pink Blazy 6",
        sizes: {
          medium: "/images/category-image-rawpapers.png",
          large: "/images/category-image-rawpapers.png"
        }
      }
    ],
    price: {
      fullQuantity: 55,
      quantity: 55,
      cents: 0
    },
    ratings: {
      rating: 2,
      "total-ratings": 44
    },
    slug: "pink-blazy-6",
    sku: "SMKMX-SKU-025982-N"
  }
]);
</script>

<template>
  <div :style="{ color: `#FFF`, background: `#11232F` }">
    Nuxt module playground!

    <div
      class=""
      v-for="(nep, index) in nepe"
      :key="nep"
    >
      <ThcProductCompare
        :product="nep ?? {}"
        showDetails
        showToggle
        v-if="index === 0"
      />
      <ThcProductCompare
        :product="nep"
        v-else
      />
    </div>
  </div>
</template>
