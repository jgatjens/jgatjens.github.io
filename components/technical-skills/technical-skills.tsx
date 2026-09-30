import { coreStack, expertiseGroups } from "./data";
import { TechBadge } from "./tech-badge";

interface TechnicalSkillsProps {
    t: any;
}

export const TechnicalSkills = ({ t }: TechnicalSkillsProps) => (
    <section className="max-w-6xl m-auto px-6 py-10 xl:px-0 md:py-20 border-t border-gray-200 print:border-t-0 print:py-4">
        {/* Screen version */}
        <div className="print:hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10 md:mb-14">
                <div>
                    <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
                        {t.resume_skills_eyebrow}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bluedark mb-4">
                        {t.resume_skills_heading}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {t.resume_skills_intro_left}
                    </p>
                </div>
                <div className="lg:flex lg:items-end">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {t.resume_skills_intro_right}
                    </p>
                </div>
            </div>

            {/* Core Engineering Stack */}
            <div className="mb-12 md:mb-16 rounded-xl bg-gray-50 border border-gray-100 px-6 md:px-8 py-6 md:py-8">
                <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple" />
                        <p className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-widest">
                            {t.resume_skills_core_label}
                        </p>
                    </div>
                    <p className="hidden md:block text-xs text-gray-400">{t.resume_skills_core_caption}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                    {coreStack.map((tech, i) => {
                        const cols = 3;
                        const isLastInRow = (i + 1) % cols === 0;
                        const isFirstRow = i < cols;
                        return (
                            <div
                                key={tech.name}
                                className={`flex items-center gap-3 ${!isLastInRow ? "md:border-r md:border-gray-200 md:pr-8" : ""} ${!isFirstRow ? "md:border-t md:border-gray-200 md:pt-6" : ""}`}
                            >
                                <TechBadge type={tech.badge} />
                                <div>
                                    <p className="text-sm font-semibold text-bluedark">{tech.name}</p>
                                    <p className="text-xs text-gray-500">{t[tech.descriptorKey]}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Supporting expertise grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                {expertiseGroups.map((group) => {
                    const Icon = group.icon;
                    return (
                        <div key={group.titleKey}>
                            <div className="flex items-center gap-2 mb-2">
                                <Icon className="w-5 h-5 text-gray-700" />
                                <h3 className="text-sm font-semibold text-bluedark uppercase tracking-wide">
                                    {t[group.titleKey]}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">{t[group.descKey]}</p>
                            <ul className="columns-2 gap-x-6 text-sm text-gray-700 leading-loose">
                                {group.tags.map((tag) => (
                                    <li key={tag} className="break-inside-avoid">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Print version: compact ATS-friendly text, no icons/backgrounds/dividers */}
        <div className="hidden print:block">
            <h2 className="text-base font-semibold uppercase mb-3">{t.resume_skills_heading}</h2>
            <div className="space-y-1 text-sm">
                {expertiseGroups.map((group) => (
                    <p key={group.titleKey} className="break-inside-avoid">
                        <strong>{t[group.titleKey]}:</strong> {group.tags.join(", ")}
                    </p>
                ))}
            </div>
        </div>
    </section>
);
