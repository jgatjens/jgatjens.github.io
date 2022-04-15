import React from "react";
import DocsBlock from "./Docs-Block";
import tailwindcssConfig from "../../tailwind.config";

const fontSize = tailwindcssConfig.theme.extend.fontSize;
const keys = Object.keys(fontSize);

const DocsTypography = () => (
  <div>
    {keys.map((type, i) => (
      <DocsBlock size={fontSize[type][0]} weight="normal" key={i}>
        <h1 className={"text-" + type}>{type.toLowerCase()}</h1>
      </DocsBlock>
    ))}
  </div>
);

export default DocsTypography;
