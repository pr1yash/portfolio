import React from 'react';
import { motion } from 'framer-motion';

const AnimatedImage = ({ images, currentCorner }) => {
    const imageIndex = {
        about: 0,
        experience: 1,
        projects: 2,
        contact: 3
    };

    return (
        <motion.img
            src={images[imageIndex[currentCorner]]}
            alt="Dynamic Image"
            animate={{ scale: 1.1 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        />
    );
}

export default AnimatedImage;
