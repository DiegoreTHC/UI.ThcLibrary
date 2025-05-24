import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    rules: {
      quotes: [2, "double", { allowTemplateLiterals: true }],
      "no-extra-label": 2,
      "no-self-compare": 2,
      "no-unused-expressions": 2,
      "no-useless-call": 2,
      "no-useless-concat": 2,
      "no-useless-return": 2,
      "prefer-const": 2,
      camelcase: 2,
      indent: [2, "space", { SwitchCase: 1 }],
      "max-len": [4, { code: 120 }],
      "no-extra-semi": 2,
      "semi-style": [2, "last"],
      semi: 2,
      "no-multiple-empty-lines": [2, { max: 1 }],
      "vue/max-attributes-per-line": [
        "warn",
        {
          singleline: {
            max: 3
          },
          multiline: {
            max: 1
          }
        }
      ]
    }
  }
];
