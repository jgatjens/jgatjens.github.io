import type { Meta, StoryObj } from "@storybook/react";
import { dataResume } from "./data";
import { ResumenContent } from "./resumen-content";

const meta: Meta<typeof ResumenContent> = {
  title: "components/Resumen Content",
  component: ResumenContent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ResumenContent>;

export const Default: Story = {
  args: {
    ...dataResume,
  },
};
