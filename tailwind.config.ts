import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#10b981",
          glow: "rgba(16, 185, 129, 0.4)",
        },
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          hover: "rgba(255, 255, 255, 0.08)"
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-satoshi)', 'var(--font-inter)'],
      }
    },
  },
  plugins: [],
};
export default config;
