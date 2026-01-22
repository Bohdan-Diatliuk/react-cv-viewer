import React from "react";
import './CVSection.scss';

interface CVSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const CVSection: React.FC<CVSectionProps> = ({ title, children, className = "" }) => {
    return (
        <section className={`cv-section ${className}`}>
            <h2 className="cv-section__title">{title}</h2>
            <div className="cv-section__content">
                {children}
            </div>
        </section>
    );
};

export default CVSection;