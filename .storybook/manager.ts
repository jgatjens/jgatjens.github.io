// .storybook/manager.js
import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

// @ts-ignore
import logo from "./icon.png";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "jgatjens",
    brandUrl: "https://jgatjens.com",
    brandImage: logo,
    colorPrimary: "#7F0FBB",
    barSelectedColor: "#7F0FBB",
    colorSecondary: "#4A5EED",
  },
});
