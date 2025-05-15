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
