import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Hire me",
  },
};

export const Secondary: Story = {
  args: {
    label: "Hire me",
    primary: true,
  },
};
