import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { themes } from "@storybook/theming";
import { type Preview } from "@storybook/vue3";

const MobileViewPorts = {
  iPhone16: {
    name: "iPhone 16",
    styles: {
      width: "497px",
      height: "600px"
    },
    type: "mobile"
  }
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "Dark", value: "#11232f" },
        { name: "Light", value: "#FFF" },
        { name: "Green", value: "#05FE88" }
      ],
      default: "Dark"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      theme: themes.dark
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...MobileViewPorts
      }
    }
  }
};

export default preview;
