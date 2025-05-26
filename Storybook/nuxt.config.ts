// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/storybook", "@davestewart/nuxt-scrollbar"],
  css: ["@/src/styles/index.scss"],
  components: [
    {
      path: "~/src/components",
      pathPrefix: false
    }
  ],
  imports: {
    dirs: [
      "src/utils" // auto-import utilities (e.g., helper functions)
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ["import"],
          additionalData: `
            @use "~/src/styles/variables" as *;
            @use "~/src/styles/utils" as *;
          `
        }
      }
    }
  }
});
