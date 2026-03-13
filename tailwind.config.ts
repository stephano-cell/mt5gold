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
        gold: {
          50: "#FFF9E6",
          100: "#FFF0BF",
          200: "#FFE080",
          300: "#FFD040",
          400: "#F5C518",
          500: "#D4AF37",
          600: "#B8960F",
          700: "#8C7000",
          800: "#604D00",
          900: "#342A00",
        },
        navy: {
          50: "#E8EAF0",
          100: "#C5C9D6",
          200: "#9DA3B8",
          300: "#757D9A",
          400: "#576184",
          500: "#39466E",
          600: "#313E66",
          700: "#27335B",
          800: "#1E2950",
          900: "#0F1535",
          950: "#080B1A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-4px)" },
          "40%": { transform: "translateX(4px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        "error-pulse": {
          "0%":   { boxShadow: "0 0 0 0 rgba(239,68,68,0)" },
          "30%":  { boxShadow: "0 0 0 4px rgba(239,68,68,0.35)" },
          "70%":  { boxShadow: "0 0 0 6px rgba(239,68,68,0.15)" },
          "100%": { boxShadow: "0 0 0 0 rgba(239,68,68,0)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        "error-pulse": "error-pulse 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
