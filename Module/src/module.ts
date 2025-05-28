import { addComponentsDir, createResolver, defineNuxtModule } from "@nuxt/kit";
import { name, version } from "../package.json";

export default defineNuxtModule({
  meta: {
    name,
    version,
    configKey: "UiThcLibrary"
  },
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Register components
    addComponentsDir({
      path: resolver.resolve("runtime/components"),
      pathPrefix: false
    });

    // Inject global SCSS
    nuxt.options.css ||= [];

    if (!_.useCompiledCss) {
      // Use SCSS during local development for easier debugging
      nuxt.options.css.push(resolver.resolve("runtime/styles/index.scss"));
    } else {
      // Use compiled CSS in production for performance
      nuxt.options.css.push(resolver.resolve("runtime/styles/index.css"));
    }

    // SCSS preprocessor config
    nuxt.options.vite ||= {};
    nuxt.options.vite.css ||= {};
    nuxt.options.vite.css.preprocessorOptions ||= {};
    nuxt.options.vite.css.preprocessorOptions.scss = {
      includePaths: [resolver.resolve("runtime/styles")]
    };
  }
});
