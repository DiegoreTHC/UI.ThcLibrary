import ThcHeader from "../components/ThcHeader/index.vue";

const meta = {
  title: "Smokers.mx/ThcHeader",
  component: ThcHeader,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "outline", "icon"]
    }
  },
  args: {
    variant: "primary"
  }
};

export default meta;

export const Default = {
  args: {
    variant: "primary"
  }
};
