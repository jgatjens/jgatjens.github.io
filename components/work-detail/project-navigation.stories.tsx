import type { Meta, StoryObj } from "@storybook/react";
import { ProjectNavigation } from "./project-navigation";

const meta = {
    title: "Work Detail/ProjectNavigation",
    component: ProjectNavigation,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ProjectNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        previous: {
            title: "Search Home Builders",
            slug: "search-home-builders",
            color: "#3178c6",
        },
        next: {
            title: "Interwell Health",
            slug: "interwell-health",
            color: "#ec4899",
        },
        lang: "en",
    },
    render: (args) => (
        <div className="bg-white">
            <ProjectNavigation {...args} />
        </div>
    ),
};

export const WithoutPrevious: Story = {
    args: {
        previous: null,
        next: {
            title: "Interwell Health",
            slug: "interwell-health",
            color: "#ec4899",
        },
        lang: "en",
    },
    render: (args) => (
        <div className="bg-white">
            <ProjectNavigation {...args} />
        </div>
    ),
};

export const WithoutNext: Story = {
    args: {
        previous: {
            title: "Search Home Builders",
            slug: "search-home-builders",
            color: "#3178c6",
        },
        next: null,
        lang: "en",
    },
    render: (args) => (
        <div className="bg-white">
            <ProjectNavigation {...args} />
        </div>
    ),
};

export const Spanish: Story = {
    args: {
        previous: {
            title: "Búsqueda de Constructores",
            slug: "busqueda-constructores",
            color: "#3178c6",
        },
        next: {
            title: "Salud Interwell",
            slug: "salud-interwell",
            color: "#ec4899",
        },
        lang: "es",
    },
    render: (args) => (
        <div className="bg-white">
            <ProjectNavigation {...args} />
        </div>
    ),
};
