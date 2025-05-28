import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import ThcProductCompare from "../components/ThcProductCompare/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcProductCompare",
  component: ThcProductCompare,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    product: {
      control: { type: "object" }
    },
    showHeaders: {
      control: { type: "boolean" }
    }
  }
};

export default meta;

export const Default = {
  parameters: {
    backgrounds: {
      // 👇 Override default background value for this story
      default: "Dark"
    }
  },
  args: {
    loading: false,
    mobile: false,
    showHeaders: false,
    product: {
      id: "123412",
      "product-name": "Pax Starter Kit",
      slug: "pax-starter-kit",
      "category-name": "Equipos para ceras",
      "category-slug": "equipos-para-ceras",
      label: {
        variant: "new",
        text: "Nuevo"
      },
      price: {
        fullQuantity: 344,
        quantity: 344,
        cents: 10
      },
      stock: 5,
      sku: "SMK-420-0301",
      rating: 5,
      totalRatings: 45,
      media: {
        alt: "Pax Starter Kit",
        sizes: {
          small: "images/category-image-rawpapers.png",
          medium: "images/category-image-rawpapers.png",
          large: "images/category-image-rawpapers.png"
        }
      },
      similarities: [
        {
          similarity: "Accesorios",
          "similarity-value": "Incluidos en caja"
        },
        {
          similarity: "Color",
          "similarity-value": "N/A"
        },
        {
          similarity: "Duracion Batería",
          "similarity-value": "4 hrs"
        },
        {
          similarity: "Tiempo de carga",
          "similarity-value": "35 min"
        },
        {
          similarity: "Marca",
          "similarity-value": "RAW"
        }
      ]
    }
  }
};

export const DefaultMobile = {
  parameters: {
    backgrounds: {
      // 👇 Override default background value for this story
      default: "Dark"
    },
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: "iPhone16"
    }
  },
  args: {
    loading: false,
    showHeaders: false,
    mobile: true,
    product: {
      id: "123412",
      "product-name": "Pax Starter Kit",
      slug: "pax-starter-kit",
      "category-name": "Equipos para ceras",
      "category-slug": "equipos-para-ceras",
      label: {
        variant: "new",
        text: "Nuevo"
      },
      price: {
        fullQuantity: 344,
        quantity: 344,
        cents: 10
      },
      stock: 5,
      sku: "SMK-420-0301",
      rating: 5,
      totalRatings: 45,
      media: {
        alt: "Pax Starter Kit",
        sizes: {
          small: "images/category-image-rawpapers.png",
          medium: "images/category-image-rawpapers.png",
          large: "images/category-image-rawpapers.png"
        }
      },
      similarities: [
        {
          similarity: "Accesorios",
          "similarity-value": "Incluidos en caja"
        },
        {
          similarity: "Color",
          "similarity-value": "N/A"
        },
        {
          similarity: "Duracion Batería",
          "similarity-value": "4 hrs"
        },
        {
          similarity: "Tiempo de carga",
          "similarity-value": "35 min"
        },
        {
          similarity: "Marca",
          "similarity-value": "RAW"
        }
      ]
    }
  }
};

export const Headers = {
  parameters: {
    backgrounds: {
      // 👇 Override default background value for this story
      default: "Dark"
    }
  },
  args: {
    loading: false,
    showHeaders: true,
    mobile: false,
    product: {
      id: "123412",
      "product-name": "Pax Starter Kit",
      slug: "pax-starter-kit",
      "category-name": "Equipos para ceras",
      "category-slug": "equipos-para-ceras",
      label: {
        variant: "new",
        text: "Nuevo"
      },
      price: {
        fullQuantity: 344,
        quantity: 344,
        cents: 10
      },
      stock: 5,
      sku: "SMK-420-0301",
      rating: 5,
      totalRatings: 45,
      media: {
        alt: "Pax Starter Kit",
        sizes: {
          small: "images/category-image-rawpapers.png",
          medium: "images/category-image-rawpapers.png",
          large: "images/category-image-rawpapers.png"
        }
      },
      similarities: [
        {
          similarity: "Accesorios",
          "similarity-value": "Incluidos en caja"
        },
        {
          similarity: "Color",
          "similarity-value": "N/A"
        },
        {
          similarity: "Duracion Batería",
          "similarity-value": "4 hrs"
        },
        {
          similarity: "Tiempo de carga",
          "similarity-value": "35 min"
        },
        {
          similarity: "Marca",
          "similarity-value": "RAW"
        }
      ]
    }
  }
};
