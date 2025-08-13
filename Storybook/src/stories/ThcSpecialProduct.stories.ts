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
    campaign: {
      id: "SMKMX-824626-P",
      slug: "precio-especial",
      direction: "rtl",
      title: "Precio Especial",
      subtitle: "Estos productos!",
      copy: "Entra y checa nuestra selección con precios especiales, esta semana tenemos los gravity Bongs más high del condado!",
      disclaimer: "*Aplica restricciones",
      btnText: "Gravity Bongs",
      media: {
        alt: "Precio Especial",
        sizes: {
          small: "images/thcode-bong.png",
          medium: "images/thcode-bong.png",
          large: "images/thcode-bong.png"
        }
      },
      appearance: {
        bgColor: "#05FE88",
        bgHalfColor: "#2F9A68",
        buttonColor: "#11232F",
        buttonBgColor: "#05FE88",
        buttonBorderColor: "#2F9A68",
        bgImgProduct: "images/dollar-pattern-green.png"
      }
    }
  }
  // args: {
  //   loading: false,
  //   variant: "left",
  //   title: "Precio Especial",
  //   link: "/",
  //   btnText: "Gravity Bongs",
  //   media: {
  //     alt: "Bong",
  //     sizes: {
  //       small: "~/thcode-bong.png",
  //       medium: "~/thcode-bong.png",
  //       large: "~/thcode-bong.png"
  //     }
  //   }
  // }
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
