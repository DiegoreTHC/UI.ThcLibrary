import ThcHamburger from "../components/ThcHamburger/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcHamburger",
  component: ThcHamburger,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    }
  }
};

export default meta;

export const Default = {
  args: {
    loading: false
  }
};

export const Loading = {
  args: {
    loading: true
  }
};
