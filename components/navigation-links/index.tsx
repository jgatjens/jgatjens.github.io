'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n-config";

interface NavigationLinksProps {
    lang: Locale;
    t: any;
    className?: string;
    linkClassName?: string;
}

export const NavigationLinks = ({
    lang,
    t,
    className = "flex gap-6 items-center",
    linkClassName = "text-sm font-medium transition-colors duration-200 hover:text-purple",
}: NavigationLinksProps) => {
    const pathname = usePathname();

    const navigationLinks = [
        { label: t.nav_resume || "Resume", href: `/${lang}/resume`, isExternal: false },
        { label: t.nav_work || "Projects", href: `/${lang}/work`, isExternal: false },
        { label: t.nav_recommendations || "What People Say", href: "https://www.linkedin.com/in/jgatjens/details/recommendations/?detailScreenTabIndex=0", isExternal: true },
    ];

    return (
        <div className={className}>
            {navigationLinks.map((link) => {
                // Check if current path matches the link href
                const isActive = !link.isExternal && pathname.startsWith(link.href);

                if (link.isExternal) {
                    return (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative group ${linkClassName}`}
                        >
                            <span className="relative pb-1">
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple rounded transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                            </span>
                        </a>
                    );
                }

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`relative group ${linkClassName}`}
                    >
                        <span className="relative capitalize pb-1">
                            {link.label}
                            <span
                                className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple rounded transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                            />
                        </span>
                    </Link>
                );
            })}
        </div>
    );
};
