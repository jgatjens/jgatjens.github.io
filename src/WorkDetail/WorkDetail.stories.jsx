import React from "react";
import { WorkDetail } from "./WorkDetail";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Global/WorkDetail",
  component: WorkDetail,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <WorkDetail {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Mergeworld.com Website",
  description: ` Redesign of the official CriticalMass web site. They asked us to create a
  website with really cool animations and transitions for the user to
  explore. We did it and backed the site with a custom admin panel. That way
  the final administration user is now able to edit all the content on the
  website easily.`,
  image:
    "https://res.cloudinary.com/jgatjens/image/upload/v1649459418/work_mergeworld_7d63924c51.png",
  date: "Aug 2018 – Oct 2018",
  skills:
    "Wordpress Api, Nodejs, angularjs, gruntjs, sketchapp, sass, Mobile first.",
};
