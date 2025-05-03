import ThcPill from "../components/ThcPill/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcPill",
  component: ThcPill,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: {
        type: "boolean"
      }
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "dark", "light"]
    },
    text: {
      control: {
        type: "text"
      }
    }
  }
};

export default meta;

export const New = {
  args: {
    text: "Nuevo",
    loading: false,
    variant: "new"
  }
};

export const Default = {
  args: {
    text: "New",
    loading: false,
    variant: "default"
  }
};

export const Discount = {
  args: {
    text: "5% off",
    loading: false,
    variant: "discount"
  }
};

export const Gradient = {
  args: {
    text: "85",
    loading: false,
    variant: "gradient"
  }
};

export const Loading = {
  args: {
    text: "85",
    loading: true,
    variant: "new"
  }
};
