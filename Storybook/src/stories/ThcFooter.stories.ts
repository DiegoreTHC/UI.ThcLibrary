import ThcFooter from "../components/ThcFooter/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcFooter",
  component: ThcFooter,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    }
  },
  args: {
    loading: true
  }
};

export default meta;

export const Primary = {
  args: {
    loading: false,
    socials: [
      {
        id: "32434234",
        name: "Facebook",
        icon: "fa-brands fa-facebook",
        link: "https://www.facebook.com/SmokersMorelia"
      },
      {
        id: "23132132",
        name: "Instagram",
        icon: "fa-brands fa-instagram",
        link: "https://www.instagram.com/smokersmoreliamx/"
      },
      {
        id: "54534543",
        name: "Spotify",
        icon: "fa-brands fa-spotify",
        link: "#"
      },
      {
        id: "4243244432",
        name: "Youtube",
        icon: "fa-brands fa-youtube",
        link: "#"
      }
    ],
    disclaimer:
      "Los productos mostrados en este sitio contienen únicamente los valores permitidos. De acuerdo a la legislación actual del CANNABIS en México."
  }
};
