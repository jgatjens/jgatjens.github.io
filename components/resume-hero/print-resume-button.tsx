"use client";

interface PrintResumeButtonProps {
    label: string;
}

export const PrintResumeButton = ({ label }: PrintResumeButtonProps) => (
    <button
        type="button"
        onClick={() => window.print()}
        className="print:hidden capitalize px-6 md:px-8 py-3 bg-black text-white font-semibold text-center rounded-md hover:shadow-lg transition-all duration-300 text-sm md:text-base whitespace-nowrap"
    >
        {label} ↓
    </button>
);
