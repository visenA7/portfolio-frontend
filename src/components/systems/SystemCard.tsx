import type { System } from "../../types/system";

export const SystemCard = ({ system }: { system: System }) => {
    return (
        <div className="border border-white/10 rounded-xl p-6 hover:border-sky-400 transition">
            <h3 className="text-lg font-semibold text-white">
                {system.title}
            </h3>

            <p className="mt-2 text-gray-400">
                {system.summary}
            </p>

            <ul className="mt-4 space-y-1 text-sm text-gray-300">
                {system.highlights.map(h => (
                    <li key={h}>• {h}</li>
                ))}
            </ul>

            <a
                href={`/systems/${system.id}`}
                className="inline-block mt-4 text-sky-400 text-sm"
            >
                → Deep Dive
            </a>
        </div>
    );
};