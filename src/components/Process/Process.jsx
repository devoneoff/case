import React from "react";
import './Process.css';

const Process = () => {
    return (
        <div className="process-container">

            <div className="process-card">
                <img src="./assets/images/pointSystemDesign.png" alt="System Design" />
            </div>
            <div className="process-card">
                <img src="./assets/images/pointUxUiDesign.png" alt="UX/UI Design" />
            </div>
            <div className="process-card">
                <img src="./assets/images/pointDevelopment.png" alt="Development" />
            </div>
            <div className="process-card">
                <img src="./assets/images/pointProduction.png" alt="Production" />
            </div>

            <div className="process-lines-block">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="process-lines-line">
                <div></div>
            </div>

            <div id="moonOne">
                <img src="./assets/images/moon.png" alt="" />
            </div>
            <div id="moonTwo">
                <img src="./assets/images/moon.png" alt="" />
            </div>
            <div id="moonThree">
                <img src="./assets/images/moon.png" alt="" />
            </div>
        </div>
    );
};

export default Process;