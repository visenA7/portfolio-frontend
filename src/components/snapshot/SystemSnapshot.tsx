const stats = [
    "⚙️ 1M+ events processed",
    "⏱ <200ms avg latency",
    "📦 Async-first architecture",
    "🔁 Retry-safe & idempotent",
    "⚛️ Modern React Patterns",
    "🎨 High-Fidelity UI/UX"
];

export const SystemSnapshot = () => (
    <section className="py-6 md:py-10 border-b border-white/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-3 md:gap-6 justify-center text-gray-300 px-4">
            {stats.map((s) => (
                <span key={s} className="text-xs md:text-sm font-mono text-center">
                    {s}
                </span>
            ))}
        </div>
    </section>
);