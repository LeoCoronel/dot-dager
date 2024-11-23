// @ts-check
import { defineConfig } from "astro/config";
import paraglide from "@inlang/paraglide-astro";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "pi"],
    defaultLocale: "en",
  },
  output: "server",
  integrations: [
    tailwind(),
    react(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
  ],
});
