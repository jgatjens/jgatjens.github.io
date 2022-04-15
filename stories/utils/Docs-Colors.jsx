import React from "react";
import { ColorPalette, ColorItem } from "@storybook/addon-docs";
import tailwindcssConfig from "../../tailwind.config";

const colors = tailwindcssConfig.theme.colors;
const keys = Object.keys(colors);

const DocsColors = () => {
  const items = keys.map((key, i) => {
    let subtitle = "Primary Color";

    if (key.includes("-")) {
      subtitle = "Secondary Color";
    }

    if (key.includes("gold") || key.includes("orange")) {
      subtitle = "Supporting Color";
    }

    return (
      <ColorItem
        subtitle={subtitle}
        key={i}
        title={key.replace("-", " ")}
        colors={[colors[key]]}
      />
    );
  });

  return <ColorPalette>{items}</ColorPalette>;
};

export default DocsColors;
