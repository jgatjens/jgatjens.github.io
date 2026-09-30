import { coreExpertiseGroups } from "./data";

interface CoreExpertiseProps {
    t: any;
}

export const CoreExpertise = ({ t }: CoreExpertiseProps) => (
    <section className="print:hidden border-t border-gray-200 max-w-5xl m-auto px-6 md:px-0 py-10 md:py-14">
        {/* Desktop: single row separated by thin dividers */}
        <div className="hidden md:flex md:divide-x md:divide-gray-200">
            {coreExpertiseGroups.map((group) => {
                const Icon = group.icon;
                return (
                    <div key={group.titleKey} className="flex-1 px-6 first:pl-0 last:pr-0">
                        <Icon className="w-5 h-5 text-purple mb-3" />
                        <h3 className="text-sm font-semibold text-bluedark mb-2">{t[group.titleKey]}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{group.tags.join(", ")}</p>
                    </div>
                );
            })}
        </div>

        {/* Mobile/tablet: two-column grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:hidden">
            {coreExpertiseGroups.map((group) => {
                const Icon = group.icon;
                return (
                    <div key={group.titleKey}>
                        <Icon className="w-5 h-5 text-purple mb-3" />
                        <h3 className="text-sm font-semibold text-bluedark mb-2">{t[group.titleKey]}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{group.tags.join(", ")}</p>
                    </div>
                );
            })}
        </div>
    </section>
);
