import React from "react";
import './MobileNav.css';

const MobileNav = ({isOpen, toggleMenu}) => {
    return (
        <>
            <div 
                className={`mobile-menu ${isOpen ? "active" : ""}`} 
                onclick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <div className="nav__logo">
                        <img src="logo.png" alt="" />
                    </div>
                    <ul>
                        <li>
                            <a href="#home" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="menu-item">About</a>
                        </li>
                        <li>
                            <a href="#stack" className="menu-item">Stack</a>
                        </li>
                        <li>
                            <a href="#case" className="menu-item">Case</a>
                        </li>
                        <li>
                            <a href="#contact" className="contact-btn">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default MobileNav;