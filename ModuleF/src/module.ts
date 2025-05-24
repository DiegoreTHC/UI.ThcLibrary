import { addComponentsDir, createResolver, defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "my-ui-library",
    configKey: "myUiLibrary"
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
    nuxt.options.css.push(resolver.resolve("runtime/styles/index.scss"));

    // SCSS preprocessor config
    nuxt.options.vite ||= {};
    nuxt.options.vite.css ||= {};
    nuxt.options.vite.css.preprocessorOptions ||= {};
    nuxt.options.vite.css.preprocessorOptions.scss = {
      includePaths: [resolver.resolve("runtime/styles")]
    };
  }
});
