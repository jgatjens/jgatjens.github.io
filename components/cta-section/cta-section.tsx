import React from 'react';

interface CtaSectionProps {
    question: string;
    subtitle: string;
    buttonLabel: string;
    href: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
    question,
    subtitle,
    buttonLabel,
    href,
}) => {
    return (
        <div className="print:hidden -mx-5 lg:-mx-8 px-5 mt-10 md:mt-16 lg:px-8 py-12 md:py-16 bg-gray-50 flex flex-col items-center text-center">
            <p className="text-lg md:text-2xl text-gray-600 mb-2">{question}</p>
            <p className="text-base md:text-lg text-gray-500 mb-8">{subtitle}</p>
            <a
                href={href}
                className="px-16 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-900 transition-colors"
            >
                {buttonLabel} →
            </a>
        </div>
    );
};
