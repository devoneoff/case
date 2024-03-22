import React, { useRef } from "react";
import './ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2y8j4k6', 'template_jbcxj3e', form.current, 'cyvJmErg_utqVBQ7W')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            })
    }

    return (
        <div className="contact-form-content">
            <form ref={form} onSubmit={sendEmail}>
                <div className="name-container">
                    <input type="text" name="from_name" placeholder='First Name' />
                    <input type="text" name="from_surname" placeholder='Last Name' />
                </div>
                <input type="text" name="from_email" placeholder='Email' />
                <textarea type="text" name="message" placeholder='Message' rows="{3}"></textarea>
                <button>SEND</button>
            </form>
        </div>
    );
};

export default ContactForm;