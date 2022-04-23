import { RouterContext } from "next/dist/shared/lib/router-context";
// tailwindcss 3 import
import "../public/css/main.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  backgrounds: {
    white: "#fff",
  },

  nextRouter: {
    Provider: RouterContext.Provider,
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
