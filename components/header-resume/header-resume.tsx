import "./style.css";
import Link from "next/link";
import { IconArrow, IconWorld } from "@/components/icons";
import { Locale } from "@/i18n-config";

interface HeaderResumeProps {
  headline: string;
  lang: Locale;
}

export const HeaderResume = ({ headline, lang }: HeaderResumeProps) => (
  <header className="flex flex-col justify-center items-center mt-16 w-full h-96 print:h-64 bg-[#202255] relative">
    <div className="header-left resume-header-left"></div>
    <div className="header-left resume-header-right"></div>

    <div className="absolute top-10 flex text-white gap-3 uppercase items-center">
      <IconWorld className="w-5 h-5" />
    </div>

    <Link href={`/${lang}`}>
      <IconArrow className="text-white relative z-10 mb-5 hover:text-purple print:hidden" />
    </Link>

    <h1 className="font-sans relative z-10 font-semibold text-4xl text-center max-w-[210px] mb-10 print:max-w-full resume-header-title">
      {headline}
    </h1>

    <div className="resume-logo"></div>
  </header>
);
