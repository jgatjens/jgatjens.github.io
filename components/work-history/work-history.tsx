"use client";

import { useState } from "react";
import type { Locale } from "@/i18n-config";
import { JobRow } from "./job-row";
import { jobCurations } from "./curation";

interface HistoryEntry {
    company: string;
    company_url?: string;
    job_name: string;
    date: string;
    skills: string;
}

interface WorkHistoryProps {
    history: HistoryEntry[];
    lang: Locale;
    t: any;
}

const emptyCuration = { techTags: [] as string[], summaryKey: "" };

export const WorkHistory = ({ history, lang, t }: WorkHistoryProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="max-w-6xl  m-auto px-6 xl:px-0 py-14 md:py-20 border-t border-gray-200 print:pt-0 print:border-t-0 print:py-4">
            {/* Screen version: interactive accordion */}
            <div className="print:hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10 md:mb-14">
                    <div>
                        <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
                            {t.work_history_eyebrow}
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bluedark mb-4">
                            {t.work_history_heading}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            {t.work_history_intro_left}
                        </p>
                    </div>
                    <div className="lg:flex lg:items-end">
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            {t.work_history_intro_right}
                        </p>
                    </div>
                </div>

                <div>
                    {history?.map((job, i) => (
                        <JobRow
                            key={`${job.company}-${job.date}-${i}`}
                            index={i}
                            company={job.company}
                            company_url={job.company_url}
                            job_name={job.job_name}
                            date={job.date}
                            skills={job.skills}
                            curation={jobCurations[i] || emptyCuration}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                            lang={lang}
                            t={t}
                        />
                    ))}
                </div>
            </div>

            {/* Print version: complete experience, regardless of accordion state */}
            <div className="hidden print:block">
                <h2 className="text-base font-semibold uppercase mb-3">{t.work_history_heading}</h2>
                <div className="space-y-4">
                    {history?.map((job, i) => {
                        const curation = jobCurations[i] || emptyCuration;
                        const bullets = job.skills
                            ? job.skills
                                .split(/\n-\s+/)
                                .map((s) => s.replace(/^-\s+/, "").replace(/\n/g, " ").trim())
                                .filter(Boolean)
                            : [];
                        const isCurrent = !/[-–]/.test(job.date);
                        const displayDate = isCurrent ? `${job.date} – ${t.work_history_present}` : job.date;
                        const displayName = curation.displayName || job.company;
                        return (
                            <div key={`${job.company}-${job.date}-${i}`} className="break-inside-avoid text-sm">
                                <p className="font-semibold">
                                    {displayDate} — {displayName} — {job.job_name}
                                </p>
                                {bullets.length > 0 && (
                                    <ul className="list-disc pl-4 mt-1 space-y-0.5 print:hidden">
                                        {bullets.map((bullet, b) => (
                                            <li key={b}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                                {curation.techTags.length > 0 && (
                                    <p className="mt-1">
                                        <strong>{t.work_history_technologies_label}:</strong> {curation.techTags.join(", ")}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
