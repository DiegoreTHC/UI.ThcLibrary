const config = {
  stories: ["../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@chromatic-com/storybook"],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;
