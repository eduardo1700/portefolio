import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {

    const [dots, setDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => {
                if (prevDots.length >= 3) {
                    clearInterval(interval);
                    return prevDots;
                }
                return prevDots + '.';
            });
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="flex loadingspinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
        </div>
    );
};

export default LoadingScreen;
