import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/mdx-components.tsx"
  ],
  theme: {
    extend: {
      scale: {
        "175": "1.75",
        "200": "2",
        "250": "2.5",
        "300": "3",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-extra-slow": "spin 20s linear infinite",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      screens: {
        xs: "320px",
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
  plugins: [require("@tailwindcss/typography")],
};
export default config;
