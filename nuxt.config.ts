// https://nuxt.com/docs/api/configuration/nuxt-config
import postcssOptions from "./postcss.config";

export default defineNuxtConfig({
  css: ["@/assets/css/base.css"],
  postcss: {
    plugins: postcssOptions.plugins,
  },
});
