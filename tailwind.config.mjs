/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "spin-slow-reverse": "spin-reverse 25s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" }, // Rotación inversa
        },
      },
    },
  },
  plugins: ["preline/plugin", typography, forms, "preline/dropdown"],
};
