import ThcInputText from "../components/ThcInputText/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcInputText",
  component: ThcInputText,
  tags: ["autodocs"],
  argTypes: {
    label: { control: { type: "text" } },
    type: {
      control: { type: "radio" },
      options: ["text", "email", "number", "password", "color"]
    }
  }
};

export default meta;

export const Default = {
  args: {
    label: "Label Text",
    type: "text",
    value: ""
  }
};

export const Email = {
  parameters: {
    backgrounds: {
      default: "Green"
    }
  },
  args: {
    type: "email",
    value: "",
    useIcon: true,
    hideLabel: true,
    icon: "fas fa-envelope"
  }
};

export const Cash = {
  parameters: {
    backgrounds: {
      // 👇 Override default background value for this story
      default: "Green"
    }
  },
  args: {
    type: "number",
    value: "800",
    useIcon: false,
    hideLabel: true,
    variant: "cash"
  }
};
