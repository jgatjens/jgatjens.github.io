'use client';

import ReactMarkdown from "react-markdown";
import type { WorkItemProps } from "@/utils/types";
import "./project-role-tech.css";

interface ProjectRoleTechProps {
    myRole?: string;
    techStack?: string;
    color?: string;
    roleLabel?: string;
    techLabel?: string;
}

/**
 * ProjectRoleTech Component
 * Displays project role and key technologies in a clean two-column layout
 * Stacks vertically on mobile
 */
export const ProjectRoleTech = ({
    myRole,
    techStack,
    color = "#4CAF50",
    roleLabel = "MY ROLE",
    techLabel = "KEY TECHNOLOGIES",
}: ProjectRoleTechProps) => {
    // Parse tech stack - split by "-" and clean up
    const technologies = techStack
        ?.split("-")
        .map((tech) => tech.trim())
        .filter((tech) => tech.length > 0) ?? [];

    // If no content to display, return null
    if (!myRole && technologies.length === 0) {
        return null;
    }

    return (
        <section className="w-full px-6 lg:px-0 py-16 lg:py-6">
            <div className="mx-auto max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: My Role */}
                    {myRole && (
                        <div className="flex flex-col">
                            <h3 className="text-caption uppercase font-semibold tracking-wide text-gray-600 mb-4 block">
                                {roleLabel}
                            </h3>
                            <div className="text-bodysmall leading-relaxed text-gray-800 prose prose-sm max-w-none">
                                <ReactMarkdown
                                    components={{
                                        p: ({ node, ...props }) => (
                                            <p className="mb-3 last:mb-0" {...props} />
                                        ),
                                    }}
                                >
                                    {myRole}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}

                    {/* Right Column: Key Technologies */}
                    {technologies.length > 0 && (
                        <div className="flex flex-col">
                            <h3 className="text-caption uppercase font-semibold tracking-wide text-gray-600 mb-4 block">
                                {techLabel}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={`${tech}-${index}`}
                                        className="tech-tag"
                                        style={{
                                            "--tech-color": color,
                                        } as React.CSSProperties & { "--tech-color": string }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
