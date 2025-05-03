import ThcRatings from "../components/ThcRatings/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcRatings",
  component: ThcRatings,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    showData: {
      control: { type: "boolean" }
    },
    rating: {
      control: {
        type: "number"
      }
    },
    totalRatings: {
      control: {
        type: "number"
      }
    }
  }
};

export default meta;

export const Default = {
  args: {
    loading: false,
    rating: 3.5,
    showData: false,
    totalRatings: null
  }
};

export const Data = {
  args: {
    loading: false,
    rating: 3.5,
    showData: true,
    totalRatings: 4
  }
};

export const DataEmpty = {
  args: {
    loading: false,
    rating: 0,
    showData: true,
    totalRatings: 0
  }
};
