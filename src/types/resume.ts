export interface ResumeData {
    basics: Basics;
    skills: Skills;
    experience: Experience[];
    projects: Project[];
    education: Education[];
    achievements: string[];
    languages: Language[];
    interests?: string[];
}

export interface Basics {
    name: string;
    title: string;
    location: {
        city: string;
        country: string;
    };
    contact: {
        phone: string;
        email: string;
        linkedin: string;
        portfolio: string;
    };
    summary: string;
    notice_period?: string;
}

export interface Skills {
    programming: string[];
    frontend: string[];
    backend: string[];
    databases_and_messaging: string[];
    architecture_and_security: string[];
    cloud_and_devops: string[];
    ai_genai: string[];
    tools: string[];
}

export interface Experience {
    role: string;
    company: string;
    location: string;
    start_date: string;
    end_date: string;
    responsibilities: string[];
}

export interface Project {
    name: string;
    technologies?: string;
    duration?: string;
    description: string[];
}

export interface Education {
    degree: string;
    field?: string;
    institution: string;
    duration: string;
}

export interface Language {
    language: string;
    proficiency: string;
}
