import React, { useState, useEffect } from 'react';
import './PortfolioPage.css';
import preloadImages from './preloadImages';
import Modal from './Modal';
import AboutModal from './AboutModal';
import ExperienceModal from './ExperienceModal';
import ContactModal from './ContactModal';

const PortfolioPage = () => {
    const [currentAnimation, setCurrentAnimation] = useState("");
    const [modalContent, setModalContent] = useState("");
    const [modalPosition, setModalPosition] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
    const [typedText, setTypedText] = useState(""); // State for the typewriter effect
    const fullText = "Prriyash Jung Shah"; // Full text to display

    useEffect(() => {
        preloadImages();
    }, []);

        // Typewriter effect function
    useEffect(() => {
        let index = 0; // Initialize the index
        const timer = setInterval(() => {
            if (index < fullText.length) {
                console.log(`Adding character: ${fullText.charAt(index)}`); // Log the character being added
                setTypedText((prev) => prev + fullText.charAt(index)); // Add next character
                index++;
            } else {
                clearInterval(timer); // Clear the interval when done
            }
        }, 100); // Adjust speed here

        return () => clearInterval(timer); // Cleanup on unmount
    }, []); // Empty dependency array to run once

    const handleClick = (direction) => {
        setCurrentAnimation(`animate-${direction}`);
        setModalPosition(direction);
        if (direction === "top-left") {
            setModalContent(<AboutModal />);
        } else if (direction === "top-right") {
            setModalContent(<ExperienceModal />);
        } else if (direction === "bottom-right") {
            setModalContent(<ContactModal />);
        }
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentAnimation("");
    };

    return (
        <div className="portfolio-container" onClick={() => setCurrentAnimation("")}>
            <div className="corner top-left" onClick={(e) => { e.stopPropagation(); handleClick("top-left"); }}>About</div>
            <div className="corner top-right" onClick={(e) => { e.stopPropagation(); handleClick("top-right"); }}>Experience</div>
            <div className="center-piece-container">
                <div className="intro-text">
                    <p>Hello, I'm</p>
                    <h2>{typedText}</h2> {/* Display the typed text */}
                    <p>Software Developer</p>
                </div>
                <div className={`center-piece ${currentAnimation}`}></div>
            </div>
            <div className="corner bottom-left" onClick={(e) => { e.stopPropagation(); handleClick("bottom-left"); }}>Projects</div>
            <div className="corner bottom-right" onClick={(e) => { e.stopPropagation(); handleClick("bottom-right"); }}>Contact</div>
            <Modal isOpen={isModalOpen} close={closeModal} content={modalContent} position={modalPosition} />
        </div>
    );
}

export default PortfolioPage;
