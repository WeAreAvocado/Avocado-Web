import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      screens: {
        xs: "480px",
      },
      fontFamily: {
        satoshiVariable: ["var(--font-satoshi-variable)"],
        instrumentSerif: ["var(--font-instrument-serif)"],
      },
      colors: {
        brand: "#8D9853",
      },
    },
  },
  plugins: [],
};
export default config;
