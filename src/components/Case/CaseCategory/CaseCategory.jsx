import React from 'react';
import './CaseCategory.css';

const CaseCategory = ({ title, isActive, onClick }) => {
    return (
        <div 
            className={ `case-category ${ isActive ? "active" : "" }` }
            onClick={ () => onClick() }
        >
            <span>{title}</span>
        </div>
    );
};

export default CaseCategory;