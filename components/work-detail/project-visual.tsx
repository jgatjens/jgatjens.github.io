'use client';

import Image from "next/image";

interface ProjectVisualProps {
    image: {
        url?: string;
    };
    color?: string;
    headline?: string;
    heroTint: string;
}

export const ProjectVisual = ({
    image,
    color,
    headline,
    heroTint,
}: ProjectVisualProps) => {
    return (
        <div
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
            style={{
                backgroundColor: heroTint,
            }}
        >
            {image?.url && (
                <Image
                    src={image.url}
                    alt={headline || "Project image"}
                    fill
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    priority={true}
                />
            )}
        </div>
    );
};
