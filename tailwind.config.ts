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
            // fontFamily: "Open Sans",
          },
        ],
        body: [
          "18px",
          {
            lineHeight: "24px",
            // fontFamily: "Open Sans",
          },
        ],
        bodysmall: [
          "14px",
          {
            lineHeight: "22px",
            // fontFamily: "Open Sans",
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
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
