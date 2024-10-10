// src/components/ContactModal.js
import React from 'react';
import './ContactModal.css'; // Importing CSS for styling the modal
import emailIcon from '../assets/gmaillogo.png';
import linkedinIcon from '../assets/linkedinlogo.png'; // If you have a LinkedIn logo

const ContactModal = () => {
    return (
        <div className="contact-content">
            <h2>Get In Touch</h2>
            <p>Contact Me</p>
            <div className="contact-links">
                <a href="mailto:pjshah2019@gmail.com" className="contact-link email">
                <img src={emailIcon} alt="Email Icon" className="icon"/>
                    Email</a>
                <a href="https://www.linkedin.com/in/priyash-jung-shah-9a6a171a6/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
                <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
                LinkedIn</a>
                {/* <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">WhatsApp</a> */}
            </div>
        </div>
    );
}

export default ContactModal;
