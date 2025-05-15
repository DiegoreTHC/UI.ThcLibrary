import ThcModal from "../components/ThcModal/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcModal",
  component: ThcModal,
  tags: ["autodocs"],
  argTypes: {
    title: { control: { type: "text" } },
    show: { control: { type: "boolean" } }
  }
};

export default meta;

export const Default = {
  render: (args: object) => ({
    components: { ThcModal },
    setup() {
      return { args };
    },
    template: `
		<Thc-Modal v-bind='args' />
	`
  }),
  args: {
    title: "Modal Title",
    show: true
  }
};
