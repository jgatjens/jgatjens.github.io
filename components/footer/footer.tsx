'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n-config";
import { IconDotSquare } from "@/components/icons";
import { ShareLinks } from "@/components/share-links/share-links";
import { NavigationLinks } from "@/components/navigation-links";
import { CtaSection } from "@/components/cta-section";

interface FooterProps {
    lang: Locale;
    t: any;
}

export const Footer = ({ lang, t }: FooterProps) => {
    const pathname = usePathname();
    const isHomePage = pathname === `/${lang}`;
    const showCta = !isHomePage;

    return (
        <>
            {/* CTA Section - Above Footer */}
            {showCta && (
                <CtaSection
                    eyebrow={t.work_cta_eyebrow}
                    question={t.work_cta_question}
                    description={t.work_cta_subtitle}
                    availability={t.work_cta_availability}
                    location={t.work_cta_location}
                    buttonLabel={t.work_cta_button}
                    tagline={t.work_cta_tagline}
                    buttonHref={`/${lang}#contact`}
                    lang={lang}
                />
            )}

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-white print:hidden">
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between gap-8 lg:gap-12 px-6 lg:px-8 py-6 lg:py-6">
                    {/* Left: Logo */}
                    {/* <Link
                        href={`/${lang}`}
                        className="flex-shrink-0 transition-transform duration-300 hover:scale-110 active:scale-95"
                        aria-label="Home"
                    >
                        <IconDotSquare className="w-6 h-6 text-black" />
                    </Link> */}

                    {/* Identity: Name and Role */}
                    <div className="flex-shrink-0">
                        {!isHomePage && (
                            <p className="text-sm font-semibold text-black">Jairo Gätjens</p>
                        )}
                        <p className="text-xs text-gray-500">Senior Software Engineer</p>
                    </div>

                    {/* Center/Right: Navigation Links */}
                    {!isHomePage && (
                        <NavigationLinks
                            lang={lang}
                            t={t}
                            className="flex gap-4 lg:gap-6 flex-1 justify-center"
                            linkClassName="text-sm font-medium text-black hover:text-purple transition-colors duration-200"
                        />
                    )}

                    {/* Spacer to maintain alignment when nav is hidden */}
                    {isHomePage && <div className="flex-1" />}

                    {/* Far Right: Social Icons */}
                    <div className="flex-shrink-0">
                        <ShareLinks />
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col gap-x-6 gap-y-2 px-6 py-6">
                    {/* Logo and Identity */}
                    <div className="flex items-center gap-3">
                        <Link
                            href={`/${lang}`}
                            className="flex-shrink-0 transition-transform duration-300 hover:scale-110 active:scale-95"
                            aria-label="Home"
                        >
                            <IconDotSquare className="w-5 h-5 text-black" />
                        </Link>
                        <div>
                            <p className="text-sm font-semibold text-black">Jairo Gätjens</p>
                            <p className="text-xs text-gray-500">Senior Software Developer</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    {!isHomePage && (
                        <NavigationLinks
                            lang={lang}
                            t={t}
                            className="flex flex-col gap-3 capitalize"
                            linkClassName="text-sm font-medium text-black hover:text-purple transition-colors duration-200"
                        />
                    )}

                    {/* Social Icons */}
                    <div className="pt-2">
                        <ShareLinks />
                    </div>
                </div>
            </footer>
        </>
    );
};
