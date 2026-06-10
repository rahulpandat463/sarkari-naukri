import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35",
        "primary-dark": "#E55A2B",
        secondary: "#1B3A6B",
        "secondary-light": "#2A5298",
        accent: "#FF6B35",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        hindi: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
