import { Container } from "../components/layout/Container";

const projects = [
    {
        title: "Enterprise HRMS Platform",
        role: "Senior Full Stack Engineer",
        timeline: "April 2022 - Present",
        description: "Pioneered a multi-tenant HRMS platform managing the workforce lifecycle of 15,000+ employees. Built to replace legacy desktop software with a secure, highly scalable cloud solution.",
        tech: ["React.js", "Node.js", "ASP.NET Core", "Microservices", "Python", "PostgreSQL", "Redis", "Sequelize/Drizzle", "JWT/OAuth2"],
        features: [
            "Pioneered workforce lifecycle modules for 15,000+ employees",
            "Automated payroll, reducing execution effort from days to hours with full tax compliance",
            "Incorporated live GPS & biometric sync, saving clients 12% in administrative costs",
            "Designed a hybrid Sequelize/Drizzle ORM strategy for high-read dashboards",
        ],
        link: "/systems/hrms",
        linkText: "View System Architecture →"
    },
    {
        title: "AI Real-Time Chat Application",
        role: "Fullstack Developer",
        timeline: "Side Project -> Production",
        description: "Engineered a WebSocket messaging and AI assistant system, integrated directly into the main HRMS to facilitate internal communications and policy queries.",
        tech: ["React.js", "Node.js", "Socket.io", "Redis Pub/Sub", "PostgreSQL", "OpenAI", "LangChain", "React Native"],
        features: [
            "Supports 5,000+ concurrent connections with sub-50ms latency",
            "Redis Pub/Sub architecture for horizontal scaling across instances",
            "PostgreSQL JSONB structures archiving 2M+ messages/month with fast search",
            "AI-powered HRMS assistant for instant access to company policies and attendance guidance"
        ],
        link: "/systems/chat",
        linkText: "View Scalability Study →"
    },
    {
        title: "GIS Twin City Management System",
        role: "Fullstack Developer",
        timeline: "1 Year",
        description: "A geospatial information system / digital twin designed for DBVHNL to map and manage electrical infrastructure assets overlaid on interactive geographical maps.",
        tech: ["Leaflet", "CesiumJS", "PostGIS", "PostgreSQL", "Node.js", "Redis", "Sequelize/Drizzle", "Socket.io"],
        features: [
            "Visualized 500,000+ utility assets supporting real-time monitoring",
            "PostGIS spatial queries accelerating asset retrieval by 40% over 500K nodes",
            "Offline-first synchronization protocol for 200+ field technicians"
        ],
        link: "#",
        linkText: "Internal System"
    }
];

export const Projects = () => {
    return (
        <section className="py-12 md:py-24 relative overflow-hidden transition-colors duration-300">
            {/* Background gradients */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <Container>
                <div className="mb-12 md:mb-20">
                    <span className="text-sky-600 dark:text-sky-400 font-mono text-sm tracking-wider uppercase font-semibold">Portfolio</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mt-2 mb-4 tracking-tight">
                        Featured Systems
                    </h1>
                    <p className="text-text-muted max-w-2xl text-base md:text-lg leading-relaxed font-medium">
                        Production-grade systems demonstrating end-to-end ownership, complex system design, 
                        and performance optimizations supporting large user bases.
                    </p>
                </div>

                <div className="space-y-8 md:space-y-16">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-card border border-card-border rounded-3xl p-6 md:p-10 hover:border-sky-500/30 hover:bg-card-hover transition-all duration-300 shadow-sm hover:shadow-md relative group"
                        >
                            {/* Card Glow */}
                            <div className="absolute -inset-px bg-gradient-to-r from-sky-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
                            
                            <div className="flex flex-col gap-6 lg:flex-row lg:gap-10 justify-between items-start relative z-10">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-text-heading tracking-tight animate-fade-in">
                                            {project.title}
                                        </h2>
                                        <span className="px-3 py-1 bg-badge text-badge-text rounded-full text-xs font-mono border border-badge-border">
                                            {project.role}
                                        </span>
                                    </div>

                                    <p className="text-text-muted mb-6 leading-relaxed text-sm md:text-base font-medium">
                                        {project.description}
                                    </p>

                                    <div className="mb-6">
                                        <h3 className="text-xs font-extrabold text-sky-600 dark:text-sky-400 mb-3 uppercase tracking-widest font-mono">
                                            Key Features & Impact
                                        </h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {project.features.map(f => (
                                                <li key={f} className="flex items-start text-sm text-text-muted">
                                                    <span className="mr-2 text-sky-500 flex-shrink-0">▹</span>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-2.5 py-1 bg-background text-text-muted rounded-lg text-xs font-mono border border-border-custom transition-colors duration-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:text-right lg:min-w-[220px] w-full lg:w-auto border-t lg:border-t-0 border-border-custom pt-4 lg:pt-0">
                                    <div className="text-sm font-mono text-text-muted opacity-80">
                                        {project.timeline}
                                    </div>
                                    {project.link !== "#" ? (
                                        <a
                                            href={project.link}
                                            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-sky-500/20 cursor-pointer"
                                        >
                                            {project.linkText}
                                        </a>
                                    ) : (
                                        <span className="px-4 py-2 bg-background text-text-muted rounded-lg font-mono text-xs border border-border-custom">
                                            {project.linkText}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
