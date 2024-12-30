import tailwindTypography from "@tailwindcss/typography";
import tailwindCssAnimated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#00635D",
        "primary-purple": "var(--accent)",
      },
    },
  },
  plugins: [tailwindTypography, tailwindCssAnimated],
};
