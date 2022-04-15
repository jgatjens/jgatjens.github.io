import React from "react";
import "../css/icons.css";
import {
  IconGithub,
  IconLinkedin,
  IconTwitch,
  IconTwitter,
  IconWorld,
} from "../../src/Icons/Icons";

const DocBlock = ({ children }) => (
  <div className="border-2 border-dark rounded-full text-left flex items-center justify-center hover:border-dark-blue hover:shadow">
    <div className="h-20 w-20 p-4 storybook-icon hover:text-red">
      {children}
    </div>
  </div>
);

const itemsArray = [
  IconGithub,
  IconLinkedin,
  IconTwitch,
  IconTwitter,
  IconWorld,
];

const DocsIcons = () => (
  <div className="container ">
    <div className="grid grid-cols-7 gap-5">
      {itemsArray.map((Cpm) => (
        <DocBlock>
          <Cpm />
        </DocBlock>
      ))}
    </div>
  </div>
);

export default DocsIcons;
