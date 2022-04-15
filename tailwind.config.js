module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      purple: "#7F0FBB",
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
      gray: "#3F3356",
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: [
          "36px",
          {
            lineHeight: "40px",
            fontWeight: 700,
          },
        ],
        h2: [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "1px",
          },
        ],
        h3: [
          "18px",
          {
            lineHeight: "26px",
            letterSpacing: "1px",
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
            fontFamily: "Open Sans",
          },
        ],
        body: [
          "18px",
          {
            lineHeight: "24px",
            fontFamily: "Open Sans",
          },
        ],
        bodysmall: [
          "14px",
          {
            lineHeight: "22px",
            fontFamily: "Open Sans",
          },
        ],
      },
    },
  },
};
