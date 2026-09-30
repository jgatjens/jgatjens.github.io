import { IconDatabase } from "@/components/icons";

export type TechBadgeType = "react" | "nextjs" | "typescript" | "nodejs" | "postgresql" | "graphql";

const wrapper = "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0";

export const TechBadge = ({ type }: { type: TechBadgeType }) => {
    switch (type) {
        case "react":
            return (
                <div className={`${wrapper} bg-[#E6F7FB]`}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#087EA4" strokeWidth="1.3">
                        <circle cx="12" cy="12" r="1.8" fill="#087EA4" stroke="none" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
                    </svg>
                </div>
            );
        case "nextjs":
            return (
                <div className={`${wrapper} bg-black`}>
                    <span className="text-white font-bold text-sm">N</span>
                </div>
            );
        case "typescript":
            return (
                <div className={`${wrapper} bg-[#3178C6]`}>
                    <span className="text-white font-bold text-xs">TS</span>
                </div>
            );
        case "nodejs":
            return (
                <div className={`${wrapper} bg-[#EAF6EA]`}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#3C873A" strokeWidth="1.3">
                        <path d="M12 2.5l8 4.6v9.8l-8 4.6-8-4.6V7.1l8-4.6z" strokeLinejoin="round" />
                    </svg>
                </div>
            );
        case "postgresql":
            return (
                <div className={`${wrapper} bg-[#E8F1F6]`}>
                    <IconDatabase className="w-6 h-6 text-[#336791]" />
                </div>
            );
        case "graphql":
            return (
                <div className={`${wrapper} bg-purple-700`}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#7F0FBB" strokeWidth="1.3">
                        <path d="M12 2.5l9 5.2v10.6l-9 5.2-9-5.2V7.7l9-5.2z" strokeLinejoin="round" />
                    </svg>
                </div>
            );
        default:
            return null;
    }
};
