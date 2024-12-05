import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

const MultiTextSwitch = () => {
    const texts = [
        ['ARCHITECTEN', 'VAN DE', 'MACHINEBOUW'],
        ['BEWEZEN', 'TRACK RECORD', ''],
        ['ONE STOP', 'SHOPPING', ''],
        ['WIJ VERSTAAN DE', 'KUNST VAN HET', 'WEGLATEN'],
        ['EERLIJK, INTEGER', 'EN DUURZAAM', ''],
        ['AFSPRAAK IS', 'AFSPRAAK', ''],
        ['LUMP SUM', 'TURNKEY', 'PROJECTEN'],
        ['DUURZAME', 'ENGINEERING', '']
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    });

    const containerVariants = {
        enter: {x: '100%', opacity: 0},
        center: {x: 0, opacity: 1},
        exit: {x: '-100%', opacity: 0},
    };

    return (
        <div className="relative h-64 w-[55rem] overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={currentIndex}
                    variants={containerVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{duration: 0.5}}
                    className="absolute inset-0 flex flex-col items-start justify-center"
                >
                    {texts[currentIndex].map((line, index) => (
                        <span key={index} className="mb-2">
              {line}
            </span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MultiTextSwitch;
