import { Container } from "../layout/Container";
import { SectionHeading } from "../common/SectionHeading";
import {
    ServerStackIcon,
    ComputerDesktopIcon,
    CpuChipIcon,
    CloudIcon,
    SparklesIcon
} from "@heroicons/react/24/outline";

const skillClusters = [
    {
        category: "Backend & Distributed Systems",
        icon: ServerStackIcon,
        color: "text-sky-500",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
        skills: [
            { name: "ASP.NET Core", detail: "Clean Architecture, Web API, C#" },
            { name: "Node.js & Express", detail: "Event Loop, Clustering, Async Hooks" },
            { name: "PostgreSQL & PostGIS", detail: "Spatial Indexing, Query Optimization, Partitioning" },
            { name: "Redis", detail: "Pub/Sub, Stream Pipelines, Cache Invalidation" },
            { name: "EF Core & Sequelize", detail: "Compiled Queries, DbContext Pooling" },
            { name: "BullMQ & WebSockets", detail: "Asynchronous Workflows, Socket.io" },
        ]
    },
    {
        category: "Frontend & Performance",
        icon: ComputerDesktopIcon,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        skills: [
            { name: "React 19 & TypeScript", detail: "Hooks, Concurrent Features, Suspense" },
            { name: "State Architecture", detail: "Zustand, React Query, Redux Toolkit" },
            { name: "Modern Styling", detail: "Tailwind CSS v4, Design Systems, Accessible UI" },
            { name: "Data Visualization", detail: "Leaflet GIS, CesiumJS 3D, Mermaid, AG Grid" },
            { name: "Client Optimization", detail: "Virtual Lists, Web Workers, Core Web Vitals" },
            { name: "Build Tooling", detail: "Vite, Rollup, ESLint, TypeScript Compiler" },
        ]
    },
    {
        category: "Architecture & Resilience",
        icon: CpuChipIcon,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        skills: [
            { name: "High Availability", detail: "Fault-tolerant services, Circuit Breakers" },
            { name: "Rate Limiting & Throttling", detail: "Token Bucket, Sliding Window via Redis" },
            { name: "Security & Auth", detail: "OAuth2, JWT, Keycloak, RBAC Tiered Access" },
            { name: "Idempotency", detail: "Distributed Locking, Safe Payment & Payroll Retries" },
        ]
    },
    {
        category: "Cloud, CI/CD & AI Tooling",
        icon: CloudIcon,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        skills: [
            { name: "Azure & Linux Servers", detail: "Azure App Service, PostgreSQL Flexible, VMs" },
            { name: "Docker & Containerization", detail: "Multi-stage builds, Container Registries" },
            { name: "CI/CD Automation", detail: "GitHub Actions, automated testing, staging deploys" },
            { name: "AI & LLM Integration", detail: "OpenAI API, Prompt Engineering, Claude Code, Cursor" },
        ]
    }
];

export const EngineeringSkills = () => (
    <section className="py-14 sm:py-20 border-b border-border-custom relative transition-colors duration-200">
        <Container>
            <SectionHeading
                eyebrow="TECHNICAL EXPERTISE"
                title="Engineering Focus & Technology Stack"
                description="A breakdown of production technologies, architecture patterns, and platforms leveraged in real-world systems."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {skillClusters.map((cluster) => {
                    const Icon = cluster.icon;
                    return (
                        <div
                            key={cluster.category}
                            className="bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-custom">
                                    <div className={`p-2.5 rounded-xl ${cluster.bg} ${cluster.border} border`}>
                                        <Icon className={`w-5 h-5 ${cluster.color}`} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-heading group-hover:text-sky-500 transition-colors">
                                            {cluster.category}
                                        </h3>
                                        <span className="text-xs font-mono text-text-muted">
                                            Production Mastery
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {cluster.skills.map((s) => (
                                        <div
                                            key={s.name}
                                            className="p-2.5 rounded-xl bg-card-hover/60 border border-border-custom/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:border-sky-500/30 transition-colors"
                                        >
                                            <div className="flex items-center gap-2">
                                                <SparklesIcon className="w-3.5 h-3.5 text-sky-500 shrink-0" aria-hidden="true" />
                                                <span className="text-sm font-semibold text-text-heading font-mono">
                                                    {s.name}
                                                </span>
                                            </div>
                                            <span className="text-xs text-text-muted sm:text-right font-medium">
                                                {s.detail}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    </section>
);
