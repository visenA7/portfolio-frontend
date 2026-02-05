import type { FrontendTopic } from "../../types/frontend";

export const FrontendCard = ({ topic }: { topic: FrontendTopic }) => {
    return (
        <div className="border border-white/10 rounded-xl p-5 md:p-6 hover:border-sky-400 transition flex flex-col h-full">
            <h3 className="text-lg font-semibold text-white">
                {topic.title}
            </h3>

            <p className="mt-2 text-gray-400 text-sm md:text-base flex-grow">
                {topic.summary}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
                {topic.metrics.slice(0, 4).map(m => (
                    <div key={m.label} className="bg-white/5 p-2 rounded border border-white/5">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">{m.label}</div>
                        <div className="text-white text-xs font-mono mt-0.5">{m.value}</div>
                    </div>
                ))}
            </div>

            <a
                href={`/frontend/${topic.id}`}
                className="inline-flex items-center mt-4 py-2 text-sky-400 text-sm min-h-[44px] hover:text-sky-300 transition-colors"
            >
                → Deep Dive
            </a>
        </div>
    );
};
