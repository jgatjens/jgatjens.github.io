import React from "react";
import { Navigation } from "./Navigation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Global/Navigation",
  component: Navigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const MockLink = (props) => <a {...props}>{props.children}</a>;

Default.args = {
  Link: MockLink,
  resume_title: "Resume",
};
