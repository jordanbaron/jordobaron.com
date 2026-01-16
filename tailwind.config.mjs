/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "garamond": ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
