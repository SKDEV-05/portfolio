import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/loading.scss';

const LoadingScreen = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show spinner for 1.5 seconds, then text for 1 second
    const timer1 = setTimeout(() => setShowText(true), 1500);
    const timer2 = setTimeout(() => onComplete(), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="loading-content">
          {!showText ? (
            <motion.div 
              className="spinner-container"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="professional-spinner"></div>
            </motion.div>
          ) : (
            <motion.div 
              className="welcome-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Welcome to the</h1>
              <h2>Best Portfolio of Developer</h2>
            </motion.div>
          )}
        </div>
        
        {/* Animated particles in background */}
        <div className="loading-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
