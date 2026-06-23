import type { FrontendTopic } from "../../types/frontend";

export const FrontendCard = ({ topic }: { topic: FrontendTopic }) => {
    return (
        <div className="bg-card border border-card-border rounded-xl p-5 md:p-6 hover:border-sky-500 hover:bg-card-hover transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full">
            <h3 className="text-lg font-bold text-text-heading">
                {topic.title}
            </h3>

            <p className="mt-2 text-text-muted text-sm md:text-base flex-grow">
                {topic.summary}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
                {topic.metrics.slice(0, 4).map(m => (
                    <div key={m.label} className="bg-background p-2 rounded border border-border-custom transition-colors duration-300">
                        <div className="text-[10px] text-text-muted opacity-80 uppercase tracking-wider font-semibold">{m.label}</div>
                        <div className="text-text-heading text-xs font-mono mt-0.5">{m.value}</div>
                    </div>
                ))}
            </div>

            <a
                href={`/frontend/${topic.id}`}
                className="inline-flex items-center mt-4 py-2 text-sky-600 dark:text-sky-400 text-sm font-bold min-h-[44px] hover:text-sky-500 transition-colors"
            >
                → Deep Dive
            </a>
        </div>
    );
};
