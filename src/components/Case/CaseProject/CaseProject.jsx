import React from "react";
import './CaseProject.css';

const CaseProject = ({ cases }) => {


    
    return (
        <div className="case-project-container">
            {cases.map(( item, index ) => (
                <React.Fragment key={ `case_${index}` }>
                    <div className="case-project">
                        <div className="case-image-content">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="case-info-content">
                            <div className="case-technologies">
                                {
                                    item.technologies.map(( tech, techIndex ) => (
                                        <div key={ `tech_${techIndex}` }>
                                            <p>{tech.technology}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="case-name-link">
                                <div className="case-name">
                                    <p>{item.case}</p>
                                </div>
                                <div className="case-link">
                                    <a href={item.link} rel="noopener noreferrer" target="_blank">
                                        <i class='bx bx-arrow-back'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default CaseProject;