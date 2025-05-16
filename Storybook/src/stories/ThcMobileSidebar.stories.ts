import ThcMobileSidebar from "../components/ThcMobileSidebar/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcMobileSidebar",
  component: ThcMobileSidebar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    }
  }
};

export default meta;

export const Default = {
  args: {
    loading: false,
    open: true,
    socialMedia: [
      {
        id: "SMKMX-774310-F",
        name: "Facebook",
        icon: "fa-brands fa-facebook",
        link: "https://www.facebook.com/SmokersMorelia"
      },
      {
        id: "SMKMX-871314-I",
        name: "Instagram",
        icon: "fa-brands fa-instagram",
        link: "https://www.instagram.com/smokersmoreliamx/"
      },
      {
        id: "SMKMX-908035-Y",
        name: "Youtube",
        icon: "fa-brands fa-youtube",
        link: "https://www.youtube.com/@smokersMx2788"
      },
      {
        id: "SMKMX-424946-W",
        name: "Whatsapp",
        icon: "fa-brands fa-whatsapp"
      }
    ],
    navigation: [
      {
        to: "parent",
        link: "Categorias",
        subLinks: [
          {
            id: "SMKMX-645083-A",
            name: "Accesorios",
            slug: "accesorios"
          },
          {
            id: "SMKMX-368205-B",
            name: "Bongs",
            slug: "bongs"
          },
          {
            id: "SMKMX-859202-B",
            name: "Blunts",
            slug: "blunts"
          },
          {
            id: "SMKMX-923356-D",
            name: "Detox",
            slug: "detox"
          },
          {
            id: "SMKMX-669934-E",
            name: "Equipos Herbales",
            slug: "equipos-herbales"
          },
          {
            id: "SMKMX-583342-E",
            name: "Equipos para ceras",
            slug: "equipos-para-ceras"
          },
          {
            id: "SMKMX-414706-G",
            name: "Grinders",
            slug: "grinders"
          },
          {
            id: "SMKMX-428372-P",
            name: "Papeles",
            slug: "papeles"
          },
          {
            id: "SMKMX-120489-P",
            name: "Pipas",
            slug: "pipas"
          },
          {
            id: "SMKMX-779128-R",
            name: "Refacciones",
            slug: "refacciones"
          }
        ]
      },
      {
        to: "parent",
        link: "Marcas",
        subLinks: [
          {
            id: "SMKMX-031353-B-PRDCT",
            name: "Blazy Sussan",
            slug: "blazy-sussan",
            media: {
              alt: "Blazy Sussan",
              sizes: {
                small: "images/brands/img-icon-gpen.png",
                medium: "images/brands/img-icon-gpen.png",
                large: "images/brands/img-icon-gpen.png"
              }
            }
          },
          {
            id: "SMKMX-081928-R-PRDCT",
            name: "Raw",
            slug: "raw",
            media: {
              alt: "Raw",
              sizes: {
                small: "images/brands/img-icon-gpen.png",
                medium: "images/brands/img-icon-gpen.png",
                large: "images/brands/img-icon-gpen.png"
              }
            }
          },
          {
            id: "SMKMX-538307-D-PRDCT",
            name: "Dynavap",
            slug: "dynavap",
            media: {
              alt: "Dynavap",
              sizes: {
                small: "images/brands/img-icon-gpen.png",
                medium: "images/brands/img-icon-gpen.png",
                large: "images/brands/img-icon-gpen.png"
              }
            }
          },
          {
            id: "SMKMX-990707-G-PRDCT",
            name: "G-Pen",
            slug: "g-pen",
            media: {
              alt: "G-Pen",
              sizes: {
                small: "images/brands/img-icon-gpen.png",
                medium: "images/brands/img-icon-gpen.png",
                large: "images/brands/img-icon-gpen.png"
              }
            }
          }
        ]
      },
      {
        to: "promociones",
        link: "Promociones",
        icon: "fas fa-angles-down"
      },
      {
        to: "somos-smokers",
        link: "Somos Smokers",
        icon: "fas fa-bong"
      },
      {
        to: "aviso-privacidad",
        link: "Aviso de privacidad",
        icon: "fas fa-shield-halved"
      }
    ]
  }
};

export const Loading = {
  args: {
    loading: true
  }
};
