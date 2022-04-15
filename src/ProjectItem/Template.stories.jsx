import React from "react";
import { ProjectItem } from "./ProjectItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Global/ProjectItem",
  component: ProjectItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProjectItem {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: [
    {
      title: "Hangarworldwide Website",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
    {
      title: "Organic Website",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
    {
      title: "OrTracker App",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
    {
      title: "Marco Pizza",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
    {
      title: "Landofrost Website",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
    {
      title: "Mergeworld Website",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
    {
      title: "ArmorAll Redesign",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
    {
      title: "Hangar Careers Website",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
    {
      title: "CafeBritt Website",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
    {
      title: "STP Website",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
    {
      title: "Criticalmass Website",
      description:
        "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
      color: "#FFCBD1",
    },
  ],
};
