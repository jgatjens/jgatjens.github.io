"use client";

import type { Locale } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconDotSquare } from "@/components/icons";
import { NavigationLinks } from "@/components/navigation-links";

interface NavigationProps {
  lang: Locale;
  t: any;
}

export const Navigation = ({ lang, t }: NavigationProps) => {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const locale = lang === "en" ? "es" : "en";
  const isResumePage = pathName?.includes("/resume");
  const bgWhite = isResumePage ? "bg-white shadow-sm" : "";

  return (
    <nav
      aria-label="navigation"
      className={`${bgWhite} flex justify-between items-center px-6 md:px-8 py-6 print:hidden backdrop-blur-sm`}
    >
      {/* Logo and Language Switcher */}
      <div className="flex items-center gap-2 md:gap-4">
        <Link
          href={`/${lang}`}
          className={`transition-transform duration-300 hover:scale-110 active:scale-95`}
          aria-label="Home"
        >
          <IconDotSquare className={`w-6 h-6 md:w-7 md:h-7 cursor-pointer`} />
        </Link>

        <div className="w-px h-6 bg-current opacity-20"></div>

        <Link
          href={redirectedPathName(locale)}
          className={`text-xs md:text-sm font-semibold uppercase tracking-wider hover:text-purple transition-colors duration-200 relative group`}
        >
          {locale}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple transform origin-left transition-transform duration-300`}></span>
        </Link>
      </div>

      {/* Main Navigation Links */}
      <NavigationLinks
        lang={lang}
        t={t}
        className="flex gap-2 lg:gap-4 items-center"
        linkClassName="relative group text-sm md:text-base capitalize font-medium transition-colors duration-200 hover:text-purple"
      />
    </nav>
  );
};
