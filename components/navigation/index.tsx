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
  const isWhiteText = pathName.includes("resume") ? "text-white" : "";

  return (
    <nav aria-label="navigation" className={`flex justify-between px-5 py-4 print:hidden`}>
      <div className="flex items-center gap-3">
        <Link href="/">
          <IconDotSquare className={`w-5 h-5 ${isWhiteText} cursor-pointer`} />
        </Link>

        <Link
          href={redirectedPathName(locale)}
          className={`hover:text-red text-link ${isWhiteText} hover:dark:text-red uppercase`}
        >
          {locale}
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <Link
          locale={lang}
          href={`/resume`}
          className={`text-link capitalize hover:text-red ${isWhiteText} hover:dark:text-red`}
        >
          {t.nav_resume}
        </Link>
        <Link
          locale={lang}
          href="/work"
          className={`text-link capitalize hover:text-red ${isWhiteText} hover:dark:text-red`}
        >
          {t.nav_work}
        </Link>
      </div>
    </nav>
  );
};
