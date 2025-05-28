import ThcSpecialProduct from "../components/ThcSpecialProduct/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcSpecialProduct",
  component: ThcSpecialProduct,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    }
  },
  args: {
    loading: false
  }
};

export default meta;

export const Default = {
  args: {
    loading: false,
    variant: "left",
    title: "Precio Especial",
    link: "/",
    btnText: "Gravity Bongs",
    media: {
      alt: "Bong",
      sizes: {
        small: "~/thcode-bong.png",
        medium: "~/thcode-bong.png",
        large: "~/thcode-bong.png"
      }
    }
  }
};

export const Inverted = {
  args: {
    loading: false,
    variant: "right",
    title: "Precio Especial",
    link: "/",
    btnText: "Gravity Bongs",
    media: {
      alt: "Bong",
      sizes: {
        small: "~/thcode-bong.png",
        medium: "~/thcode-bong.png",
        large: "~/thcode-bong.png"
      }
    }
  }
};

export const Loading = {
  args: {
    loading: true,
    variant: "",
    title: "",
    link: "/",
    btnText: "",
    media: {
      alt: "Bong",
      sizes: {
        small: "~/thcode-bong.png",
        medium: "~/thcode-bong.png",
        large: "~/thcode-bong.png"
      }
    }
  }
};
