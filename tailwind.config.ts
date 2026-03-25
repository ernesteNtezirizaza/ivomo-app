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
        primary: {
          DEFAULT: "#2D4B2A", // Dark Forest Green
          light: "#4A6B46",
          dark: "#1A2E19",
        },
        secondary: {
          DEFAULT: "#8B5E3C", // Earth Brown
          light: "#A67A5A",
          dark: "#634127",
        },
        accent: {
          DEFAULT: "#4682B4", // Steel Blue (Water)
          light: "#A0DCE0",
          dark: "#336699",
        },
        organic: {
          white: "#FDFCF8", // Off-white/Cream
          clay: "#D2691E",
          leaf: "#8FBC8F",
        }
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
