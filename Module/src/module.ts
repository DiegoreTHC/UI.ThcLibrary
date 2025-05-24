import { addComponentsDir, createResolver, defineNuxtModule } from "@nuxt/kit";
import { name, version } from "../package.json";

export default defineNuxtModule<{
  useCompiledCss?: boolean;
}>({
  meta: {
    name,
    version,
    configKey: "UiThcLibrary"
  },
  defaults: {
    useCompiledCss: false
  },
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url);

    const componentsPath = resolver.resolve("runtime/components");
    const stylesPath = resolver.resolve("runtime/styles");

    // ✅ Register components
    addComponentsDir({
      path: componentsPath,
      pathPrefix: false
    });

    // ✅ Log registered component dirs
    nuxt.hook("components:dirs", (dirs) => {
      console.log("\n📦 Components registered from ui-thc-library:");
      dirs.forEach((dir) => {
        if (dir.path.includes("thc") || dir.path === componentsPath) {
          console.log(`- ${dir.path}`);
        }
      });
      console.log("");
    });

    // ✅ Inject global SCSS for all Vue SFCs
    nuxt.options.vite ||= {};
    nuxt.options.vite.css ||= {};
    nuxt.options.vite.css.preprocessorOptions ||= {};
    nuxt.options.vite.css.preprocessorOptions.scss = {
      additionalData: `@use "index.scss" as *;`,
      includePaths: [stylesPath]
    };
  }
});
