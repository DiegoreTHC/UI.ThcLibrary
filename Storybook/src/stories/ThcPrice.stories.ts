import ThcPrice from "../components/ThcPrice/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcPrice",
  component: ThcPrice,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "dark", "light"]
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"]
    },
    price: {
      control: { type: "object" }
    }
  },
  args: {
    price: {
      fullQuantity: 44.5,
      quantity: 44,
      cents: 50
    },
    size: "medium"
  }
};

export default meta;

export const Default = {
  args: {
    loading: false,
    variant: "default"
  }
};
export const Dark = {
  args: {
    loading: false,
    variant: "dark"
  }
};
export const Light = {
  args: {
    loading: false,
    variant: "light"
  }
};
