import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useDrag } from '@use-gesture/react';

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
  const [direction, setDirection] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  }, [texts.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(nextSlide, 2500);
  }, [nextSlide]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, resetTimer]);

  const bind = useDrag(({ movement: [mx], direction: [dx], cancel }) => {
    const threshold = 100;
    if (Math.abs(mx) > threshold) {
      const newIndex = dx > 0 ?
        (currentIndex - 1 + texts.length) % texts.length :
        (currentIndex + 1) % texts.length;
      setCurrentIndex(newIndex);
      setDirection(dx);
      cancel();
      resetTimer();
    } else {
      controls.start({ x: mx, transition: { type: 'spring', damping: 40, stiffness: 400 } });
    }
  }, { from: () => [0, 0], filterTaps: true, rubberband: true });

  const containerVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? '-100%' : '100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? -1 : 1);
    setCurrentIndex(index);
    resetTimer();
  };

  return (
    <div className="relative h-64 w-[55rem]">
      <div className="overflow-hidden" ref={containerRef} {...bind()}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={containerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
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
      <div className="absolute -bottom-28 left-[70%] transform -translate-x-1/2 flex space-x-2">
        {texts.map((_, index) => (
            <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-[#efc101]' : 'bg-gray-300'
                }`}
            />
        ))}
      </div>
    </div>
  );
};

export default MultiTextSwitch;
