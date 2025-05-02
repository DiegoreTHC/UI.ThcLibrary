import ThcButton from "../components/ThcButton/Index.vue";

const meta = {
  title: "Smokers.mx/ThcButton",
  component: ThcButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "outline", "icon"]
    }
  },
  args: {
    variant: "primary"
  }
};

export default meta;

export const Default = {
  args: {
    loading: false,
    variant: "primary"
  }
};

export const Outline = {
  args: {
    loading: false,
    variant: "outline"
  }
};

export const IconButton = {
  args: {
    loading: false,
    variant: "icon",
    iconButton: true,
    icon: "fas fam-weed-full"
  }
};

export const IconLeft = {
  args: {
    loading: false,
    variant: "icon",
    prependIcon: true,
    icon: "fas fa-chevron-left"
  }
};

export const IconRight = {
  args: {
    loading: false,
    variant: "icon",
    prependIcon: false,
    icon: "fas fa-chevron-right"
  }
};

export const AnchorLink = {
  args: {
    loading: false,
    variant: "primary",
    href: "#"
  }
};
