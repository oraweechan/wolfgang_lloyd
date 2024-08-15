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
        primary: "#2b2e4a", // Dark Blue
        accent: "#e84545", // Red
        secondary: "#903749", // Dark Red
        darkPurple: "#53354a", // Dark Purple
        lightGray: "#d1d5db", // Light Gray for secondary text on dark background
        darkGray: "#4a4a4a", // Dark Gray for secondary text on light background
        dark: "#2b2e4a", // Alias for primary dark background
      },
      translate: {
        "100p": "100%",
        "-100p": "-100%",
      },
    },
  },
  plugins: [],
};
export default config;
