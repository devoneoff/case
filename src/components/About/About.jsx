import React from "react";
import { useState } from 'react';
import './About.css';
import AboutCodeCard from "./AboutCodeCard/AboutCodeCard";
import { LANGUAGES } from "../../utils/data";
import AboutCodeCardInfo from "./AboutCodeCardInfo/AboutCodeCardInfo";

const About = () => {

    const [ selectedLanguage, setSelectedLanguage ] = useState(LANGUAGES[0]);
    const handleSelectLanguage = ( data ) => {
        setSelectedLanguage( data );
    };

    return (
        <>
            <div className="about-container" id="about">
                
                <div className="about-content">
                    <div className="about-title-image">
                        <div className="about__title">About Me</div>
                        <div className="about__img">
                            <img src="./assets/images/meAbout.png" alt="" />
                        </div>
                    </div>
                    <div className="about__code">
                        <div className="about__code-title">
                            {LANGUAGES.map((item) => (
                                <AboutCodeCard 
                                    key={ item.title }
                                    title={ item.title }
                                    isActive={ selectedLanguage.title === item.title }
                                    onClick={ () => {
                                        handleSelectLanguage(item);
                                    }}
                                />
                            ))}
                        </div>
                        <div className="about__code-info">
                            <AboutCodeCardInfo 
                                codes = {selectedLanguage.codes}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className="about__theme-text">
                    Hi! My name is Irina Krylova. I have a diploma of secondary vocational education in the specialty "Information systems". I periodically take courses and intensive courses in development and UX/UI design. One day, during my studies, I got acquainted with the basic technologies of web development. I was so attracted to this direction and I began to study more deeply, studying modern technologies, methods and ways of developing web applications with a marketing design. You can find out more about the stack of technologies that I use in practice below
                </div>
            </div>
        </>
    );
};

export default About;