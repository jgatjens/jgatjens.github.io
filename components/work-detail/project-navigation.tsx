'use client';

import Link from "next/link";
import { IconArrow, IconDotSquare } from "@/components/icons";
import type { Locale } from "@/i18n-config";

interface ProjectNavigationProps {
    previous?: {
        title: string;
        slug: string;
        color?: string;
    } | null;
    next?: {
        title: string;
        slug: string;
        color?: string;
    } | null;
    lang: Locale;
}

export const ProjectNavigation = ({
    previous,
    next,
    lang,
}: ProjectNavigationProps) => {
    return (
        <section className="w-full px-6 lg:px-0 py-6 md:py-8">
            <div className="mx-auto max-w-5xl">
                {/* Divider */}
                <div className="w-full h-px bg-gray-100 mb-2 md:mb-4"></div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 items-center">
                    {/* Left - Previous Project */}
                    {previous ? (
                        <Link
                            href={`/${lang}/work/${previous.slug}`}
                            className="group flex flex-col items-start gap-1 transition-all duration-300"
                            style={
                                {
                                    "--project-color": previous.color || "#000000",
                                } as React.CSSProperties
                            }
                        >
                            {/* Arrow + Label Row */}
                            <div className="flex items-center gap-2">
                                <span className="text-base lg:text-lg text-black transition-all duration-300 transform group-hover:-translate-x-1 flex-shrink-0">
                                    ←
                                </span>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Previous
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base md:text-lg font-bold text-black leading-snug transition-all duration-300 group-hover:opacity-75">
                                {previous.title}
                            </h3>
                        </Link>
                    ) : (
                        <div className="flex flex-col items-start gap-1">
                            {/* Arrow + Label Row */}
                            <div className="flex items-center gap-2">
                                <span className="text-base lg:text-lg text-gray-300 opacity-0 flex-shrink-0">
                                    ←
                                </span>
                                <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Previous
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base md:text-lg font-bold text-gray-300">
                                —
                            </h3>
                        </div>
                    )}

                    {/* Center - Logo */}
                    <div className="hidden lg:flex justify-center">
                        <IconDotSquare className="w-7 h-7 text-gray-400" />
                    </div>

                    {/* Right - Next Project */}
                    {next ? (
                        <Link
                            href={`/${lang}/work/${next.slug}`}
                            className="group flex flex-col items-end gap-1 transition-all duration-300 text-right"
                            style={
                                {
                                    "--project-color": next.color || "#000000",
                                } as React.CSSProperties
                            }
                        >
                            {/* Label + Arrow Row */}
                            <div className="flex items-center gap-2 flex-row-reverse">
                                <span className="text-base lg:text-lg text-black transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0">
                                    →
                                </span>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Next
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base md:text-lg font-bold text-black leading-snug transition-all duration-300 group-hover:opacity-75">
                                {next.title}
                            </h3>
                        </Link>
                    ) : (
                        <div className="flex flex-col items-end gap-1 text-right">
                            {/* Label + Arrow Row */}
                            <div className="flex items-center gap-2 flex-row-reverse">
                                <span className="text-base lg:text-lg text-gray-300 opacity-0 flex-shrink-0">
                                    →
                                </span>
                                <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Next
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base md:text-lg font-bold text-gray-300">
                                —
                            </h3>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 mt-2 md:mt-4"></div>
            </div>
        </section>
    );
};
