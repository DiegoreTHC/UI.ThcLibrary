import ThcWarranties from "../components/ThcWarranties/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcWarranties",
  component: ThcWarranties,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    warranties: {
      control: { type: "object" }
    }
  }
};

export default meta;

export const Primary = {
  args: {
    loading: false,
    warranties: [
      {
        media: {
          alt: "Compra segura",
          sizes: {
            small: "~/images/smokers-delivery.svg",
            medium: "~/images/smokers-delivery.svg",
            large: "~/images/smokers-delivery.svg"
          }
        },
        title: "Compra Segura"
      },
      {
        media: {
          alt: "Compra protegida",
          sizes: {
            small: "~/images/smokers-shield.svg",
            medium: "~/images/smokers-shield.svg",
            large: "~/images/smokers-shield.svg"
          }
        },
        title: "Compra protegida"
      },
      {
        media: {
          alt: "MSI + Mercado Pago",
          sizes: {
            small: "~/images/smokers-mlibre.svg",
            medium: "~/images/smokers-mlibre.svg",
            large: "~/images/smokers-mlibre.svg"
          }
        },
        title: "MSI + Mercado Pago"
      },
      {
        media: {
          alt: "Envios a todo el país",
          sizes: {
            small: "~/images/smokers-delivery.svg",
            medium: "~/images/smokers-delivery.svg",
            large: "~/images/smokers-delivery.svg"
          }
        },
        title: "Envios a todo el país"
      }
    ]
  }
};

export const Loading = {
  args: {
    loading: true,
    warranties: []
  }
};
