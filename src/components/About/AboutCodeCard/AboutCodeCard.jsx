import React from "react";
import './AboutCodeCard.css';

const AboutCodeCard = ({ title, isActive, onClick }) => {
    return (
        <div 
            className={ `language-card ${ isActive ? "active" : "" }` }
            onClick={ () => onClick() }
        >
            <span>{title}</span>
        </div>
    );
};

export default AboutCodeCard;