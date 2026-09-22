'use client';

import React from 'react';
import Link from 'next/link';
import { IconLocation } from '@/components/icons';

interface SecondaryLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

interface CtaSectionProps {
    // New design props
    eyebrow?: string;
    question?: string;
    description?: string;
    availability?: string;
    location?: string;
    buttonLabel?: string;
    buttonHref?: string;
    secondaryLinks?: SecondaryLink[];
    lang?: string;
    // Legacy props (for backward compatibility)
    subtitle?: string;
    href?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
    eyebrow = "LET'S WORK TOGETHER",
    question = "Have a project in mind?",
    description = "I build modern web applications, frontend systems and AI-powered experiences that help businesses grow.",
    availability = "Available for new opportunities",
    location = "Remote · Costa Rica",
    buttonLabel = "Let's Talk",
    buttonHref = "#contact",
    secondaryLinks,
    lang = "en"
}) => {
    // Build secondary links with language-prefixed routes
    const defaultSecondaryLinks = [
        { label: "Email me", href: "mailto:jgatjens@gmail.com", isExternal: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/jgatjens", isExternal: true },
        { label: "View Resume", href: `/${lang}/resume`, isExternal: false },
    ];

    const links = secondaryLinks || defaultSecondaryLinks;

    return (
        <div className="print:hidden bg-gray-200 w-full relative md:bg-transparent md:min-h-[550px] mt-4 md:mt-16 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute hidden md:block w-[60%] left-auto right-0 inset-0 h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/img/lets-talk-background.jpg')",
                }}
                aria-hidden="true"
            />

            {/* Gradient Overlay - White to Transparent (Left to Right) */}
            <div
                className="absolute hidden md:block inset-0 bg-gradient-to-r from-white from-40% via-white/70 via-60% to-transparent to-80%"
                aria-hidden="true"
            />

            {/* Elliptical Gradient - Top diffusion effect */}
            <div
                className="absolute hidden md:block top-0 left-0 right-0 h-1/3 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 150% 100% at 50% 0%, rgba(255, 255, 255, 0.35) 0%, transparent 70%)',
                }}
                aria-hidden="true"
            />

            {/* Content Container */}
            <div className="max-w-5xl mx-auto relative z-10 flex items-center justify-start min-h-[400px] md:min-h-[480px]">
                <div className="w-full px-6 py-10 md:px-0 md:py-12 lg:py-20">
                    {/* Line and Eyebrow inline */}
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="h-px bg-black w-8" />
                        <p className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-widest">
                            {eyebrow}
                        </p>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-bluedark mb-2 md:mb-6 leading-tight">
                        {question}
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-base md:text-lg text-gray-700 mb-4 md:mb-8 leading-relaxed max-w-xl">
                        {description}
                    </p>

                    {/* Availability and Location on same row */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 mb-6 md:mb-8">
                        <div className="flex items-center gap-3">
                            <span className="inline-block w-2 h-2 md:w-2.5 md:h-2.5 bg-green rounded-full flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-800 font-medium">{availability}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IconLocation className="w-4 h-4 text-gray-600 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-600">{location}</span>
                        </div>
                    </div>

                    {/* Button and Secondary Links on same row */}
                    <div className="flex flex-col justify-center md:justify-normal sm:flex-row sm:items-center gap-4 sm:gap-6">
                        {/* Primary Button */}
                        <a
                            href={buttonHref}
                            className="px-6 md:px-12 py-3 md:py-3 bg-black text-white font-semibold text-center rounded-md hover:shadow-lg transition-all duration-300 text-sm md:text-base whitespace-nowrap"
                        >
                            {buttonLabel} →
                        </a>

                        {/* Secondary Links */}
                        <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
                            {links.map((link, _) => (
                                <React.Fragment key={link.href}>
                                    {link.isExternal ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-purple transition-colors duration-200 font-medium"
                                        >
                                            {link.label} ↗
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-gray-600 hover:text-purple transition-colors duration-200 font-medium"
                                        >
                                            {link.label} ↗
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Bottom tagline */}
                    <div className="mt-10 md:mt-12">
                        <div className="h-px bg-gray-400 mb-3 md:mb-4 w-8" />
                        <p className="text-xs sm:text-sm text-gray-600">Let&apos;s build something great together.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
