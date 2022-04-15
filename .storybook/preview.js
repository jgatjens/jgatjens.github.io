// tailwindcss 3 import
import "../public/css/main.css";

// const customViewports = {
//   Mobile: {
//     name: "Mobile",
//     styles: {
//       width: "375px",
//       height: "667px",
//     },
//   },
//   Tablet: {
//     name: "Tablet",
//     styles: {
//       width: "768px",
//       height: "1024px",
//     },
//   },
//   Desktop: {
//     name: "Desktop",
//     styles: {
//       width: "1440px",
//       height: "1024px",
//     },
//   },
// };

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  // viewport: {
  //   viewports: customViewports,
  // },
  backgrounds: {
    white: "#fff",
  },

  // https://storybook.js.org/addons/@whitespace/storybook-addon-html/
  html: {
    highlighter: {
      showLineNumbers: true, // default: false
      wrapLines: false, // default: true
    },
    prettier: {
      tabWidth: 4,
      innerWidth: 40,
      useTabs: true,
      bracketSameLine: false,
      htmlWhitespaceSensitivity: "ignore",
    },
  },
};
