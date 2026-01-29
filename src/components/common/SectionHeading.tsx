import type { ReactNode } from "react";

interface SectionHeadingProps {
    children: ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => {
    return (
        <h2 className="text-2xl font-bold text-white mb-6">
            {children}
        </h2>
    );
};
