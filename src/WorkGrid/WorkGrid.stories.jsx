import React from "react";
import { WorkGrid } from "./WorkGrid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Global/WorkGrid",
  component: WorkGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <WorkGrid {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: [
    {
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cdn-36_img-1.jpg",
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cdn-36_img-2.jpg",
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cdn-36_img-3.jpg",
    },
  ],
};
