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
        media: {
          url: "https://res.cloudinary.com/jgatjens/image/upload/v1649459418/work_mergeworld_7d63924c51.png",
        },
        date: "Aug 2018 – Oct 2018",
        url_next_work: "landofrost",
        url_prev_work: "ortracker-app",
        url: "https://mergeworld.com/",
        tech_stack: `- Wordpress Api
          - Nodejs
          - angularjs
          - gruntjs
          - sketchapp
          - sass
          - Mobile first.
        `,
        lang: "en",
        t_tech_title: "Tech stack",
        t_button_label: "Visit website",
      },
      {
        headline: "Organic Website",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
        media: {
          url: "https://res.cloudinary.com/jgatjens/image/upload/v1649459418/work_mergeworld_7d63924c51.png",
        },
        date: "Aug 2018 – Oct 2018",
        url_next_work: "landofrost",
        url_prev_work: "ortracker-app",
        url: "https://mergeworld.com/",
        tech_stack: `- Wordpress Api
          - Nodejs
          - angularjs
          - gruntjs
          - sketchapp
          - sass
          - Mobile first.
        `,
        lang: "en",
        t_tech_title: "Tech stack",
        t_button_label: "Visit website",
      },
      {
        headline: "OrTracker App",
        slug: "#",
        description:
          "Redesign of the official CriticalMass web site. They asked us to create a website with really cool animations and transitions for the user to explore. We did it and backed the site with a custom admin panel. That way the final administration user is now able to edit all the content on the website easily. ",
        color: "#FFCBD1",
        media: {
          url: "https://res.cloudinary.com/jgatjens/image/upload/v1649459418/work_mergeworld_7d63924c51.png",
        },
        date: "Aug 2018 – Oct 2018",
        url_next_work: "landofrost",
        url_prev_work: "ortracker-app",
        url: "https://mergeworld.com/",
        tech_stack: `- Wordpress Api
          - Nodejs
          - angularjs
          - gruntjs
          - sketchapp
          - sass
          - Mobile first.
        `,
        lang: "en",
        t_tech_title: "Tech stack",
        t_button_label: "Visit website",
      },
    ],
  },
};
