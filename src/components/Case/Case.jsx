import React, { useState } from 'react';
import './Case.css';
import { CASES } from '../../utils/data';
import CaseCategory from './CaseCategory/CaseCategory';
import CaseProject from './CaseProject/CaseProject';

const Case = () => {

    const [ selectedCase, setSelectedCase ] = useState(CASES[0]);
    const handleSelectCase = ( data ) => {
        setSelectedCase( data );
    };

    return (
        <div className="case-container" id="case">
            <div className="case__title">
                <img src="./assets/images/PORTFOLIO.png" alt="" />
            </div>
            <div className="case-content">
                <div className="case-content-title">Digital Product Showcase</div>
                <div className="case-content-category">
                    {CASES.map(( item ) => (
                        <CaseCategory 
                            key={ item.title }
                            title={ item.title }
                            isActive={ selectedCase.title === item.title }
                            onClick={ () => {
                                handleSelectCase( item );
                            }}
                        />
                    ))}
                </div>
                <div className="case-content-projects">
                    <CaseProject 
                        cases={ selectedCase.cases }
                    />
                </div>
            </div>
        </div>
    );
};

export default Case;