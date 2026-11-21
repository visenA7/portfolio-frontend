import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
    "basics": {
        "name": "Abhishek Visen",
        "title": "Senior Full Stack Software Engineer",
        "location": {
            "city": "Delhi",
            "country": "India"
        },
        "contact": {
            "phone": "+91-9818158680",
            "email": "abhishekvisen7@gmail.com",
            "linkedin": "linkedin.com/in/abhishek-visen",
            "portfolio": "abhishekvisen.netlify.app"
        },
        "summary": "Experienced in .NET 10, ASP.NET Core, React, Node.js, Clean Architecture, Apache Kafka, and AI Orchestration (Semantic Kernel, MCP), architecting enterprise market intelligence and workforce platforms handling 500K+ daily requests and 10,000+ concurrent sessions.",
        "notice_period": "Immediate Joiner"
    },
    "skills": {
        "frontend": [
            "React.js",
            "Zustand",
            "React Query",
            "Redux",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "Leaflet",
            "CesiumJS",
            "jQuery",
            "TypeScript",
            "JavaScript"
        ],
        "backend": [
            ".NET 10 / ASP.NET Core",
            "C#",
            "Clean Architecture",
            "Semantic Kernel",
            "Model Context Protocol (MCP)",
            "Apache Kafka",
            "Qdrant Vector DB",
            "Elasticsearch",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "SuperTokens",
            "Bull MQ",
            "Sequelize ORM",
            "EF Core",
            "Socket.io",
            "SignalR",
            "PostGIS",
            "Redis"
        ],
        "testing_and_optimization": [
            "Jest",
            "React Profiler",
            "Web Vitals",
            "Database Optimization",
            "Caching",
            "Performance Optimization"
        ],
        "tools_and_platforms": [
            "Docker",
            "Azure",
            "GitHub Actions",
            "CI/CD",
            "Git",
            "Linux Server",
            "Microsoft Server",
            "OAuth2/JWT",
            "Keycloak",
            "Postman",
            "Bruno",
            "OpenAI",
            "ChatGPT",
            "Claude Code",
            "Bolt.AI",
            "Cursor",
            "LM Studio",
            "Ollama"
        ]
    },
    "experience": [
        {
            "role": "Senior Full Stack Software Engineer",
            "company": "Futurionic Private Limited",
            "location": "Gurugram, India",
            "start_date": "April 2022",
            "end_date": "Present",
            "responsibilities": [
                "Architected enterprise web applications using React.js, Node.js, and ASP.NET Core, Microservices, implementing OAuth2, JWT, and RBAC across 5 user tiers supporting 10,000+ employees.",
                "Engineered and optimized REST APIs, Azure PostgreSQL, NoSQL Database and Redis-backed services supporting 500K+ daily requests, reducing CPU utilization from 90% to below 40% and enabling real-time communication through Socket.io.",
                "Improved system performance by restructuring data payloads, reducing application load times by 30%, resolving 150+ critical production issues, and integrating biometric APIs and GPS tracking with 98% spatial accuracy.",
                "Automated 25+ report generation using Python and SQL, reducing manual reporting time by 60%.",
                "Built CI/CD pipeline from scratch using GitHub Actions, reducing deployment failures by 30% and deployment time by 50% through automated testing and staging validation.",
                "Mentored 8 junior developers through code reviews and pair programming, accelerating onboarding productivity by 40%."
            ]
        },
        {
            "role": "IT Executive",
            "company": "ABStechservices",
            "location": "Noida, India",
            "start_date": "December 2018",
            "end_date": "January 2020",
            "responsibilities": [
                "Maintained and enhanced web applications built using JavaScript, HTML, CSS, and jQuery.",
                "Resolved frontend bugs and improved application usability across browsers.",
                "Implemented database-driven file management workflows for storing and retrieving Excel and CSV files using SQL databases."
            ]
        }
    ],
    "projects": [
        {
            "name": "PropEquityAI — AI Real-Estate Intelligence Platform",
            "duration": "Production Platform",
            "description": [
                "Architected a production real-estate market intelligence platform using .NET 10 Clean Architecture and Microsoft Semantic Kernel.",
                "Implemented a governed Model Context Protocol (MCP) gateway for secure natural-language-to-SQL query generation against curated RERA databases.",
                "Constructed an event-driven Kafka pipeline managing ~30 consumers across 29 topics for asynchronous persistence and analytics.",
                "Engineered hybrid AI retrieval coupling Qdrant vector semantic search with Elasticsearch for sub-second, typo-tolerant property lookups.",
                "Designed dual-mode authentication (SuperTokens microservice + self-hosted RS256 JWT/JWKS) supporting 10,000+ concurrent sessions with AES-256-GCM PII encryption."
            ]
        },
        {
            "name": "Enterprise HRMS Platform",
            "duration": "April 2022 - Present",
            "description": [
                "Pioneered a multi-tenant HRMS platform managing the workforce lifecycle of 15,000+ employees.",
                "Automated payroll processing for 15,000+ employees, reducing payroll execution effort from multiple days to a few hours while ensuring full tax compliance.",
                "Incorporated live GPS and biometric sync, eliminating time-theft and saving clients 12% in administrative costs."
            ]
        },
        {
            "name": "AI Real-Time Chat Application",
            "duration": "Side Project -> Production",
            "description": [
                "Engineered a WebSocket messaging system using React js and Node js, supporting 5,000+ concurrent connections with sub-50ms latency.",
                "Implemented Redis Pub/Sub architecture enabling horizontal scaling across multiple application instances while maintaining sub-50ms message delivery latency.",
                "Designed PostgreSQL JSONB storage structures, archiving 2M+ messages per month while maintaining fast search performance."
            ]
        },
        {
            "name": "GIS Twin City Management System",
            "duration": "1 Year",
            "description": [
                "Developed a Digital Twin platform visualizing 500,000+ utility assets and supporting real-time monitoring for DBVHNL teams.",
                "Executed spatial queries via PostGIS, accelerating asset retrieval by 40% across 500,000+ geographical nodes.",
                "Designed an offline-first synchronization protocol, enabling 200+ field technicians to log data without network coverage."
            ]
        }
    ],
    "education": [
        {
            "degree": "Bachelor of Technology (B.Tech)",
            "field": "Computer Science Engineering",
            "institution": "Greater Noida Institute of Technology",
            "duration": "2014 - 2018"
        }
    ],
    "achievements": [
        "Expedited the delivery of four major infrastructure components by an average of 90 days each, contributing to six 'Employee of the Month' recognitions.",
        "Initiated and developed an AI-powered HRMS assistant for employees and HR teams, enabling instant access to policies, attendance, leave, and platform guidance."
    ],
    "languages": [
        {
            "language": "English",
            "proficiency": "Full Professional Proficiency"
        },
        {
            "language": "Hindi",
            "proficiency": "Full Professional Proficiency"
        }
    ],
    "interests": [
        "Cricket",
        "Chess",
        "Open-Source Development"
    ]
};
