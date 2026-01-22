import React from "react";
import { cvData } from "../../data/cvData";
import CVHeader from "./CVHeader/CVHeader";
import CVSection from "./CVSection/CVSection";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import EducationCard from "./EducationCard/EducationCard";
import SkillsList from "./SkillsList/SkillsList";
import './CV.scss';

const CV: React.FC = () => {
    return (
        <div className="cv">
            <CVHeader personalInfo={cvData.personalInfo} />
                
           <CVSection title="Relevant Experience"> 
                {cvData.experiences.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                ))}
            </CVSection> 

            <CVSection title="Education">
                {cvData.educations.map((edu) => (
                    <EducationCard key={edu.id} education={edu} />
                ))}
            </CVSection>

            <CVSection title="Extracurricular & Awards">
                <ul className="cv__extracurricular-list">
                    {cvData.extracurriculars.map((item) => (
                        <li key={item.id} className="cv__extracurricular-item">
                            <span className="cv__extracurricular-period">{item.period}</span>
                            <span className="cv__extracurricular-title">{item.title}</span>
                        </li>
                    ))}
                </ul>
            </CVSection>

            <CVSection title="Additional Information & Skills">
                <SkillsList languages={cvData.languages} skills={cvData.skills} />
            </CVSection>
        </div>
    );
};

export default CV;