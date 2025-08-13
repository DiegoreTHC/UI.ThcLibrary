export default defineNuxtConfig({
  modules: ["../src/module"],
  myModule: {},
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ["import"],
          additionalData: `
            import "@thcode-society/icons/dist/thc-icons.css";
          `
        }
      }
    }
  }
});
