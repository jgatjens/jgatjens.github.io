import React from "react";
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

      <TechnicalSkills t={t} />

      <EducationLearning t={t} />
    </div>
  );
};
