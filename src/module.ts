import { addComponentsDir, defineNuxtModule } from "@nuxt/kit";
import { dirname } from "path";
import { resolve } from "pathe";
import { fileURLToPath } from "url";
import { name, version } from "../package.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNuxtModule<{
  useCompiledCss: boolean;
}>({
  meta: {
    name,
    version,
    configKey: "UiThcLibrary"
  },
  setup(_, nuxt) {
    addComponentsDir({
      path: resolve(__dirname, "runtime/components"),
      pathPrefix: false
    });

    if (!_.useCompiledCss) {
      // Use SCSS during local development for easier debugging
      nuxt.options.css.push(resolve(__dirname, "runtime/styles/index.scss"));
    } else {
      // Use compiled CSS in production for performance
      nuxt.options.css.push(resolve(__dirname, "runtime/styles/index.css"));
    }
  }
});
