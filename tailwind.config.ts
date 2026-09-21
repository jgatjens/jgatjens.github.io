import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        h1: [
          "36px",
          {
            lineHeight: "40px",
            fontWeight: 500,
          },
        ],
        h2: [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "1px",
            fontWeight: 500,
          },
        ],
        h3: [
          "18px",
          {
            lineHeight: "26px",
            letterSpacing: "1px",
            fontWeight: 500,
          },
        ],
        h4: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "1px",
          },
        ],
        button: [
          "17px",
          {
            lineHeight: "17px",
            letterSpacing: "0.5px",
          },
        ],
        caption: [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.5px",
          },
        ],
        link: [
          "18px",
          {
            lineHeight: "24px",
          },
        ],
        body: [
          "18px",
          {
            lineHeight: "24px",
          },
        ],
        bodysmall: [
          "14px",
          {
            lineHeight: "22px",
          },
        ],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      purple: "#7F0FBB",
      "purple-700": "#E5D8FF",
      blue: "#4A5EED",
      bluedark: "#020243",
      red: "#FF2F4A",
      "red-700": "#ffcbd1",
      orange: "#FFA26B",
      cyan: "#4BF3FE",
      violet: "#C617FF",
      green: "#00C48C",
      black: "#020218",
      white: "#FFFFFF",
      "white-400": "#F5F5F5",
      gray: "#3F3356",
      "gray-50": "#F9FAFB",
      "gray-100": "#F3F4F6",
      "gray-200": "#E5E7EB",
      "gray-300": "#D1D5DB",
      "gray-400": "#9CA3AF",
      "gray-500": "#A0A0A0",
      "gray-600": "#4B5563",
      "gray-700": "#374151",
      "gray-800": "#1F2937",
      "gray-900": "#111827",
    },
    container: {
      center: true,
    },
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      space: ["var(--font-space-grotesk)", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
