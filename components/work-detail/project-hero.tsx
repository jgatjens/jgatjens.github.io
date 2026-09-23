'use client';

import Link from "next/link";
import { IconArrow, IconFatArrow } from "@/components/icons";
import { getCategoryLabel } from "@/utils/categories";
import { ProjectVisual } from "./project-visual";
import type { WorkItemProps } from "@/utils/types";
import type { Locale } from "@/i18n-config";
import "./project-hero.css";

interface ProjectHeroProps extends Partial<WorkItemProps> {
    lang: Locale;
    t_button_label?: string;
}

export const ProjectHero = ({
    headline,
    overview,
    date,
    media,
    url,
    color,
    categories,
    lang,
    t_button_label,
}: ProjectHeroProps) => {
    // Extract active categories
    // console.log("categories:", categories);

    // Handle nested categories structure and extract active ones
    let categoriesObj = categories;
    if (categoriesObj && typeof categoriesObj === 'object' && 'data' in categoriesObj) {
        categoriesObj = (categoriesObj as any).data?.attributes;
    }

    const activeCategoryKeys = categoriesObj && typeof categoriesObj === 'object'
        ? Object.entries(categoriesObj)
            .filter(([_, isActive]) => isActive === true)
            .map(([key]) => key)
        : [];

    // Format date to year only
    const year = date ? new Date(date).getFullYear() : null;

    // Convert project color to rgba with 6% opacity for hero background tint
    const hexToRgba = (hex: string | undefined, alpha: number = 0.06): string => {
        if (!hex || hex[0] !== "#") return "transparent";
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const heroTint = hexToRgba(color);

    return (
        <section className="w-full mt-20 px-6 lg:px-0 relative overflow-visible">
            <div className="mx-auto max-w-5xl relative">
                {/* Back Link */}
                <Link
                    href={`/${lang}/work`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
                    style={{ "--nav-color": color || "#4CAF50" } as React.CSSProperties}
                >
                    <span>
                        <IconArrow />
                    </span>
                    All projects
                </Link>

                {/* Two-column layout: Desktop; Single-column: Mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Column: Text Content Only */}
                    <div className="flex flex-col">
                        {/* Metadata: Category + Year */}
                        {(activeCategoryKeys.length > 0 || year) && (
                            <div
                                className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide mb-6 transition-colors duration-200"
                                style={{ color: color || "#4CAF50" }}
                            >
                                {activeCategoryKeys.map((cat, idx) => (
                                    <span key={cat}>
                                        {getCategoryLabel(cat)}
                                        {idx < activeCategoryKeys.length - 1 && <span className="mx-1">•</span>}
                                    </span>
                                ))}
                                {activeCategoryKeys.length > 0 && year && (
                                    <span className="mx-1">•</span>
                                )}
                                {year && <span>{year}</span>}
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4 lg:mb-6 leading-tight">
                            {headline}
                        </h1>

                        {/* Description */}
                        <p className="text-base lg:text-lg text-gray-700 mb-6 lg:mb-8 leading-relaxed">
                            {overview}
                        </p>

                        {/* Visit Link */}
                        {url && (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-visit-link capitalize"
                                style={{ "--link-color": color || "#3178c6" } as React.CSSProperties}
                            >
                                <span>{t_button_label || "Visit live project"}</span>
                                <IconFatArrow />
                            </a>
                        )}
                    </div>

                    {/* Right Column: Image - Normal grid cell */}
                    {media && media.url && (
                        <div className="hidden lg:block h-72">
                            <ProjectVisual
                                image={media}
                                color={color}
                                headline={headline}
                                heroTint={heroTint}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile version - inline below text */}
            {media && media.url && (
                <div className="lg:hidden px-6 mt-8">
                    <ProjectVisual
                        image={media}
                        color={color}
                        headline={headline}
                        heroTint={heroTint}
                    />
                </div>
            )}
        </section>
    );
};
