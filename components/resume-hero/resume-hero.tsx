import Link from "next/link";
import type { Locale } from "@/i18n-config";
import { IconLocation, IconMail } from "@/components/icons";
import { PrintResumeButton } from "./print-resume-button";

interface ResumeHeroProps {
    headline: string;
    location: string;
    email: string;
    lang: Locale;
    t: any;
}

export const ResumeHero = ({ headline, location, email, lang, t }: ResumeHeroProps) => (
    <section className="print:pt-8 print:pb-0 max-w-6xl m-auto px-6 xl:px-0 pt-28 lg:pt-32 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            {t.resume_hero_eyebrow}
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bluedark leading-tight mb-6">
            {headline}
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">
            {t.resume_hero_summary}
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-8">
            <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 md:w-2.5 md:h-2.5 bg-green rounded-full flex-shrink-0" />
                <span className="first-letter:capitalize text-sm md:text-base text-gray-800 font-medium">
                    {t.work_cta_availability}
                </span>
            </div>

            <address className="not-italic flex flex-wrap items-center gap-x-6 gap-y-2 text-sm md:text-base text-gray-600">
                <span className="flex items-center gap-2">
                    <IconLocation className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    {location}
                </span>
                <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 hover:text-purple transition-colors duration-200"
                >
                    <IconMail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    {email}
                </a>
            </address>
        </div>

        <div className="print:hidden flex flex-wrap items-center gap-4 md:gap-6">
            <PrintResumeButton label={t.resume_hero_print_button} />

            <Link
                href={`/${lang}/work`}
                className="capitalize px-6 md:px-8 py-3 border border-gray-300 text-gray-800 font-semibold text-center rounded-md hover:border-black transition-colors duration-300 text-sm md:text-base whitespace-nowrap"
            >
                {t.resume_hero_view_projects} →
            </Link>

            <a
                href="https://www.linkedin.com/in/jgatjens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple transition-colors duration-200 font-medium text-sm md:text-base"
            >
                {t.resume_hero_linkedin} ↗
            </a>
        </div>
    </section>
);
