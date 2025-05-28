import ThcRangeSlider from "../components/ThcRangeSlider/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcRangeSlider",
  component: ThcRangeSlider,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    minPrice: {
      control: { type: "number" }
    },
    maxPrice: {
      control: { type: "number" }
    },
    step: {
      control: { type: "number" }
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
    minPrice: 500,
    maxPrice: 3400,
    step: 10,
    value: [500, 3400]
  }
};
