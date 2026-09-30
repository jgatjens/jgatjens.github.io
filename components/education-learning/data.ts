import { IconChip, IconGraduationCap } from "@/components/icons";
import type { FlagType } from "./language-flag";

// Verified against the existing hardcoded Academic Background entries (resumen-content.tsx) — no CMS field exists for education.
export const formalEducation = [
  {
    dateRange: "2005 – 2008",
    institution: "Universidad Fidélitas",
    institutionSuffix: "Costa Rica",
    institutionUrl: "https://ufidelitas.ac.cr/",
    degree: "Bachelor's in Computer Science",
    icon: IconGraduationCap,
  },
  {
    dateRange: "2011 – 2012",
    institution: "Universidad Latina",
    institutionSuffix: "Costa Rica",
    institutionUrl: "https://ulatina.ac.cr/",
    degree: "Electrical and Electronics Engineering",
    icon: IconChip,
  },
];

// Italian/Japanese verified via resume "skills" field ("Currently learning Italian and Japanese").
// English/Spanish added as contextually-obvious (resume written in English, Costa Rica based) — no specific CEFR levels invented.
export const languages: { flag: FlagType; nameKey: string; statusKey: string; levelKey: string }[] = [
  { flag: "it", nameKey: "resume_education_lang_italian", statusKey: "resume_education_status_learning", levelKey: "resume_education_level_learning" },
  { flag: "jp", nameKey: "resume_education_lang_japanese", statusKey: "resume_education_status_learning", levelKey: "resume_education_level_learning" },
  { flag: "gb", nameKey: "resume_education_lang_english", statusKey: "resume_education_status_working", levelKey: "resume_education_level_professional" },
  { flag: "cr", nameKey: "resume_education_lang_spanish", statusKey: "resume_education_status_native", levelKey: "resume_education_level_native" },
];
