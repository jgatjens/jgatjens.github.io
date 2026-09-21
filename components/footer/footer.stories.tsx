import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer";

const meta = {
    title: "Components/Footer",
    component: Footer,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockTranslations = {
    nav_resume: "Resume",
    nav_work: "Projects",
    nav_recommendations: "What People Say",
};

export const English: Story = {
    args: {
        lang: "en",
        t: mockTranslations,
    },
};

export const Spanish: Story = {
    args: {
        lang: "es",
        t: mockTranslations,
    },
};

export const WithFullPage: Story = {
    args: {
        lang: "en",
        t: mockTranslations,
    },
    decorators: [
        (Story) => (
            <div className="flex flex-col bg-white">
                <div className="flex-1 flex items-center justify-center p-8 text-center text-gray-400">
                    <p>Page Content Goes Here</p>
                </div>
                <Story />
            </div>
        ),
    ],
};
