import ThcNavLink from "../components/ThcNavLink/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcNavLink",
  component: ThcNavLink,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    arrow: {
      control: { type: "boolean" }
    },
    text: {
      control: { type: "text" }
    },
    to: {
      control: { type: "text" }
    },
    icon: {
      control: { type: "radio" },
      options: ["fas fa-angles-down", "fas fa-user-shield", "fas fa-bong"]
    }
  }
};

export default meta;

export const Default = {
  args: {
    loading: false,
    to: "/",
    text: "Nav Link"
  }
};

export const Icon = {
  args: {
    loading: false,
    to: "/",
    text: "Nav Link",
    icon: "fas fa-user-shield"
  }
};

export const Arrow = {
  args: {
    loading: false,
    to: "/",
    text: "Nav Link",
    arrow: true
  }
};

export const ArrowIcon = {
  args: {
    loading: false,
    to: "/",
    text: "Nav Link",
    arrow: true,
    icon: "fas fa-angles-down"
  }
};
