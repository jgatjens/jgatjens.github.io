import type { Meta, StoryObj } from "@storybook/react";
import { ButtonDownload } from "./button-download";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ButtonDownload> = {
  title: "components/Button Download",
  component: ButtonDownload,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ButtonDownload>;

export const Default: Story = {
  args: {
    label: "Resume",
  },
};
