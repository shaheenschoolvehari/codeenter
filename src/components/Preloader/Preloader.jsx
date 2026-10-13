'use client';
import React, { useEffect, useState } from 'react';
import bg from '@/assets/images/loader.png';

const Preloader = () => {
    const [visible, setVisible] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setOpacity(0);
        }, 2200);

        const removeTimer = setTimeout(() => {
            setVisible(false);
        }, 2700);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className="preloader"
            style={{
                opacity: opacity,
                transition: "opacity 0.5s ease-in-out",
                pointerEvents: opacity === 0 ? "none" : "all",
            }}
        >
            <div className="preloader__image" style={{ backgroundImage: `url(${bg.src})` }}></div>
        </div>
    );
};

export default Preloader;