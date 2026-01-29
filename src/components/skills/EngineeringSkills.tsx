export const EngineeringSkills = () => (
    <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-6">
                Engineering Focus
            </h2>

            <pre className="bg-black/40 p-6 rounded-xl text-sm text-gray-300">
                {`
Backend Engineering
- Node.js (event loop, streams, worker threads)
- PostgreSQL (indexes, CTEs, triggers)
- Redis (queues, caching, pub/sub)
- BullMQ (retries, backoff, concurrency tuning)

Frontend Engineering
- React (hooks, performance tuning)
- Tailwind (design systems)
- State modeling
- Accessibility

System Design
- Event-driven architecture
- Load leveling with queues
- Idempotent API design
- Failure & retry modeling
`}
            </pre>
        </div>
    </section>
);