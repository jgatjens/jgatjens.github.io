import type { Preview } from "@storybook/react";
import "../globals.css";

const preview: Preview = {
  parameters: {
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

    // nextRouter: {
    //   Provider: RouterContext.Provider,
    // },

    // https://storybook.js.org/addons/@whitespace/storybook-addon-html/
    // html: {
    //   highlighter: {
    //     showLineNumbers: true, // default: false
    //     wrapLines: false, // default: true
    //   },
    //   prettier: {
    //     tabWidth: 4,
    //     innerWidth: 40,
    //     useTabs: true,
    //     bracketSameLine: false,
    //     htmlWhitespaceSensitivity: "ignore",
    //   },
    // },
  },
};

export default preview;
