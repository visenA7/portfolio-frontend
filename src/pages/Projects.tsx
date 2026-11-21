import { Container } from "../components/layout/Container";
import { Link } from "react-router-dom";
import {
    SparklesIcon,
    ServerStackIcon,
    ChatBubbleLeftRightIcon,
    MapIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    CalendarIcon,
    UserIcon
} from "@heroicons/react/24/outline";

const projects = [
    {
        id: "propequityai",
        title: "PropEquityAI — AI Real-Estate Intelligence Platform",
        role: "Lead Systems Architect & Full Stack Engineer",
        timeline: "Production Platform",
        icon: SparklesIcon,
        description: "An AI-powered real-estate market-intelligence platform enabling conversational access to structured property databases, RERA filings, and rental trends. Engineered with .NET 10 Clean Architecture, governed natural-language-to-SQL via MCP, Kafka event pipelines, and bank-grade PII security.",
        tech: [
            ".NET 10",
            "C#",
            "Clean Architecture",
            "Semantic Kernel",
            "OpenAI",
            "MCP Gateway",
            "Apache Kafka",
            "Qdrant Vector DB",
            "Elasticsearch",
            "MySQL",
            "MongoDB",
            "Redis",
            "SuperTokens",
            "SignalR",
            "Docker"
        ],
        features: [
            "Governed Natural-Language-to-SQL via Model Context Protocol (MCP) and Microsoft Semantic Kernel against curated RERA databases",
            "Hybrid AI retrieval engine coupling Qdrant vector semantic search with Elasticsearch for sub-millisecond, typo-tolerant lookups",
            "Event-driven Kafka bus managing ~30 background consumers across 29 topics with Dead-Letter Queues and fault-tolerant retry policies",
            "Dual-mode enterprise authentication: SuperTokens session microservice (Node.js/Redis) plus in-house RS256 JWT/JWKS discovery",
            "Full commercial monetization workflow: 17-step onboarding funnel, credit wallet engine, Razorpay webhooks, and AES-256-GCM PII encryption at rest"
        ],
        link: "/systems/propequityai",
        linkText: "View Platform Architecture & Deep Dive"
    },
    {
        id: "hrms",
        title: "Enterprise HRMS Platform",
        role: "Senior Full Stack Engineer",
        timeline: "April 2022 – July 2026",
        icon: ServerStackIcon,
        description: "Pioneered a multi-tenant HRMS platform managing the workforce lifecycle of 15,000+ employees. Built to replace legacy desktop software with a secure, highly scalable cloud solution.",
        tech: ["React.js", "Node.js", "ASP.NET Core", "Microservices", "Python", "PostgreSQL", "Redis", "Sequelize/Drizzle", "JWT/OAuth2"],
        features: [
            "Pioneered workforce lifecycle modules for 15,000+ employees across 5 tiered access levels",
            "Automated payroll calculations, reducing payroll execution effort from days to hours",
            "Incorporated live GPS & biometric sync with 98% spatial accuracy, cutting admin overhead by 12%",
            "Designed a hybrid Sequelize/Drizzle ORM strategy for high-read analytical dashboards",
        ],
        link: "/systems/hrms",
        linkText: "View System Architecture & Deep Dive"
    },
    {
        id: "chat",
        title: "AI Real-Time Chat Application",
        role: "Full Stack Developer",
        timeline: "Side Project → Production",
        icon: ChatBubbleLeftRightIcon,
        description: "Engineered a WebSocket messaging and AI assistant system, integrated directly into the main HRMS to facilitate internal communications and policy queries.",
        tech: ["React.js", "Node.js", "Socket.io", "Redis Pub/Sub", "PostgreSQL", "OpenAI", "LangChain", "React Native"],
        features: [
            "Supports 5,000+ concurrent connections with sub-50ms message latency",
            "Redis Pub/Sub architecture enabling horizontal scaling across stateless worker nodes",
            "PostgreSQL JSONB structures archiving 2M+ messages/month with sub-second full-text retrieval",
            "AI-powered HRMS assistant for instant natural-language policy queries and leave tracking"
        ],
        link: "/systems/chat",
        linkText: "View Scalability Study & Topology"
    },
    {
        id: "gis",
        title: "GIS Twin City Management System",
        role: "Full Stack Developer",
        timeline: "1 Year Engagement",
        icon: MapIcon,
        description: "A geospatial information system / digital twin designed for DBVHNL to map and manage electrical infrastructure assets overlaid on interactive geographical maps.",
        tech: ["Leaflet", "CesiumJS", "PostGIS", "PostgreSQL", "Node.js", "Redis", "Socket.io"],
        features: [
            "Visualized 500,000+ utility infrastructure assets supporting real-time monitoring",
            "PostGIS spatial indexing accelerating multi-polygon asset retrieval by 40% across 500K nodes",
            "Offline-first synchronization protocol with client SQLite caching for 200+ field technicians"
        ],
        link: "/frontend/gis-ui",
        linkText: "View Frontend GIS Architecture"
    }
];

export const Projects = () => {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden transition-colors duration-200">
            <Container>
                {/* Header */}
                <div className="mb-12 md:mb-16 max-w-3xl">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-badge text-badge-text border border-badge-border text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                        FEATURED PRODUCTION WORK
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-heading tracking-tight leading-tight">
                        Flagship Engineering Projects
                    </h1>
                    <p className="mt-4 text-text-muted text-base md:text-lg leading-relaxed">
                        Production-grade platforms demonstrating end-to-end architecture ownership, microservice design,
                        database query optimizations, and seamless client experiences for thousands of active users.
                    </p>
                </div>

                {/* Projects Bento List */}
                <div className="space-y-8 sm:space-y-10">
                    {projects.map((project) => {
                        const Icon = project.icon;
                        return (
                            <div
                                key={project.title}
                                className="bento-card rounded-3xl p-6 sm:p-10 border border-card-border shadow-md hover:shadow-xl transition-all duration-300 relative group"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                                    <div className="flex-1">
                                        {/* Meta Bar */}
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <div className="p-2 rounded-xl bg-card-hover border border-border-custom text-accent">
                                                <Icon className="w-5 h-5" aria-hidden="true" />
                                            </div>
                                            <span className="px-3 py-1 bg-badge text-badge-text rounded-full text-xs font-mono font-semibold border border-badge-border flex items-center gap-1.5">
                                                <UserIcon className="w-3.5 h-3.5" aria-hidden="true" />
                                                <span>{project.role}</span>
                                            </span>
                                            <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                                                <CalendarIcon className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                                                <span>{project.timeline}</span>
                                            </span>
                                        </div>

                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-heading tracking-tight">
                                            {project.title}
                                        </h2>

                                        <p className="mt-3 text-text-muted text-sm sm:text-base leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Features & Architectural Impact */}
                                        <div className="mt-6 pt-5 border-t border-border-custom">
                                            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-3.5">
                                                Key Architecture & Production Impact
                                            </h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                                {project.features.map((f) => (
                                                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                                                        <CheckCircleIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                                                        <span>{f}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack Chips */}
                                        <div className="mt-6 pt-5 border-t border-border-custom flex flex-wrap gap-1.5">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-card-hover border border-border-custom text-text-muted font-medium"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Link */}
                                <div className="mt-8 pt-4 border-t border-border-custom flex items-center justify-between">
                                    <Link
                                        to={project.link}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:opacity-80 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent py-1"
                                    >
                                        <span>{project.linkText}</span>
                                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                    </Link>
                                    <span className="text-xs font-mono text-text-muted">
                                        Production Grade
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
