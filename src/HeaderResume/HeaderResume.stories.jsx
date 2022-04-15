import React from "react";
import { HeaderResume } from "./HeaderResume";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Global/HeaderResume",
  component: HeaderResume,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeaderResume {...args} />;

const MockLink = (props) => <a {...props}>{props.children}</a>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Jairo Gatjens",
  Link: MockLink,
};
