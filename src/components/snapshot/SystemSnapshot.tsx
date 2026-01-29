const stats = [
    "⚙️ 1M+ events processed",
    "⏱ <200ms avg latency",
    "📦 Async-first architecture",
    "🔁 Retry-safe & idempotent",
    "⚛️ Modern React Patterns",
    "🎨 High-Fidelity UI/UX"
];

export const SystemSnapshot = () => (
    <section className="py-10 border-b border-white/10">
        <div className="flex flex-wrap gap-6 justify-center text-gray-300">
            {stats.map((s) => (
                <span key={s} className="text-sm font-mono">
                    {s}
                </span>
            ))}
        </div>
    </section>
);