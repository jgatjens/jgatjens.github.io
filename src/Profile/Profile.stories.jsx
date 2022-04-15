import React from "react";
import { Profile } from "./Profile";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Global/Profile",
  component: Profile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  img: "/assets/img/profile.jpg",
  title: "Jairo Gätjens",
  location: "Santa Teresa, Costa Rica",
  description: "Experienced Software Developer based in Costa Rica.",
  button: {
    label: "hire me",
    link: "mailto:jgatjens@gmail.com",
  },
};
