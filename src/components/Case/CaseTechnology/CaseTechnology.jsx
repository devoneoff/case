import React from "react";
import './CaseTechnology.css';

const CaseTechnology = ({ technologies }) => {
    return (
        <div className="case-techno-container">
            {technologies.map(( item, index ) => (
                <React.Fragment key={ `techno_${index}` }>
                    <div className="case-techno-content">
                        <span>{item.technology}</span>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default CaseTechnology;