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
        forest: {
          50:  "#f0faf3",
          100: "#d8f3df",
          200: "#b4e7bf",
          300: "#80d196",
          400: "#4ab568",
          500: "#2a9a4a",
          600: "#1e7d3a",
          700: "#196430",
          800: "#175029",
          900: "#144223",
          950: "#0a2413",
        },
        ocean: {
          50:  "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        sand: {
          50:  "#fefcf7",
          100: "#fef7e8",
          200: "#fdedc5",
          300: "#fbdf98",
          400: "#f8c85a",
          500: "#f5b228",
          600: "#e69510",
          700: "#bf730d",
          800: "#985b11",
          900: "#7c4b13",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'DM Sans'", "system-ui", "sans-serif"],
        mono:    ["'DM Mono'", "monospace"],
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.5s ease-out forwards",
        "slide-left": "slideLeft 0.5s ease-out forwards",
        "float":      "float 6s ease-in-out infinite",
        "wave":       "wave 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%":      { transform: "translateX(-3%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
