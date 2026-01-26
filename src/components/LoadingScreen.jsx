import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/loading.scss';

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(3);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Countdown
    const countdown = setInterval(() => {
      setCount(prev => {
        if (prev <= 1) {
          clearInterval(countdown);
          setShowText(true);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
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
              className="countdown"
              key={count}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {count}
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
