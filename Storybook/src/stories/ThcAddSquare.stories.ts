import ThcAddSquare from "../components/ThcAddSquare/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcAddSquare",
  component: ThcAddSquare,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    }
  },
  args: {
    loading: false
  }
};

export default meta;

export const Default = {
  args: {
    loading: false,
    add: {
      title: "Join tha Club!",
      subtitle: "Recibe nuestras mejores ofertas",
      variant: "default",
      campaign: "CRM",
      copies: [
        "Y Obtén un 10% off en tu siguiente compra.",
        "Y Obtén un 30% de descuento en tu siguiente compra."
      ],
      media: {}
    }
  }
};

export const Loading = {
  args: {
    loading: true,
    add: {
      title: "Join tha Club!",
      subtitle: "Recibe nuestras mejores ofertas",
      variant: "default",
      campaign: "CRM",
      copies: [
        "Y Obtén un 10% off en tu siguiente compra.",
        "Y Obtén un 30% de descuento en tu siguiente compra."
      ],
      media: {}
    }
  }
};
