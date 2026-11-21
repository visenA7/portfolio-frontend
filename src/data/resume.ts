import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
  basics: {
    name: "Abhishek Visen",
    title:
      "Senior Full Stack Software Engineer | .NET | React | Node.js | AI/GenAI",
    location: {
      city: "Delhi",
      country: "India",
    },
    contact: {
      phone: "+91-9818158680",
      email: "abhishekvisen7@gmail.com",
      linkedin: "linkedin.com/in/abhishek-visen",
      portfolio: "abhishekvisen.netlify.app",
    },
    summary:
      "Senior Full Stack Software Engineer with 6+ years of experience building scalable enterprise applications using ASP.NET Core, React, Node.js, PostgreSQL, Azure, and microservices. Experienced in high-concurrency systems supporting 10,000+ users and 500K+ daily requests, with expertise in distributed systems, real-time applications, authentication, caching, and AI/GenAI solutions including RAG and LLM integration.",
    notice_period: "60 days",
  },
  skills: {
    programming: ["C#", "JavaScript", "TypeScript", "Python", "SQL"],
    frontend: [
      "React.js",
      "Redux",
      "Zustand",
      "React Query",
      "Tailwind CSS",
      "jQuery",
      "HTML5",
      "CSS3",
      "Leaflet",
      "CesiumJS",
    ],
    backend: [
      "ASP.NET Core",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "EF Core",
      "Sequelize",
    ],
    databases_and_messaging: [
      "PostgreSQL",
      "SQL Server",
      "Cosmos DB",
      "Redis",
      "Kafka",
      "BullMQ",
      "PostGIS",
    ],
    architecture_and_security: [
      "Microservices",
      "Multi-tenancy",
      "Distributed Systems",
      "Event-Driven Architecture",
      "System Design",
      "OAuth2",
      "JWT",
      "RBAC",
      "Keycloak",
      "SuperTokens",
      "WebSockets",
      "Caching",
    ],
    cloud_and_devops: [
      "Azure",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Nginx",
      "AWS S3",
    ],
    ai_genai: [
      "RAG",
      "LLM Integration",
      "OpenAI API",
      "Tool Calling",
      "Vector Databases",
      "Qdrant",
      "Embeddings",
      "Semantic Search",
      "Prompt Engineering",
      "Agentic AI / AI Agents",
      "LangChain",
    ],
    tools: [
      "Git",
      "Postman",
      "Bruno",
      "Jest",
      "React Profiler",
      "Web Vitals",
      "Cursor",
      "Claude Code",
      "GitHub Copilot / AI Tools",
    ],
  },
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "P.E. Analytics Ltd. (PropEquity)",
      location: "Gurugram, India",
      start_date: "July 2026",
      end_date: "Present",
      responsibilities: [
        "Scaled high-traffic enterprise applications to support 10,000+ concurrent users through application-level optimization, distributed caching, and scalable backend architecture.",
        "Developed and maintained full-stack features using ASP.NET Core, React/TypeScript, jQuery, and Python within an MVC-based architecture.",
        "Implemented Apache Kafka for distributed event processing and optimized Redis caching, improving application scalability and reducing backend load.",
        "Led a team of developers, driving technical execution, code reviews, task allocation, and delivery of key product features.",
      ],
    },
    {
      role: "Senior Full Stack Software Engineer",
      company: "Futurionic Private Limited",
      location: "Gurugram, India",
      start_date: "Apr 2022",
      end_date: "July 2026",
      responsibilities: [
        "Architected enterprise web applications using React.js, Node.js, ASP.NET Core, and microservices, implementing OAuth2, JWT, and RBAC across 5 user tiers supporting 10,000+ employees.",
        "Engineered and optimized REST APIs, Azure PostgreSQL, Azure Cosmos DB, and Redis-backed services supporting 500K+ daily requests, reducing CPU utilization from 90% to below 40% and enabling real-time communication through Socket.io.",
        "Improved system performance by restructuring data payloads, reducing application load times by 30%, resolving 150+ critical production issues, and integrating biometric APIs and GPS tracking with 98% spatial accuracy.",
        "Automated 25+ report generation using Python and SQL, reducing manual reporting time by 60%.",
        "Built CI/CD pipeline from scratch using GitHub Actions, reducing deployment failures by 30% and deployment time by 50% through automated testing and staging validation.",
        "Mentored 8 junior developers through code reviews and pair programming, accelerating onboarding productivity by 40%.",
      ],
    },
    {
      role: "Developer Trainee and IT Executive",
      company: "ABStechservices",
      location: "Noida, India",
      start_date: "Dec 2018",
      end_date: "Jan 2020",
      responsibilities: [
        "Maintained and enhanced web applications built using JavaScript, HTML, CSS, jQuery and React.",
        "Resolved frontend bugs and improved application usability across browsers.",
        "Implemented database-driven file management workflows for storing and retrieving Excel and CSV files using SQL databases.",
      ],
    },
  ],
  projects: [
    {
      name: "Prop AI",
      technologies:
        ".NET Core, jQuery, RAG, Qdrant, Redis, Kafka, S3, Docker, SuperTokens, Node.js, Python, React.js, Payment Gateways",
      duration: "July 2026 – Present",
      description: [
        "Engineered an AI-powered real estate assistant using RAG, Qdrant, and LLM-based retrieval to provide context-aware responses grounded in verified real estate data.",
        "Architected a scalable, multi-tenant platform using .NET Core, Node.js, Python, Kafka, Redis, and S3, with Docker-based deployment, SuperTokens authentication, and integrated payment gateways.",
      ],
    },
    {
      name: "AI-Powered Chat Application",
      technologies:
        "OpenAI API, LangChain, Node.js, React.js, Socket.io, Redis Pub/Sub, PostgreSQL",
      duration: "Side Project → Production",
      description: [
        "Engineered a WebSocket messaging system using React js and Node js, supporting 5,000+ concurrent connections with sub-50ms latency.",
        "Implemented Redis Pub/Sub architecture enabling horizontal scaling across multiple application instances while maintaining sub-50ms message delivery latency.",
        "Designed PostgreSQL JSONB storage structures, archiving 2M+ messages per month while maintaining fast search performance.",
      ],
    },
    {
      name: "Enterprise HRMS Platform",
      technologies:
        "React.js, .NET Core, Microservices, Python, PostgreSQL, JWT, OAuth2",
      duration: "Enterprise Production",
      description: [
        "Pioneered a multi-tenant HRMS platform managing the workforce lifecycle of 15,000+ employees.",
        "Automated payroll processing for 15,000+ employees, reducing payroll execution effort from multiple days to a few hours while ensuring full tax compliance.",
        "Incorporated live GPS and biometric sync, eliminating time-theft and saving clients 12% in administrative costs.",
      ],
    },
    {
      name: "GIS Twin City Management System",
      technologies: "Leaflet, CesiumJS, PostGIS, PostgreSQL, Node.js",
      duration: "Client Production",
      description: [
        "Developed a Digital Twin platform visualizing 500,000+ utility assets and supporting real-time monitoring for DBVHNL teams.",
        "Executed spatial queries via PostGIS, accelerating asset retrieval by 40% across 500,000+ geographical nodes.",
        "Designed an offline-first synchronization protocol, enabling 200+ field technicians to log data without network coverage.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      institution: "Greater Noida Institute of Technology",
      duration: "2014 – 2018",
    },
  ],
  achievements: [
    "Expedited the delivery of four major infrastructure components by an average of 90 days each, contributing to five 'Employee of the Month' recognitions.",
    "Initiated and developed an AI-powered HRMS assistant for employees and HR teams, enabling instant access to policies, attendance, leave, and platform guidance.",
  ],
  languages: [
    {
      language: "English",
      proficiency: "Full Professional Proficiency",
    },
    {
      language: "Hindi",
      proficiency: "Full Professional Proficiency",
    },
  ],
  interests: [
    "Distributed Systems & Cloud Architecture",
    "Generative AI & Agentic Workflows",
    "Open-Source Software Development",
    "Chess & Strategy Games",
  ],
};
