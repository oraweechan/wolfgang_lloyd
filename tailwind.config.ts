import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
        },
        teal: {
          DEFAULT: "#008080",
        },
        pink: {
          DEFAULT: "#FF1393",
        },
      },
    },
  },
  plugins: [],
};
export default config;
