import ThcSocials from "../components/ThcSocials/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcSocials",
  component: ThcSocials,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    size: {
      control: { type: "default" },
      options: ["default", "xl", "xxl"]
    }
  },
  args: {
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
    ]
  }
};

export default meta;

export const Large = {
  args: {
    loading: false,
    size: "xl"
  }
};

export const Loading = {
  args: {
    loading: true,
    size: "default"
  }
};

export const Default = {
  args: {
    loading: false,
    size: "default"
  }
};
