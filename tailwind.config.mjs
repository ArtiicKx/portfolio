/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blackPrimary: "#161513",
        blackSecondary: "#1C1C22",
        whitePrimary: "#F0F2F5",
        whiteSecondary: "#FFFFFF",
        greenPrimary: "#00D395",
        greenSecondary: "#00E3A0",
        gradient: {
          primary: "linear-gradient(180deg, #B16CEA 0%, #FF5E69 100%)",
          secondary: "linear-gradient(180deg, #FF8A56 0%, #FFA84B 100%)",
        },
      },
      animation: {
        "background-shine": "background-shine 4s linear infinite",
      },
      keyframes: {
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
