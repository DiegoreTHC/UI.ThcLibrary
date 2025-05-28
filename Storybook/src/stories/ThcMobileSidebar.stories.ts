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
    ],
    categories: [
      {
        "category-name": "accesorios",
        stock: 11,
        products: [
          {
            id: "SMKMX-456116-P-PRDCT",
            "product-name": "PITO",
            slug: "pito",
            "category-slug": "accesorios",
            stock: 10
          },
          {
            id: "SMKMX-921223-T-PRDCT",
            "product-name": "Tip Helix",
            slug: "tip-helix",
            "category-slug": "accesorios",
            stock: 4
          },
          {
            id: "SMKMX-066280-L-PRDCT",
            "product-name": "Low Temp Captive Cap",
            slug: "low-temp-captive-cap",
            "category-slug": "accesorios",
            stock: 4
          },
          {
            id: "SMKMX-025987-P-PRDCT",
            "product-name": "Pink Blazy 1",
            slug: "pink-blazy-1",
            "category-slug": "accesorios",
            stock: 3
          },
          {
            id: "SMKMX-025986-P-PRDCT",
            "product-name": "Pink Blazy 2",
            slug: "pink-blazy-2",
            "category-slug": "accesorios",
            stock: 44
          },
          {
            id: "SMKMX-025985-P-PRDCT",
            "product-name": "Pink Blazy 3",
            slug: "pink-blazy-3",
            "category-slug": "accesorios",
            stock: 3
          },
          {
            id: "SMKMX-025984-P-PRDCT",
            "product-name": "Pink Blazy 4",
            slug: "pink-blazy-4",
            "category-slug": "accesorios",
            stock: 4
          },
          {
            id: "SMKMX-025983-P-PRDCT",
            "product-name": "Pink Blazy 5",
            slug: "pink-blazy-5",
            "category-slug": "accesorios",
            stock: 3
          },
          {
            id: "SMKMX-025982-P-PRDCT",
            "product-name": "Pink Blazy 6",
            slug: "pink-blazy-6",
            "category-slug": "accesorios",
            stock: 6
          },
          {
            id: "SMKMX-025981-P-PRDCT",
            "product-name": "Pink Blazy 7",
            slug: "pink-blazy-7",
            "category-slug": "accesorios",
            stock: 7
          },
          {
            id: "SMKMX-025980-P-PRDCT",
            "product-name": "Pink Blazy 8",
            slug: "pink-blazy-8",
            "category-slug": "accesorios",
            stock: 3
          }
        ]
      },
      {
        "category-name": "bongs",
        stock: 3,
        products: [
          {
            id: "SMKMX-981503-S-PRDCT",
            "product-name": "Spherical Pocket bubbler",
            slug: "spherical-pocket-bubbler",
            "category-slug": "bongs",
            stock: 44
          },
          {
            id: "SMKMX-473372-J-PRDCT",
            "product-name": "Jammer",
            slug: "Jammer",
            "category-slug": "bongs",
            stock: 12
          },
          {
            id: "SMKMX-214911-P-PRDCT",
            "product-name": "Puffco Proxy",
            slug: "puffco-proxy",
            "category-slug": "bongs",
            stock: 12
          }
        ]
      },
      {
        "category-name": "blunts",
        stock: 4,
        products: [
          {
            id: "SMKMX-942105-D-PRDCT",
            "product-name": "Doble Ds Diamond THC-A Blunt",
            slug: "doble-ds-diamond-thc-a-blunt",
            "category-slug": "blunts",
            stock: 10
          },
          {
            id: "SMKMX-482205-T-PRDCT",
            "product-name": "Twisted Hemp Wraps",
            slug: "twisted-hemp-wraps",
            "category-slug": "blunts",
            stock: 33
          },
          {
            id: "SMKMX-735188-B-PRDCT",
            "product-name": "Blunt Wrap Silver",
            slug: "blunt-wrap-silver",
            "category-slug": "blunts",
            stock: 20
          },
          {
            id: "SMKMX-528724-L-PRDCT",
            "product-name": "Lion Rolling Circus",
            slug: "lion-rolling-circus",
            "category-slug": "blunts",
            stock: 100
          }
        ]
      },
      {
        "category-name": "nuestra-seleccion",
        stock: 5,
        products: [
          {
            id: "SMKMX-106018-A-PRDCT",
            "product-name": "Armored cab",
            slug: "armored-cab",
            "category-slug": "accesorios",
            stock: 10
          },
          {
            id: "SMKMX-942105-D-PRDCT",
            "product-name": "Doble Ds Diamond THC-A Blunt",
            slug: "doble-ds-diamond-thc-a-blunt",
            "category-slug": "blunts",
            stock: 10
          },
          {
            id: "SMKMX-981503-S-PRDCT",
            "product-name": "Spherical Pocket bubbler",
            slug: "spherical-pocket-bubbler",
            "category-slug": "bongs",
            stock: 44
          },
          {
            id: "SMKMX-921223-T-PRDCT",
            "product-name": "Tip Helix",
            slug: "tip-helix",
            "category-slug": "accesorios",
            stock: 4
          },
          {
            id: "SMKMX-735188-B-PRDCT",
            "product-name": "Blunt Wrap Silver",
            slug: "blunt-wrap-silver",
            "category-slug": "blunts",
            stock: 20
          }
        ]
      },
      {
        "category-name": "ponte-style",
        stock: 5,
        products: [
          {
            id: "SMKMX-025987-P-PRDCT",
            "product-name": "Pink Blazy 1",
            slug: "pink-blazy-1",
            "category-slug": "accesorios",
            stock: 3
          },
          {
            id: "SMKMX-025986-P-PRDCT",
            "product-name": "Pink Blazy 2",
            slug: "pink-blazy-2",
            "category-slug": "accesorios",
            stock: 3
          },
          {
            id: "SMKMX-025985-P-PRDCT",
            "product-name": "Pink Blazy 3",
            slug: "pink-blazy-3",
            "category-slug": "accesorios",
            stock: 3
          },
          {
            id: "SMKMX-025984-P-PRDCT",
            "product-name": "Pink Blazy 4",
            slug: "pink-blazy-4",
            "category-slug": "accesorios",
            stock: 3
          },
          {
            id: "SMKMX-025983-P-PRDCT",
            "product-name": "Pink Blazy 5",
            slug: "pink-blazy-5",
            "category-slug": "accesorios",
            stock: 3
          }
        ]
      },
      {
        "category-name": "en-rebajas",
        stock: 5,
        products: [
          {
            id: "SMKMX-921223-T-PRDCT",
            "product-name": "Tip Helix",
            slug: "tip-helix",
            "category-slug": "accesorios",
            stock: 4
          },
          {
            id: "SMKMX-735188-B-PRDCT",
            "product-name": "Blunt Wrap Silver",
            slug: "blunt-wrap-silver",
            "category-slug": "blunts",
            stock: 20
          },
          {
            id: "SMKMX-981503-S-PRDCT",
            "product-name": "Spherical Pocket bubbler",
            slug: "spherical-pocket-bubbler",
            "category-slug": "bongs",
            stock: 44
          },
          {
            id: "SMKMX-942105-D-PRDCT",
            "product-name": "Doble Ds Diamond THC-A Blunt",
            slug: "doble-ds-diamond-thc-a-blunt",
            "category-slug": "blunts",
            stock: 10
          },
          {
            id: "SMKMX-106018-A-PRDCT",
            "product-name": "Armored cab",
            slug: "armored-cab",
            "category-slug": "accesorios",
            stock: 10
          }
        ]
      }
    ]
  }
};

export const Loading = {
  args: {
    loading: true
  }
};
