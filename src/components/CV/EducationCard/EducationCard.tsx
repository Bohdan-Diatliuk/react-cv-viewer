import React from "react";
import type { Education } from "../../../types/cv.types";
import './EducationCard.scss';

interface EducationCardProps {
    education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
    return (
        <article className="education-card">
            <div className="education-card__header">
                <div className="education-card__meta">
                    <span className="education-card__period">{education.period}</span>
                </div>
                <div className="education-card__title-group">
                    <h3 className="education-card__institution">{education.institution}</h3>
                    <span className="education-card__location">{education.location}</span>
                </div>
            </div>

            <h4 className="education-card__degree">{education.degree}</h4>
            <p className="education-card__description">{education.description}</p>
        </article>
    );
};

export default EducationCard;