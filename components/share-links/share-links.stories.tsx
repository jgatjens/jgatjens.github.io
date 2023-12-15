import type { Meta, StoryObj } from "@storybook/react";
import { ShareLinks } from "./share-links";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ShareLinks> = {
  title: "components/ShareLinks",
  component: ShareLinks,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ShareLinks>;

export const Default: Story = {};
