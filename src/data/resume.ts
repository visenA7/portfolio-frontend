import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
    "basics": {
        "name": "Abhishek Visen",
        "title": "Full Stack Developer",
        "location": {
            "city": "Delhi",
            "country": "India"
        },
        "contact": {
            "phone": "09818158680",
            "email": "abhishekvisen7@gmail.com",
            "linkedin": "www.linkedin.com/in/abhishek-visen",
            "portfolio": "https://abhishekvisen.netlify.app/"
        },
        "summary": "Experienced Full Stack Developer with expertise in React, Node.js, PostgreSQL, Sequelize, Drizzle ORM, Redis, Socket.io, OAuth2/JWT, Azure, CI/CD. Proven track record in developing scalable enterprise applications, optimizing performance, and leading projects. Adept at team collaboration, project management, and troubleshooting."
    },
    "skills": {
        "frontend": [
            "React.js",
            "Redux",
            "Tailwind CSS",
            "Leaflet",
            "TypeScript",
            "CesiumJS"
        ],
        "backend": [
            "Node.js",
            "PostgreSQL",
            "PostGIS",
            "Redis",
            "Sequelize",
            "Drizzle ORM",
            "Socket.io"
        ],
        "testing_and_optimization": [
            "Jest",
            "Web Vitals",
            "Performance Optimization"
        ],
        "tools_and_platforms": [
            "Git",
            "Docker",
            "OAuth2/JWT",
            "Azure",
            "CI/CD"
        ]
    },
    "experience": [
        {
            "role": "Sr. Full Stack Software Developer",
            "company": "Futurionic Private Limited",
            "location": "Gurugram, India",
            "start_date": "April 2024",
            "end_date": "Present",
            "responsibilities": [
                "Led a team of developers to build scalable enterprise applications using React, Node.js, and PostgreSQL",
                "Designed and optimized high-performance APIs for efficiency and scalability",
                "Integrated third-party services and automated workflows",
                "Provided technical mentorship and conducted code reviews"
            ]
        },
        {
            "role": "Software Developer",
            "company": "Futurionic Private Limited",
            "location": "Gurugram, India",
            "start_date": "April 2022",
            "end_date": "March 2024",
            "responsibilities": [
                "Developed and maintained HR Cosmo HRMS with attendance, employee, vendor, leave, and shift modules",
                "Collaborated with UX designers and backend engineers to improve application performance",
                "Optimized database queries reducing load times by 30%",
                "Resolved critical bugs ensuring stable deployments"
            ]
        }
    ],
    "projects": [
        {
            "name": "Enterprise HRMS Platform (HR Cosmo)",
            "duration": "April 2022 - Present",
            "description": [
                "Architected a comprehensive workforce management platform replacing legacy software for enterprise clients.",
                "Designed extensive Payroll Engine supporting custom tax components, deductions, and statutory compliance.",
                "Integrated Biometric & Mobile GPS attendance systems with real-time sync and geo-fencing.",
                "Implemented Role-Based Access Control (RBAC) using OAuth2 and JWT for secure field/office access.",
                "Optimized backend performance using a hybrid Sequelize/Drizzle ORM strategy for high-read dashboards."
            ]
        },
        {
            "name": "GIS Software for DBVHNL",
            "duration": "1 Year",
            "description": [
                "Developed a geospatial asset management system to map electrical infrastructure.",
                "Implemented interactive map layers using Leaflet and PostGIS for spatial queries.",
                "Enabled offline data collection for field engineers with auto-sync capabilities."
            ]
        },
        {
            "name": "Real-Time Chat Application",
            "duration": "Side Project -> Production",
            "description": [
                "Engineered a high-performance messaging engine using WebSockets (Socket.io) and Redis Pub/Sub.",
                "Integrated into the main HRMS to facilitate secure internal communication.",
                "Ensured message durability and history using PostgreSQL JSONB storage."
            ]
        }
    ],
    "education": [
        {
            "degree": "Bachelor of Technology (B.Tech)",
            "field": "Computer Science Engineering",
            "institution": "Greater Noida Institute of Technology",
            "duration": "2014 - 2018"
        },
        {
            "degree": "Higher and Senior Secondary Education",
            "institution": "Jain Senior Secondary School",
            "duration": "2009 - 2013"
        }
    ],
    "achievements": [
        "6 Times Employee of the Month at Futurionic Pvt Ltd for outstanding contributions"
    ],
    "languages": [
        {
            "language": "Hindi",
            "proficiency": "Full Professional Proficiency"
        },
        {
            "language": "English",
            "proficiency": "Full Professional Proficiency"
        }
    ],
    "interests": [
        "Cricket",
        "Chess",
        "Open-Source Development"
    ]
};
