import React from "react";
import './AboutCodeCardInfo.css';

const AboutCodeCardInfo = ({ codes }) => {
    return (
        <div className="languages-info-card">
            <div className="languages-info-content">
                {codes.map((item, index) => (
                    <React.Fragment key={ `code_${index}` }>
                        <div className="language-info">
                            <p>{ item.code }</p>
                            <p style={{paddingLeft: item.indent}}>{ item.text }</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default AboutCodeCardInfo;