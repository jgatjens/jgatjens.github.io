"use client";

import type { Locale } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconDotSquare } from "@/components/icons";

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
  const isWhiteText = pathName?.includes("resume") ? "text-white" : "";
  const isResumePage = pathName?.includes("/resume");
  const isWorkPage = pathName?.includes("/work");
  const isHomePage = pathName === `/${lang}`;

  return (
    <nav
      aria-label="navigation"
      className={`flex justify-between items-center px-6 md:px-8 py-6 print:hidden backdrop-blur-sm`}
    >
      {/* Logo and Language Switcher */}
      <div className="flex items-center gap-2 md:gap-4">
        <Link
          href={`/${lang}`}
          className={`transition-transform duration-300 hover:scale-110 active:scale-95 ${isWhiteText}`}
          aria-label="Home"
        >
          <IconDotSquare className={`w-6 h-6 md:w-7 md:h-7 ${isWhiteText} cursor-pointer`} />
        </Link>

        <div className="w-px h-6 bg-current opacity-20"></div>

        <Link
          href={redirectedPathName(locale)}
          className={`text-xs md:text-sm font-semibold uppercase tracking-wider ${isWhiteText} hover:text-purple transition-colors duration-200 relative group`}
        >
          {locale}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple transform origin-left transition-transform duration-300 ${isWhiteText ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        </Link>
      </div>

      {/* Main Navigation Links */}
      <div className="flex gap-1 md:gap-2 lg:gap-6 items-center">
        <Link
          href={`/${lang}/resume`}
          className={`relative group text-sm md:text-base capitalize font-medium transition-colors duration-200 ${isWhiteText ? 'text-white' : 'text-current'} hover:text-purple`}
        >
          <span className={`relative pb-1`}>
            {t.nav_resume}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple rounded transform origin-left transition-transform duration-300 ${isResumePage ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </span>
        </Link>

        <Link
          href={`/${lang}/work`}
          className={`relative group text-sm md:text-base capitalize font-medium transition-colors duration-200 ${isWhiteText ? 'text-white' : 'text-current'} hover:text-purple`}
        >
          <span className={`relative pb-1`}>
            {t.nav_work}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple rounded transform origin-left transition-transform duration-300 ${isWorkPage ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </span>
        </Link>

        <a
          href="https://www.linkedin.com/in/jgatjens/details/recommendations/?detailScreenTabIndex=0"
          target="_blank"
          rel="noopener noreferrer"
          className={`relative group text-sm md:text-base capitalize font-medium transition-colors duration-200 ${isWhiteText ? 'text-white' : 'text-current'} hover:text-purple`}
        >
          <span className={`relative pb-1`}>
            {t.nav_recommendations}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple rounded transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></span>
          </span>
        </a>
      </div>
    </nav>
  );
};
