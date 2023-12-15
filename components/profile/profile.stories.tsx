import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "./profile";

const meta: Meta<typeof Profile> = {
  title: "components/Profile",
  component: Profile,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    image: {
      url: "/assets/img/profile.jpg",
      width: 144,
      height: 144,
    },
    headline: "Jairo Gätjens",
    location: "Santa Teresa, Costa Rica",
    description: "Experienced Software Developer based in Costa Rica.",
    button: {
      label: "hire me",
      link: "mailto:jgatjens@gmail.com",
    },
  },
};
