import type { ReactNode } from "react";

interface SectionHeadingProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    align?: "left" | "center";
}

export const SectionHeading = ({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionHeadingProps) => {
    const isCenter = align === "center";

    return (
        <div className={`mb-8 md:mb-14 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
            {eyebrow && (
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-badge text-badge-text border border-badge-border text-xs font-mono font-semibold uppercase tracking-wider mb-3 ${isCenter ? "mx-auto" : ""}`}>
                    <span>#</span>
                    <span>{eyebrow}</span>
                </div>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-heading tracking-tight leading-tight">
                {title}
            </h2>
            {description && (
                <p className="mt-3 text-text-muted text-sm sm:text-base md:text-lg leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};
