import ThcTitle from "../components/ThcTitle/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcTitle",
  component: ThcTitle,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "dual", "dark"]
    },
    title: {
      control: { type: "text" }
    },
    highlightWords: {
      control: { type: "number" }
    }
  },
  args: {
    highlightWords: 2
  }
};

export default meta;

export const Primary = {
  args: {
    loading: false,
    highlightWords: 2,
    title: "Blunts para forjar",
    type: "h1",
    variant: "primary"
  }
};
export const Dual = {
  args: {
    loading: false,
    highlightWords: 2,
    title: "Papeles para rolar",
    type: "h4",
    variant: "dual"
  }
};
export const Dark = {
  args: {
    loading: false,
    title: "Más vendidos!",
    highlightWords: 1,
    type: "h3",
    variant: "dark"
  }
};

export const SplitHalf = {
  args: {
    loading: false,
    highlightWords: 1,
    title: "Ponte high! con PAX 3",
    type: "h2",
    variant: "primary",
    splitHalf: true
  }
};

export const Quote = {
  args: {
    loading: false,
    title: "Equipos Herbales",
    highlightWords: 1,
    type: "p",
    variant: "quote"
  }
};

export const Loading = {
  args: {
    loading: true
  }
};
