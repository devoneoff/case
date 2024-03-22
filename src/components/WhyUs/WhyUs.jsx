import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <div className="why-container">
            <h2 className="why-title">Why us?</h2>
            <div className="why-content">
                <div className="why-content-image">
                    <img src="./assets/images/logoOnPc.png" alt="" />
                </div>
                <div className="why-content-info">
                    <p>We will perform the work efficiently in a short time, observing only modern principles, methods, technologies and development tools.</p>
                    <p>A well-designed algorithm for the operation of the web application, markup layout using Perfect Pixel and BEM methodology.</p>
                    <p>We will respect and fulfill all your wishes for the design of your future web application, and we will also be able to continue to administer it.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;