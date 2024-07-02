import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        neutral: {
          orange: "#d9730d",
          gray_1: "#73716e",
          gray_2: "#787774",
          gray_3: "#f1f0f0",
          gray_4: "#e0e0e0",
          pink: "#ffe2dd",
          blue: "#f0f8ff",
        },
      },
    },
  },
  plugins: [],
};
export default config;
