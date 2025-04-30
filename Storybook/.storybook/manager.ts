import { addons } from "@storybook/manager-api";
import thcTheme from "./theme";

addons.setConfig({
  theme: thcTheme,
  layout: "fullscreen"
});
