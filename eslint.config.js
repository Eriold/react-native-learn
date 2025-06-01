// eslint.config.js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = defineConfig([
  expoConfig, // la configuración base de Expo
  {
    plugins: {
      prettier: prettierPlugin, // registra el plugin "prettier"
    },
    rules: {
      // dispara un error si algo no cumple con el formateo de Prettier
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
    ignores: ["dist/*"], // igual que antes, ignora la carpeta dist
  },
]);
