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
                        <span key={index} className="skills-list__item">
                            {index < languages.length - 1 && <span className="skills-list__separator">,</span>}
                        </span>
                    ))}
                </div>
            </div>
            
            <div className="skills-list__group">
                <h3 className="skills-list__subtitle">Additional Skills:</h3>
                <div className="skills-list__items">
                    {skills.map((skill, index) => (
                        <span key={index} className="skills-list__item">
                            {index < skill.length - 1 && <span className="skills-list__separator">,</span>}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsList;