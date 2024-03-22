import React from "react";
import './LinksOnBehanceGithub.css';

const LinksOnBehanceGithub = () => {
    return (
        <div className="links-container">
            <div className="links-about">In the course of learning and practicing the use of new tools and frameworks, deepening programming languages, I implemented various projects.</div>
            <div className="links-behance-github">
                <div className="links-behance-github-text">You can find all the projects in my profile on Github or on Behance.</div>
                <div className="links-behance-github-links">
                    <a href="https://www.behance.net/devoneoff" rel="noopener noreferrer" target="_blank">Visit Behance <i class='bx bx-right-arrow-alt'></i></a>
                    <a href="https://github.com/devoneoff" rel="noopener noreferrer" target="_blank">Visit GitHub <i class='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>
        </div>
    );
};

export default LinksOnBehanceGithub;