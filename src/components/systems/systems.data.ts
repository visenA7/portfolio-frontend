import type { System } from "../../types/system";

export const systems: System[] = [
    {
        id: "propequityai",
        title: "PropEquityAI Market Intelligence",
        summary: "AI-powered real-estate intelligence with governed NL-to-SQL via MCP, .NET 10 Clean Architecture & Kafka",
        highlights: [
            "OpenAI & Semantic Kernel + MCP Gateway",
            "Kafka Event Pipeline (29 Topics, ~30 Consumers)",
            "Hybrid Vector (Qdrant) & Full-Text (Elasticsearch)",
            "Enterprise Auth: SuperTokens + In-House RS256 JWT"
        ]
    },
    {
        id: "hrms",
        title: "Enterprise HRMS Platform",
        summary: "Production-grade HRMS with payroll & shift attendance",
        highlights: [
            "3 years production ownership",
            "Payroll with strict correctness",
            "PostgreSQL (Sequelize + Drizzle)"
        ]
    },
    {
        id: "attendance",
        title: "Event-Driven Attendance System",
        summary: "Async pipeline handling burst attendance traffic",
        highlights: [
            "1M+ concurrent events",
            "Redis queues",
            "Idempotent writes"
        ]
    },
    {
        id: "chat",
        title: "Real-Time Chat System",
        summary: "1-to-1 messaging with delivery guarantees",
        highlights: [
            "WebSocket + REST",
            "Redis pub/sub",
            "Message ordering"
        ]
    },
    {
        id: "node-internals",
        title: "Node.js Internals Lab",
        summary: "Event loop, workers, memory experiments",
        highlights: [
            "Worker threads",
            "Heap inspection",
            "Blocking demos"
        ]
    }
];
