import { addComponentsDir, defineNuxtModule } from "@nuxt/kit";
import { dirname } from "path";
import { resolve } from "pathe";
import { fileURLToPath } from "url";
import { name, version } from "../package.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNuxtModule({
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

    // console.log("DIR", nuxt.options);
    // if (nuxt.options.vite.mode === "development") {
    //   nuxt.options.css.push(resolve(__dirname, "runtime/styles/index.css"));
    //   return;
    // }
    console.log("DIR:", process.env.NODE_ENV);
    console.log("DIR", nuxt.options.css);
    nuxt.options.css.push(resolve(__dirname, "runtime/styles/index.scss"));
  }
});
