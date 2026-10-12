import React from "react";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import { TechnicalSkills } from "@/components/technical-skills";
import { EducationLearning } from "@/components/education-learning";
import { WorkHistory } from "@/components/work-history";

interface ResumenContentProps {
  history: {
    company: string;
    company_url: string;
    job_name: string;
    date: string;
    skills: string;
  }[];
  lang: Locale;
  t: any;
}

export const ResumenContent = ({
  history,
  lang,
  t,
}: ResumenContentProps) => {
  return (
    <div className="container text-[#3b3e48]">
      <WorkHistory history={history} lang={lang} t={t} />

      <section className="max-w-6xl m-auto px-6 xl:px-0 py-10 md:py-16 border-t border-gray-200 print:py-4 print:border-t-0">
        <h2 className="text-3xl md:text-4xl font-bold text-bluedark mb-6 print:text-base">{t.resume_projects_heading}</h2>
        <p className="text-sm text-gray-500 mb-2">{t.resume_project_date}</p>
        <h3 className="font-semibold text-bluedark mb-3">
          <Link href={`/${lang}/work/elancohub`} className="hover:text-purple">{t.resume_project_title}</Link>
        </h3>
        <p className="text-base text-gray-600 leading-relaxed max-w-4xl print:text-sm">{t.resume_project_copy}</p>
        <Link href={`/${lang}/work/elancohub`} className="inline-flex items-center mt-4 text-sm font-semibold text-purple hover:underline">
          {t.resume_project_link} →
        </Link>
      </section>

      <TechnicalSkills t={t} />

      <EducationLearning t={t} lang={lang} />
    </div>
  );
};
