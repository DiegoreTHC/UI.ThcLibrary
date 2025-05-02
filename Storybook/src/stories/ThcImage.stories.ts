import ThcImage from "../components/ThcImage/index.vue";

const meta = {
  title: "Smokers.mx/ThcImage",
  component: ThcImage,
  tags: ["autodocs"],
  argTypes: {
    imgSrc: { control: { type: "text" } },
    loading: { control: { type: "boolean" } },
    alt: { control: { type: "text" } }
  }
};

export default meta;

export const Default = {
  args: {
    imgSrc: "/thcode-bong.png",
    alt: "Gravity Bong"
  }
};

export const ImageBroken = {
  args: {
    imgSrc: "/thcode-bong.png.",
    alt: "Gravity Bong"
  }
};

export const loading = {
  args: {
    imgSrc: "/thcode-bong.png",
    alt: "Gravity Bong",
    loading: true
  }
};
