import React from "react";
import type { Experience } from "../../../types/cv.types";
import './ExperienceCard.scss';

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <article className="experience-card">
            <div className="experience-card__header"> 
                <div className="experience-card__meta">
                    <span className="experience-card__period">{experience.period}</span>
                </div>
                <div className="experience-card__title-group">
                    <h3 className="experience-card__company">{experience.company}</h3>
                    <span className="experience-card__location">{experience.location}</span>
                </div>
            </div>

                <h4 className="experience-card__position">{experience.position}</h4>

                <ul className="experience-card__responsibilities">
                    {experience.responsibilities.map((resp, index) => (
                        <li key={index} className="experience-card__responsibility">
                            {resp}
                        </li>
                    ))}
                </ul>
        </article>
    );
};

export default ExperienceCard;