import { Container } from "../components/layout/Container";

const projects = [
    {
        title: "Enterprise HRMS Platform",
        role: "Lead Fullstack Engineer",
        timeline: "3 Years (Ongoing)",
        description: "A comprehensive workforce management platform handling payroll, attendance, and compliance for enterprise clients. Built to replace legacy desktop software with a cloud-native solution.",
        tech: ["Node.js", "PostgreSQL", "React", "Redis", "Sequelize/Drizzle", "Leaflet"],
        features: [
            "Extensive Payroll Engine (Tax, Deductions, Custom Components)",
            "Biometric & Mobile GPS Attendance Sync",
            "Modules: Holiday, Leave, Location, Vendor, Compliance",
            "Role-Based Access Control (OAuth2 + JWT)",
        ],
        link: "/systems/hrms",
        linkText: "View System Architecture →"
    },
    {
        title: "GIS Software for DBVHNL",
        role: "Fullstack Developer",
        timeline: "1 Year",
        description: "A geospatial information system designed for DBVHNL to map and manage electrical infrastructure assets. Enabled engineers to visualize network data overlaid on geographical maps.",
        tech: ["React", "CesiumJS", "Node.js", "PostgreSQL", "GeoJSON", "Redis", "Sequelize/Drizzle", "Socket.io", "PostGIS"],
        features: [
            "Asset mapping on interactive layers",
            "Spatial queries for infrastructure planning",
            "Offline data collection mode for field engineers",
            "Real-time status updates"
        ],
        link: "#",
        linkText: "Internal Tool"
    },
    {
        title: "Real-Time Chat Application",
        role: "Fullstack Developer",
        timeline: "Side Project -> Production",
        description: "Initially built as a side project to explore WebSockets, later engineered into the HRMS to facilitate secure internal communication between managers and employees.",
        tech: ["Socket.io", "Redis Pub/Sub", "React", "Node.js", "React Native"],
        features: [
            "1-to-1 and Group Messaging",
            "Delivery Guarantees (Sent, Delivered, Read)",
            "Optimistic UI updates",
            "Message persistence in PostgreSQL"
        ],
        link: "/systems/chat",
        linkText: "View Scalability Study →"
    }
];

export const Projects = () => {
    return (
        <section className="py-12 md:py-24">
            <Container>
                <div className="mb-8 md:mb-14">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                        Featured Projects
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-base md:text-lg">
                        Selected works demonstrating large-scale system ownership,
                        specialized domain knowledge, and fullstack capabilities.
                    </p>
                </div>

                <div className="space-y-8 md:space-y-12">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-[#0B0F14] border border-white/10 rounded-2xl p-5 md:p-8 hover:border-sky-500/30 transition-colors"
                        >
                            <div className="flex flex-col gap-6 md:flex-row md:gap-8 justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                                        <h2 className="text-xl md:text-2xl font-bold text-white">
                                            {project.title}
                                        </h2>
                                        <span className="px-2 md:px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-sky-400 border border-white/10">
                                            {project.role}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                        {project.description}
                                    </p>

                                    <div className="mb-4 md:mb-6">
                                        <h3 className="text-sm font-bold text-gray-200 mb-2 md:mb-3 uppercase tracking-wider">
                                            Key Features
                                        </h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {project.features.map(f => (
                                                <li key={f} className="flex items-start text-sm text-gray-400">
                                                    <span className="mr-2 text-sky-500 flex-shrink-0">▹</span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-2 md:px-3 py-1 bg-black rounded text-xs text-gray-500 border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:text-right md:min-w-[200px] w-full md:w-auto">
                                    <span className="text-sm font-mono text-gray-500">
                                        {project.timeline}
                                    </span>
                                    {project.link !== "#" ? (
                                        <a
                                            href={project.link}
                                            className="text-sky-400 hover:text-sky-300 font-bold text-sm inline-flex items-center gap-1 group py-2 min-h-[44px]"
                                        >
                                            {project.linkText}
                                        </a>
                                    ) : (
                                        <span className="text-gray-600 text-sm cursor-not-allowed py-2">
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
