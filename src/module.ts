import { addComponentsDir, defineNuxtModule } from "@nuxt/kit";
import { resolve } from "pathe";

export default defineNuxtModule({
  meta: {
    name: "ui-thc-library",
    configKey: "UiThcLibrary"
  },
  setup(_, nuxt) {
    addComponentsDir({
      path: resolve(__dirname, "components"),
      pathPrefix: false
    });

    // Include global SCSS
    nuxt.options.css.push(resolve(__dirname, "runtime/styles/index.scss"));
  }
});
