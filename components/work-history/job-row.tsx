"use client";

import Link from "next/link";
import type { Locale } from "@/i18n-config";
import { IconChevronDown, IconExternalLink } from "@/components/icons";
import type { JobCuration } from "./curation";

interface JobRowProps {
    index: number;
    company: string;
    company_url?: string;
    job_name: string;
    date: string;
    skills: string;
    curation: JobCuration;
    isOpen: boolean;
    onToggle: () => void;
    lang: Locale;
    t: any;
}

export const JobRow = ({
    index,
    company,
    company_url,
    job_name,
    date,
    skills,
    curation,
    isOpen,
    onToggle,
    lang,
    t,
}: JobRowProps) => {
    const bullets = skills
        ? skills
            .split(/\n-\s+/)
            .map((s) => s.replace(/^-\s+/, "").replace(/\n/g, " ").trim())
            .filter(Boolean)
        : [];
    const isCurrent = !/[-–]/.test(date);
    const displayDate = isCurrent ? `${date} – ${t.work_history_present}` : date;
    const displayName = curation.displayName || company;
    const visibleTags = curation.techTags.slice(0, 5);
    const remaining = curation.techTags.length - visibleTags.length;
    const panelId = `job-panel-${index}`;

    return (
        <div className={`border-b border-gray-100 last:border-0 rounded-lg transition-colors duration-200 ${isOpen ? "bg-gray-50" : ""}`}>
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full text-left py-5 md:py-6 px-4 md:px-6 rounded-lg hover:bg-gray-50/60 transition-colors duration-200"
            >
                <div className="flex flex-col gap-2 md:grid md:grid-cols-[150px_170px_1fr_auto] md:gap-6 md:items-center">
                    {/* Date */}
                    <div>
                        <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{displayDate}</p>
                        {isCurrent && (
                            <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wide text-green bg-green/10 px-2 py-0.5 rounded-full">
                                {t.work_history_current}
                            </span>
                        )}
                    </div>

                    {/* Company */}
                    <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-md bg-purple-700/50 text-purple text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {displayName.charAt(0)}
                        </span>
                        <span className="font-semibold text-bluedark">{displayName}</span>
                    </div>

                    {/* Role + summary */}
                    <div className="min-w-0">
                        <p className="font-semibold text-bluedark">{job_name}</p>
                        <p className="text-sm text-gray-600 mt-0.5 line-clamp-2 md:line-clamp-1">{t[curation.summaryKey]}</p>
                    </div>

                    {/* Technologies + chevron */}
                    <div className="flex items-center gap-3 md:justify-end">
                        <div className="flex flex-wrap gap-1.5">
                            {visibleTags.map((tag) => (
                                <span key={tag} className="text-[11px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded whitespace-nowrap">
                                    {tag}
                                </span>
                            ))}
                            {remaining > 0 && <span className="text-[11px] text-gray-400 px-1 whitespace-nowrap">+{remaining}</span>}
                        </div>
                        <IconChevronDown
                            className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`}
                        />
                    </div>
                </div>
            </button>

            <div
                id={panelId}
                role="region"
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <div className="overflow-hidden">
                    <div className="px-4 md:px-6 pb-6 md:pb-8">
                        {company_url && (
                            <a
                                href={company_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-purple hover:underline mb-4"
                            >
                                {t.work_history_visit_site}
                                <IconExternalLink className="w-3 h-3" />
                            </a>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8">
                            {bullets.length > 0 && (
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                                        {t.work_history_responsibilities_label}
                                    </p>
                                    <ul className="space-y-2">
                                        {bullets.map((bullet, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                                                <span className="w-1 h-1 rounded-full bg-purple mt-2 flex-shrink-0" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="space-y-6">
                                {curation.techTags.length > 0 && (
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                                            {t.work_history_technologies_label}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {curation.techTags.map((tag) => (
                                                <span key={tag} className="text-xs text-gray-700 bg-white border border-gray-200 px-2.5 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {curation.relatedWork && curation.relatedWork.length > 0 && (
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                                            {t.work_history_related_label}
                                        </p>
                                        <div className="flex flex-col gap-1.5">
                                            {curation.relatedWork.map((item) => (
                                                <Link
                                                    key={item.slug}
                                                    href={`/${lang}/work/${item.slug}`}
                                                    className="text-sm text-purple hover:underline inline-flex items-center gap-1 w-fit"
                                                >
                                                    {item.label} ↗
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
