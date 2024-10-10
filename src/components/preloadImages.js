// preloadImages.js

const preloadImages = () => {
    const images = [];
    [
        'tl-1', 'tl-2', 'tl-3', 'tl-4', 'tl-5',
        'tr-1', 'tr-2', 'tr-3', 'tr-4', 'tr-5',
        'bl-1', 'bl-2', 'bl-3', 'bl-4', 'bl-5',
        'br-1', 'br-2', 'br-3', 'br-4', 'br-5'
    ].forEach(image => {
        const img = new Image();
        img.src = `../assets/face-animation-dark/${image}.png`;
        images.push(img);
    });
};

export default preloadImages;
