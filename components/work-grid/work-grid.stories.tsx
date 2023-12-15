import type { Meta, StoryObj } from "@storybook/react";
import { WorkGrid } from "./work-grid";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof WorkGrid> = {
  title: "components/WorkGrid",
  component: WorkGrid,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof WorkGrid>;

export const Default: Story = {
  args: {
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
  },
};
