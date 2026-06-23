const stats = [
    "🚀 500K+ daily requests",
    "⏱️ sub-50ms delivery latency",
    "⚡ CPU utilization 90% ➔ <40%",
    "📈 30% application load speedup",
    "👥 15,000+ employees lifecycle",
    "🔄 30% fewer deployment failures",
    "🤖 AI-powered HRMS assistant",
    "⚛️ React & .NET Microservices"
];

export const SystemSnapshot = () => (
    <section className="py-6 md:py-8 border-b border-border-custom bg-card-hover transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-text-muted">
                {stats.map((s) => {
                    const [icon, ...textParts] = s.split(" ");
                    const text = textParts.join(" ");
                    return (
                        <div 
                            key={s} 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card-border text-xs md:text-sm font-mono hover:border-sky-500/30 transition-all hover:scale-105 shadow-sm"
                        >
                            <span>{icon}</span>
                            <span className="text-text-muted font-bold">{text}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);