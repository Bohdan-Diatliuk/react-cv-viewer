export interface PersonalInfo {
    name: string;
    location: string;
    email: string;
    phone: string;
    linkedin?: string;
}

export interface Experience {
    id: number;
    period: string;
    company: string;
    location: string;
    position: string;
    responsibilities: string[];
}

export interface Education {
    id: number;
    period: string;
    institution: string;
    location: string;
    degree: string;
    description: string;
}

export interface Extracurricular {
    id: number;
    period: string;
    title: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface CVData {
    personalInfo: PersonalInfo;
    experiences: Experience[];
    educations: Education[];
    extracurriculars: Extracurricular[];
    languages: Language[];
    skills: string[];
}