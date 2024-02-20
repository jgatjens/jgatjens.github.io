import type { Meta, StoryObj } from "@storybook/react";
import { HeaderResume } from "./header-resume";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof HeaderResume> = {
  title: "components/HeaderResume",
  component: HeaderResume,
  tags: ["autodocs"],
};

export default meta;

// const MockLink = (props: any) => <a {...props}>{props.children}</a>;

type Story = StoryObj<typeof HeaderResume>;

export const Default: Story = {
  args: {
    headline: "Jairo Gatjens",
    // link: MockLink,
  },
};
