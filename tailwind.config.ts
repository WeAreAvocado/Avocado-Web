import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshiVariable: ['var(--font-satoshi-variable)'],
        instrumentSerif: ['var(--font-instrument-serif)'],
      },
      colors: {
        "brand": "#8D9853"
      }
    },
  },
  plugins: [],
};
export default config;
