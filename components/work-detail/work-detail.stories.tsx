import type { Meta, StoryObj } from "@storybook/react";
import { WorkDetail } from "./work-detail";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof WorkDetail> = {
  title: "components/WorkDetail",
  component: WorkDetail,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof WorkDetail>;

export const Default: Story = {
  args: {
    headline: "Mergeworld.com Website",
    description: ` Redesign of the official CriticalMass web site. They asked us to create a
    website with really cool animations and transitions for the user to
    explore. We did it and backed the site with a custom admin panel. That way
    the final administration user is now able to edit all the content on the
    website easily.`,
    media: {
      url: "https://res.cloudinary.com/jgatjens/image/upload/v1649459418/work_mergeworld_7d63924c51.png",
    },
    date: "Aug 2018 – Oct 2018",
    tech_stack: `- Wordpress Api
      - Nodejs
      - angularjs
      - gruntjs
      - sketchapp
      - sass
      - Mobile first.
    `,
    url: "https://mergeworld.com/",
    url_next_work: "landofrost",
    url_prev_work: "ortracker-app",
  },
};
