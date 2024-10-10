import React from 'react';
import './Modal.css'; // Ensure you have the CSS file for styling

const Modal = ({ isOpen, close, content, position }) => {
    if (!isOpen) return null;

    const positionStyles = {
        top: position.includes('top') ? '10%' : 'auto',
        bottom: position.includes('bottom') ? '10%' : 'auto',
        left: position.includes('left') ? '10%' : 'auto',
        right: position.includes('right') ? '10%' : 'auto',
    };

    return (
        <div className="modal-overlay" onClick={close}>
            <div className="modal-content" style={positionStyles} onClick={e => e.stopPropagation()}>
                {/* Removed the close button */}
                {content}
            </div>
        </div>
    );
};

export default Modal;
