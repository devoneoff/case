import React from "react";
import './Contact.css';
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h4>Contact Me</h4>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-talk">
                        <div className="contact-talk-info">
                            <div className="contact-talk-title">
                                <span>Let's talk</span>
                                <p>Interested in working with me or got some questions? Hit up by <span>email</span> or my <span>social media</span>. </p>
                            </div>
                            <div className="contact-talk-image">
                                <img src="./assets/images/meMain.png" alt="me" />
                                <span><i class='bx bx-message-rounded-detail'></i></span>
                            </div>
                        </div>
                        <div className="contact-talk-links">
                            <a href="https://vk.com/devoneoff" rel="noopener noreferrer" target="_blank">VK chat</a>
                            <a href="./assets/CV DevoneOff.pdf" rel="noopener noreferrer" target="_blank" download>Download my CV</a>
                        </div>
                    </div>

                    <div className="contact-mobile">
                        <div className="contact-mobile-new">New! <i class='bx bxs-mobile'></i></div>
                        <div className="contact-mobile-overflow">
                            <div className="contact-info-text">
                                <p>Now there is also a mobile application.</p>
                                <p>It has become easier to view projects and keep in touch with me.</p>
                                <p>Download the app from the link below</p>
                                <button className="btn">Download App</button>
                            </div>
                            <div className="contact-image">
                                <img src="./assets/images/MobileScreen.png" alt="MobileScreen" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;