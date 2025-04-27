import { addComponentsDir, defineNuxtModule } from "@nuxt/kit";
import { resolve } from "pathe";
import { name, version } from "../package.json";

export default defineNuxtModule({
  meta: {
    name,
    version,
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
