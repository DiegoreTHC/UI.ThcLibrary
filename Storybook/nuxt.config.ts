// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/src/styles/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ["import"],
          additionalData: `
            @use "~/src/styles/utils";
            @use "~/src/styles/variables";
          `
        }
      }
    }
  }
});
