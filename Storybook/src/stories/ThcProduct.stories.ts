import ThcProduct from "../components/ThcProduct/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcProduct",
  component: ThcProduct,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: {
        type: "boolean"
      }
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "outline", "category", "inline"]
    },
    product: {
      control: {
        type: "object"
      }
    }
  }
};

export default meta;

export const Default = {
  args: {
    variant: "default",
    loading: false,
    product: {
      id: 231336,
      productName: "Canalas Raw",
      categoryName: "Papeles Para rolar",
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
          small: "",
          medium: "",
          large: ""
        }
      }
    }
  }
};

export const Vertical = {
  args: {
    variant: "vertical",
    loading: false,
    product: {
      id: 231336,
      productName: "Canalas Raw",
      categoryName: "Papeles Para rolar",
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
          small: "",
          medium: "",
          large: ""
        }
      }
    }
  }
};

export const Category = {
  args: {
    variant: "category",
    loading: false,
    product: {
      id: 231334,
      categoryName: "Equipos Herbales (Vape)",
      stock: 20,
      promotion: {
        text: "Re Stock",
        active: true,
        variant: "gradient"
      },
      media: {
        alt: "Blunts",
        sizes: {
          small: "",
          medium: "",
          large: ""
        }
      }
    }
  }
};

export const Outline = {
  args: {
    variant: "outline",
    loading: false,
    product: {
      id: 231332,
      productName: "Lion Rolling Circus",
      productSubtitle: "Original Blazy Clothes",
      categoryName: "Accesorios",
      label: "50% off",
      price: {
        fullQuantity: 45.5,
        quantity: 45,
        cents: 50
      },
      media: {
        alt: "Blunts",
        sizes: {
          small: "",
          medium: "",
          large: ""
        }
      }
    }
  }
};

export const Inline = {
  args: {
    variant: "inline",
    loading: false,
    product: {
      id: 231332,
      productName: "Lion Rolling Circus",
      categoryName: "Blunts",
      price: {
        fullQuantity: 45.5,
        quantity: 45,
        cents: 50
      },
      media: {
        alt: "Blunts",
        sizes: {
          small: "",
          medium: "",
          large: ""
        }
      }
    }
  }
};
