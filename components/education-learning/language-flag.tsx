export type FlagType = "it" | "jp" | "gb" | "cr";

const wrapper = "w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-gray-100";

export const LanguageFlag = ({ type }: { type: FlagType }) => {
    switch (type) {
        case "it":
            return (
                <div className={wrapper}>
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                        <rect x="0" y="0" width="8" height="24" fill="#009246" />
                        <rect x="8" y="0" width="8" height="24" fill="#F1F2F1" />
                        <rect x="16" y="0" width="8" height="24" fill="#CE2B37" />
                    </svg>
                </div>
            );
        case "jp":
            return (
                <div className={wrapper}>
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                        <rect width="24" height="24" fill="#fff" />
                        <circle cx="12" cy="12" r="6" fill="#BC002D" />
                    </svg>
                </div>
            );
        case "gb":
            return (
                <div className={wrapper}>
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                        <rect width="24" height="24" fill="#00247D" />
                        <path d="M0 0L24 24M24 0L0 24" stroke="#fff" strokeWidth="4" />
                        <path d="M0 0L24 24M24 0L0 24" stroke="#CF142B" strokeWidth="2" />
                        <path d="M12 0V24M0 12H24" stroke="#fff" strokeWidth="6" />
                        <path d="M12 0V24M0 12H24" stroke="#CF142B" strokeWidth="3" />
                    </svg>
                </div>
            );
        case "cr":
            return (
                <div className={wrapper}>
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                        <rect width="24" height="4" y="0" fill="#002B7F" />
                        <rect width="24" height="4" y="4" fill="#fff" />
                        <rect width="24" height="8" y="8" fill="#CE1126" />
                        <rect width="24" height="4" y="16" fill="#fff" />
                        <rect width="24" height="4" y="20" fill="#002B7F" />
                    </svg>
                </div>
            );
        default:
            return null;
    }
};
