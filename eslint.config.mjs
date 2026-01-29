import antfu from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    type: "app",
    vue: true,
    typescript: true,
    formatters: false,

    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: "",
  }, {
    rules: {
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "unicorn/filename-case": ["error", {
        case: "camelCase",
        ignore: ["README.md"],
      }],
    },
  }),
);
