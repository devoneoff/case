import React from "react";
import "./Navbar.css";
import MobileNav from "../MobileNav/MobileNav";
import { useState } from "react";


const Navbar = () => {


    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
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

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span 
                        class={"material-symbols-outlined"}
                        style={{fontSize: "1.8rem"}}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};
export default Navbar;