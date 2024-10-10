// src/components/ExperienceModal.js
import React from 'react';
import './ExperienceModal.css'; // Importing CSS for styling the modal
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; 


const ExperienceModal = () => {
    return (
        <div className="experience-content">
            <div className="experience-section">
                <h2>Languages</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>C++</span> <strong>Experienced</strong></li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>JavaScript</span> <strong>Expereinced</strong></li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>MySQL</span> <strong>Experienced</strong></li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>HTML-CSS</span> <strong>Experienced</strong></li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>React JS</span> <strong>Intermediate</strong></li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>Python</span> <strong>Intermediate</strong></li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>PHP</span> <strong>Intermediate</strong></li>
                </ul>
            </div>
            <div className="experience-section">
                <h2>Frameworks</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>React JS</span> <strong>Experienced</strong></li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>Express JS</span> <strong>Intermediate</strong></li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>Node JS</span> <strong>Intermediate</strong></li>
                </ul>
            </div>
            <div className="experience-section">
                <h2>Developer Tools</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>Git</span> <strong>Experienced</strong></li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>VS Code</span> <strong>Experienced</strong></li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icon" /><span>JUnit</span> <strong>Basic</strong></li>
                </ul>
            </div>
        </div>
    );
}

export default ExperienceModal;
