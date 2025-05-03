import ThcLogo from "../components/ThcLogo/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcLogo",
  component: ThcLogo,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    responsive: {
      control: { type: "boolean" }
    },
    name: {
      control: { type: "text" }
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "negative", "dark"]
    },
    mode: {
      control: { type: "radio" },
      options: ["full", "inline", "responsive"]
    }
  },
  args: {
    variant: "primary"
  }
};

export default meta;

export const Default = {
  args: {
    loading: false,
    variant: "primary",
    mode: "full",
    responsive: false
  }
};

export const Inline = {
  args: {
    loading: false,
    variant: "primary",
    mode: "inline",
    responsive: false
  }
};

export const Responsive = {
  args: {
    loading: false,
    variant: "primary",
    mode: "responsive",
    responsive: true
  }
};

export const Loading = {
  args: {
    loading: true,
    variant: "primary",
    mode: "responsive",
    responsive: true
  }
};

export const LoadingInline = {
  args: {
    loading: true,
    variant: "primary",
    mode: "inline",
    responsive: true
  }
};
