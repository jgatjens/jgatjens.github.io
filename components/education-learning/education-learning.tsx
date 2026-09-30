import { IconBook } from "@/components/icons";
import { formalEducation, languages } from "./data";
import { LanguageFlag } from "./language-flag";

interface EducationLearningProps {
    t: any;
    lang: string;
}

export const EducationLearning = ({ t, lang }: EducationLearningProps) => (
    <section className="max-w-6xl m-auto px-6 md:px-0 py-14 md:py-20 border-t border-gray-200 print:border-t-0 print:py-4">
        {/* Screen version */}
        <div className="print:hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10 md:mb-14 pb-10 md:pb-14 border-b border-gray-200">
                <div>
                    <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
                        {t.resume_education_eyebrow}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bluedark mb-4">
                        {t.resume_education_heading}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {t.resume_education_intro_left}
                    </p>
                </div>
                <div className="lg:flex lg:items-end">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {t.resume_education_intro_right}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:divide-x lg:divide-gray-200">
                {/* Formal Education */}
                <div className="lg:pr-8">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple" />
                        <p className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-widest">
                            {t.resume_education_formal_label}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {formalEducation.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.institution}
                                    className="flex gap-4 rounded-lg border border-gray-100 bg-gray-50/60 px-5 py-5"
                                >
                                    <div className="w-11 h-11 rounded-full bg-purple-700/50 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-purple" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">{item.dateRange}</p>
                                        <a
                                            href={item.institutionUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-semibold text-bluedark hover:text-purple transition-colors duration-200"
                                        >
                                            {item.institution}, {item.institutionSuffix}
                                        </a>
                                        <p className="text-sm text-gray-600 mt-1">{item.degree}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Languages & Learning */}
                <div className="lg:pl-8">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                        <p className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-widest">
                            {t.resume_education_languages_label}
                        </p>
                    </div>

                    <div className="mb-8">
                        {languages.map((lang) => (
                            <div
                                key={lang.nameKey}
                                className="flex items-center justify-between gap-4 py-3 border-b border-gray-100 last:border-0"
                            >
                                <div className="flex items-center gap-3">
                                    <LanguageFlag type={lang.flag} />
                                    <div>
                                        <p className="text-sm font-semibold text-bluedark">{t[lang.nameKey]}</p>
                                        <p className="text-xs text-gray-500">{t[lang.statusKey]}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-medium text-purple bg-purple-700/40 px-3 py-1 rounded-full whitespace-nowrap">
                                    {t[lang.levelKey]}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 rounded-lg border border-gray-100 bg-gray-50/60 px-5 py-5">
                        <div className="w-11 h-11 rounded-full bg-purple-700/50 flex items-center justify-center flex-shrink-0">
                            <IconBook className="w-5 h-5 text-purple" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple" />
                                <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
                                    {t.resume_education_continuous_label}
                                </p>
                            </div>
                            <h3 className="font-semibold text-bluedark mb-1">{t.resume_education_continuous_heading}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{t.resume_education_continuous_copy}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Print version: compact ATS-friendly text, no icons/cards/flags */}
        <div className="hidden print:block">
            <h2 className="text-base font-semibold uppercase mb-3">{t.resume_education_heading}</h2>
            <div className="space-y-1 text-sm mb-3">
                {formalEducation.map((item) => (
                    <p key={item.institution} className="break-inside-avoid">
                        {item.dateRange} — {item.institution}, {item.institutionSuffix} — {item.degree}
                    </p>
                ))}
            </div>
            <p className="text-sm break-inside-avoid">
                <strong>{t.resume_education_languages_label}:</strong>{" "}
                {languages.map((lang) => `${t[lang.nameKey]} (${t[lang.levelKey]})`).join(", ")}
            </p>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-300 text-xs hidden print:block">
            <p>For the full interactive version of this resume, visit: https://jgatjens.vercel.app/{lang}/resume</p>
        </div>
    </section>
);
