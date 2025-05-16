import ThcZoomer from "../components/ThcZoomer/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcZoomer",
  component: ThcZoomer,
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
    src: "https://madewithnetworkfra.fra1.digitaloceanspaces.com/spatie-space-production/32539/vue3-zoomer.jpg",
    scale: 3,
    trigger: "click",
    "zoom-type": "drag"
  }
};
