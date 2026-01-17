/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        garamond: ["EB Garamond", "serif"],
      },
      colors: {
        background: {
          DEFAULT: "#141010",
          card: "#1E1814",
        },
        border: {
          DEFAULT: "#3D322A",
          hover: "#4D423A",
        },
        text: {
          DEFAULT: "#E8E0D8",
          muted: "#A89F91",
          faint: "#6B5E50",
        },
        badge: {
          book: "#3D322A",
          article: "#2A3D32",
        },
      },
    },
  },
  plugins: [],
};
