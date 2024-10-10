import React from 'react';
import './AboutModal.css'; // Importing CSS specific to the About Modal
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Import icons
import resume from '../assets/resume.pdf'; // Import your resume file

function AboutModal() {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resume; // Path to the resume file
        link.setAttribute('download', 'PriyashJungShahResume.pdf'); // The name the downloaded file will have
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="about-content">
            <div className="about-item">
                <FontAwesomeIcon icon={faFileAlt} className="about-icon" />
                <h2>Resume</h2>
                <button onClick={downloadResume}>Download</button>
            </div>
            <div className="about-item">
                <FontAwesomeIcon icon={faBriefcase} className="about-icon" />
                <h2>Experience</h2>
                <p>4 Months + Software Developer Experience</p>
            </div>
            <div className="about-item">
                <FontAwesomeIcon icon={faGraduationCap} className="about-icon" />
                <h2>Education</h2>
                <p>Bachelor of Computer Science<br /> May 2025 <br /> University of North Texas</p>
            </div>
        </div>
    );
}

export default AboutModal;
