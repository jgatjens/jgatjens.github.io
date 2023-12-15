import type { Meta, StoryObj } from "@storybook/react";
import { ProjectItem } from "./project-item";

const meta: Meta<typeof ProjectItem> = {
  title: "components/ProjectItem",
  component: ProjectItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProjectItem>;

export const Default: Story = {
  args: {
    items: [
      {
        headline: "Hangarworldwide Website",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
      {
        headline: "Organic Website",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
      {
        headline: "OrTracker App",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
      {
        headline: "Marco Pizza",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
      {
        headline: "Landofrost Website",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
      {
        headline: "Mergeworld Website",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
      {
        headline: "ArmorAll Redesign",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
      {
        headline: "Hangar Careers Website",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
      {
        headline: "CafeBritt Website",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
      {
        headline: "STP Website",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
      {
        headline: "Criticalmass Website",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
      },
    ],
  },
};
