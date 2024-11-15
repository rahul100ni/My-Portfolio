import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isText, setIsText] = useState(false);
  
  // Spring configuration for smooth movement
  const springConfig = { 
    dot: { stiffness: 1000, damping: 50, mass: 0.2 },
    ring: { stiffness: 100, damping: 25, mass: 0.5 }
  };

  // Create springs for smoother movement
  const dotX = useSpring(useMotionValue(0), springConfig.dot);
  const dotY = useSpring(useMotionValue(0), springConfig.dot);
  const ringX = useSpring(useMotionValue(0), springConfig.ring);
  const ringY = useSpring(useMotionValue(0), springConfig.ring);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update position
      setPosition({ x: clientX, y: clientY });
      dotX.set(clientX);
      dotY.set(clientY);
      ringX.set(clientX);
      ringY.set(clientY);

      // Check element under cursor
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      
      // Detect interactive elements
      setIsPointer(
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.hasAttribute('role') ||
        computedStyle.cursor === 'pointer'
      );

      // Detect text elements
      setIsText(
        target.tagName.toLowerCase() === 'p' ||
        target.tagName.toLowerCase() === 'span' ||
        target.tagName.toLowerCase() === 'h1' ||
        target.tagName.toLowerCase() === 'h2' ||
        target.tagName.toLowerCase() === 'h3' ||
        target.tagName.toLowerCase() === 'h4' ||
        target.tagName.toLowerCase() === 'h5' ||
        target.tagName.toLowerCase() === 'h6'
      );

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    // Only add cursor on desktop devices
    if (window.innerWidth > 768 && window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [dotX, dotY, ringX, ringY, isVisible]);

  // Don't render on mobile or when cursor is not visible
  if (typeof window !== 'undefined' && 
      (window.innerWidth <= 768 || 
       !window.matchMedia('(pointer: fine)').matches || 
       !isVisible)) {
    return null;
  }

  return (
    <>
      {/* Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-violet-400 rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isPointer ? 2.5 : isText ? 2 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          scale: { type: "spring", ...springConfig.dot },
          opacity: { duration: 0.2 }
        }}
      />

      {/* Inner Ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-violet-400/50 rounded-full pointer-events-none z-[99]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isPointer ? 1.8 : isText ? 1.5 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          scale: { type: "spring", ...springConfig.ring },
          opacity: { duration: 0.2 }
        }}
      />

      {/* Outer Ring - Only shows on interactive elements */}
      {(isPointer || isText) && (
        <motion.div
          className="fixed top-0 left-0 w-10 h-10 border border-violet-400/20 rounded-full pointer-events-none z-[98]"
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        />
      )}
    </>
  );
};

export default Cursor;