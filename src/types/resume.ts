export interface ResumeData {
    basics: Basics;
    skills: Skills;
    experience: Experience[];
    projects: Project[];
    education: Education[];
    achievements: string[];
    languages: Language[];
    interests: string[];
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
    };
    summary: string;
}

export interface Skills {
    frontend: string[];
    backend: string[];
    testing_and_optimization: string[];
    tools_and_platforms: string[];
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
    duration: string;
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
