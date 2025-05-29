import type { Meta, StoryObj } from "@storybook/vue3";
import ThcSkeleton from "../components/ThcSkeleton/index.vue";

const meta = {
  title: "Smokers.mx/ThcSkeleton",
  component: ThcSkeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "title", "subtitle", "product", "product-clothes", "categories"]
    },
    type: {
      control: { type: "select" },
      options: ["default", "image", "button", "title", "text"]
    }
  }
} satisfies Meta<typeof ThcSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "default",
    variant: "default",
    show: true
  }
};

export const WidthHeight: Story = {
  args: {
    type: "default",
    variant: "default",
    width: "40px",
    height: "18px",
    show: true
  }
};

export const Clean: Story = {
  args: {
    show: true,
    type: "default",
    variant: "default"
  }
};
