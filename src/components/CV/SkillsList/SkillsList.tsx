import React from "react";
import type { Language } from "../../../types/cv.types";
import './SkillsList.scss';

interface SkillsListProps {
    languages: Language[];
    skills: string[];
}

const SkillsList: React.FC<SkillsListProps> = ({ languages, skills }) => {
    return (
        <div className="skills-list">
            <div className="skills-list__group">
                <h3 className="skills-list__subtitle">Languages:</h3>
                <div className="skills-list__items">
                    {languages.map((lang, index) => (
                        <React.Fragment key={index}>
                            <span className="skills-list__item">
                                {lang.name} <span className="skills-list__level">({lang.level})</span>
                            </span>
                            {index < languages.length - 1 && ', '}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            
            <div className="skills-list__group">
                <h3 className="skills-list__subtitle">Additional Skills:</h3>
                <div className="skills-list__items">
                    {skills.map((skill, index) => (
                        <React.Fragment key={index}>
                            <span className="skills-list__item">{skill}</span>
                            {index < skills.length - 1 && ', '}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsList;