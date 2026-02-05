import { Container } from "../layout/Container";

const skills = [
    {
        category: "Backend Engineering",
        items: [
            "Node.js (Async hooks, Event Loop)",
            "PostgreSQL (Indexing, Partitioning)",
            "Redis (Pub/Sub, Streams)",
            "Microservices & Event Sourcing"
        ]
    },
    {
        category: "Frontend Engineering",
        items: [
            "React 19 (Server Actions, Suspense)",
            "Performance (Vite, Web Workers)",
            "Tailwind CSS & Design Systems",
            "State Management (Zustand, Redux)"
        ]
    },
    {
        category: "System Design",
        items: [
            "High Availability Architecture",
            "Rate Limiting & Throttling",
            "Database Replication & Sharding",
            "Observability (Prometheus, Grafana)"
        ]
    }
];

export const EngineeringSkills = () => (
    <section className="py-12 md:py-20 border-t border-white/10 bg-white/5">
        <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">
                Engineering Focus
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {skills.map((skill) => (
                    <div key={skill.category} className="bg-[#0B0F14] p-5 md:p-6 rounded-2xl border border-white/10 hover:border-sky-500/50 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 pb-2 border-b border-white/10">
                            {skill.category}
                        </h3>
                        <ul className="space-y-3">
                            {skill.items.map((item) => (
                                <li key={item} className="flex items-center text-gray-400 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Container>
    </section>
);