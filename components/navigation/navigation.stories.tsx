import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from ".";

const meta: Meta<typeof Navigation> = {
  title: "components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    lang: "en",
  },
};
