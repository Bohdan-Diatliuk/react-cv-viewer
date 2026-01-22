import React from "react";
import type { PersonalInfo } from "../../../types/cv.types";
import './CVHeader.scss';

interface CVHeaderProps {
    personalInfo: PersonalInfo;
}

const CVHeader: React.FC<CVHeaderProps> = ({ personalInfo }) => {
    return (
        <header className="cv-header">
            <h1 className="cv-header__name">{personalInfo.name}</h1>
            <div className="cv-header__contact">
                <span className="cv-header__contact-item">{personalInfo.location}</span>
                <a href={`mailto:${personalInfo.email}`} className="cv-header__contact-item cv-header__contact-item--link">
                    {personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone}`} className="cv-header__contact-item cv-header__contact-item--link">
                    {personalInfo.phone}
                </a>
                <a 
                    href={`https://www.linkedin.com/in/${personalInfo.linkedin}`}
                    className="cv-header__contact-item cv-header__contact-item--link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {personalInfo.linkedin}
                </a>
            </div>
        </header>
    )
}

export default CVHeader;