export default defineNuxtConfig({
  modules: ["../src/module"],
  devtools: { enabled: true },
  compatibilityDate: "2025-04-26",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ["import"],
          additionalData: `
            $primary-color: #4a90e2;
            $secondary-color: #f5f5f5;
            $font-size-base: 16px;
            $border-radius: 6px;
          `
        }
      }
    }
  }
});
