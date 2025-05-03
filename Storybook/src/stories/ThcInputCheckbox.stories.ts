import ThcInputCheckbox from "../components/ThcInputCheckbox/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcInputCheckbox",
  component: ThcInputCheckbox,
  tags: ["autodocs"]
};

export default meta;

export const Default = {
  args: {
    value: false
  }
};

export const Label = {
  args: {
    label: "Al subscribirte, aceptas recibir nuestros correos electrónicos.",
    value: true
  }
};
