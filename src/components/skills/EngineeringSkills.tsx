import { Container } from "../layout/Container";

const skills = [
    {
        category: "Backend Engineering",
        items: [
            "ASP.NET Core (Clean Architecture, Web API)",
            "C# & EF Core (LINQ, Performance Tuning)",
            "Node.js (Event Loop, Async hooks)",
            "PostgreSQL (Indexing, PostGIS, Spatial Queries)",
            "Redis (Pub/Sub, Streams, Caching)",
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
    <section className="py-12 md:py-20 border-t border-border-custom bg-card-hover transition-colors duration-300">
        <Container>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-heading mb-8 md:mb-12 text-center">
                Engineering Focus
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {skills.map((skill) => (
                    <div key={skill.category} className="bg-card p-5 md:p-6 rounded-2xl border border-card-border hover:border-sky-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h3 className="text-lg md:text-xl font-bold text-text-heading mb-4 md:mb-6 pb-2 border-b border-border-custom">
                            {skill.category}
                        </h3>
                        <ul className="space-y-3">
                            {skill.items.map((item) => (
                                <li key={item} className="flex items-center text-text-muted text-sm font-medium">
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