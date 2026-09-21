'use client';

import Link from "next/link";

interface CTAFooterProps {
    lang: string;
    question: string;
    subtitle: string;
    buttonLabel: string;
}

export const CTAFooter = ({
    lang,
    question,
    subtitle,
    buttonLabel
}: CTAFooterProps) => {
    return (
        <section className="mt-16 md:mt-20 lg:mt-24 -mx-5 lg:-mx-8 px-5 lg:px-8 py-12 md:py-16 lg:py-20">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-16">
                {/* Background Pattern/Image */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Left: Text */}
                    <div className="flex flex-col justify-center lg:max-w-lg">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                            {question}
                        </h2>
                        <p className="text-base md:text-lg text-blue-100">
                            {subtitle}
                        </p>
                    </div>

                    {/* Right: CTA Button */}
                    <div className="flex-shrink-0">
                        <Link
                            href={`/${lang}#contact`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 whitespace-nowrap"
                        >
                            {buttonLabel}
                            <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
