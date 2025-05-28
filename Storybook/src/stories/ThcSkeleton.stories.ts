import type { Meta, StoryObj } from "@storybook/vue3";
import ThcSkeleton from "../components/ThcSkeleton/index.vue";

const meta = {
  title: "Smokers.mx/ThcSkeleton",
  component: ThcSkeleton,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ThcSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: "100px"
  }
};

export const WidthHeight: Story = {
  args: {
    width: "40px",
    height: "18px"
  }
};

export const Clean: Story = {
  args: {}
};
