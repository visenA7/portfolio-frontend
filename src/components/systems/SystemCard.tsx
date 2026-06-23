import type { System } from "../../types/system";

export const SystemCard = ({ system }: { system: System }) => {
    return (
        <div className="bg-card border border-card-border rounded-xl p-5 md:p-6 hover:border-sky-500 hover:bg-card-hover transition-all duration-300 shadow-sm hover:shadow-md">
            <h3 className="text-lg font-bold text-text-heading">
                {system.title}
            </h3>

            <p className="mt-2 text-text-muted text-sm md:text-base">
                {system.summary}
            </p>

            <ul className="mt-4 space-y-1 text-sm text-text-muted opacity-90">
                {system.highlights.map(h => (
                    <li key={h}>• {h}</li>
                ))}
            </ul>

            <a
                href={`/systems/${system.id}`}
                className="inline-flex items-center mt-4 py-2 text-sky-600 dark:text-sky-400 text-sm font-bold min-h-[44px] hover:text-sky-500 transition-colors"
            >
                → Deep Dive
            </a>
        </div>
    );
};