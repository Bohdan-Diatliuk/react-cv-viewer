import type { CVData } from "../types/cv.types";

export const cvData: CVData = {
    personalInfo: {
        name: "Claudette Lening",
        location: "CareerOS Academy - Barcelona, Spain",
        email: "claudette.lening@cosacademy.edu",
        phone: "+34 612 345 678",
        linkedin: "linkedin.com/in/claudette-lening"
    },

    experiences: [
        {
            id: 1,
            period: "10.24 - 02.25",
            company: "CyberFort Solutions",
            location: "Barcelona, Spain",
            position: "Project Coordinator",
            responsibilities: [
                "Oversaw scheduling, documentation, and progress tracking for internal IT infrastructure upgrades.",
                "Worked alongside security analysts to identify workflow bottlenecks and recommend process improvements.",
                "Assisted in communication between vendors and reviewed contracts for third-party software providers."
            ]
        },
        {
            id: 2,
            period: "05.24 - 08.24",
            company: "BrightWave Digital",
            location: "Barcelona, Spain",
            position: "Summer Project Management Intern",
            responsibilities: [
                "Coordinated deadlines and deliverables for a cross-functional team handling client advertising campaigns.",
                "Curated internal status reports summarizing campaign metrics, budget usage, and upcoming project milestones.",
                "Developed foundational practices in agile project management tools and team collaboration platforms."
            ]
        },
        {
            id: 3,
            period: "06.23 - 05.24",
            company: "DeltaNova Technologies",
            location: "Madrid, Spain",
            position: "Summer Business Operations Intern",
            responsibilities: [
                "Streamlined project documentation and meeting records to support efficient product launch execution.",
                "Engaged in client update calls, providing project status recaps and next-step outlines.",
                "Prepared post-project reviews that uncovered a 15% increase in team efficiency opportunities and documented best practices."
            ]
        }
    ],

    educations: [
        {
            id: 1,
            period: "09.23 - 05.24",
            institution: "CareerOs Academy",
            location: "Barcelona, Spain",
            degree: "MSc in Project Management",
            description: "Engaged in comprehensive coursework on Agile methodologies, risk management, and stakeholder analysis; led a capstone project simulating a cross-functional product launch."
        },

        {
            id: 2,
            period: "09.19 - 05.22",
            institution: "CareerOs Academy",
            location: "Barcelona, Spain",
            degree: "BA in Business Administration",
            description: "Completed coursework in corporate finance, marketing strategy, and organizational behavior; collaborated on a consulting project for a local startup to optimize operations."
        }
    ],

    extracurriculars: [
        {
            id: 1,
            period: "09.21 - 05.21",
            title: "President of the Data Analytics Club at CareerOS Academy"
        }
    ],

    languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Fluent" },
        { name: "Italian", level: "Intermediate" }
    ],

    skills: [
        "NIST Cybersecurity Framework",
        "Microsoft Office",
        "Kali Linux",
        "Incident Response Planning",
        "Firewall Configuration",
        "AWS Security",
        "AES Encryption"
    ]
};