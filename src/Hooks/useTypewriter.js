import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => prevText + text[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 100);

        return () => clearInterval(interval);
    }, [currentIndex, text]);

    return <span>{currentText}</span>;
};

export default Typewriter;