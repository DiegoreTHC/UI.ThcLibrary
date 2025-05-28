import ThcSearchBar from "../components/ThcSearchBar/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcSearchBar",
  component: ThcSearchBar,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    categories: {
      control: {
        type: "Array"
      }
    },
    searchByCategory: {
      control: { type: "boolean" }
    },
    filterText: {
      control: { type: "text" }
    }
  },
  args: {
    searchByCategory: false
  }
};

export default meta;

export const Default = {
  args: {
    loading: false,
    searchByCategory: true,
    filterText: "Toda la tienda",
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

export const Single = {
  args: {
    loading: false,
    searchByCategory: false,
    categories: [
      {
        name: "Accesorios",
        categoryId: 4431,
        products: [
          {
            name: "Boquilla Raw",
            stock: 12,
            id: 1
          },
          {
            name: "Boquilla Snoop Dog",
            stock: 23,
            id: 2
          }
        ]
      },
      {
        name: "Bongs",
        categoryId: 4432,
        products: [
          {
            name: "Rick & Morty 12 oz Edicion especial",
            stock: 12,
            id: 1
          },
          {
            name: "Monster Glass",
            stock: 23,
            id: 2
          }
        ]
      },
      {
        name: "Blunts",
        categoryId: 4433,
        products: [
          {
            name: "Blase Susan",
            stock: 12,
            id: 1
          },
          {
            name: "Raw",
            stock: 23,
            id: 2
          },
          {
            name: "Cocoa Blunt",
            stock: 23,
            id: 2
          }
        ]
      }
    ]
  }
};
