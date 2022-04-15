// .storybook/manager.js

import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

import logo from "./icon.png";

addons.setConfig({
  theme: {
    brandTitle: "jgatjens",
    brandUrl: "https://jgatjens.com",
    brandImage: logo,
    colorPrimary: "#7F0FBB",
    barSelectedColor: "#7F0FBB",
    colorSecondary: "#4A5EED",
    ...themes.dark,
  },
});
