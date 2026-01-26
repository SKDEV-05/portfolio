import React, { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaReact, FaLaravel, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { renderToStaticMarkup } from 'react-dom/server';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentIcon, setCurrentIcon] = useState(0);

  const techIcons = [
    <FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaPhp />, <FaPython />,
    <FaReact />, <FaLaravel />, <FaNodeJs />, <SiMongodb />, <SiMysql />
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Change icon every 3 seconds
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % techIcons.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
        .custom-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 10000;
          color: #00ff88;
          font-size: 24px;
          transform: translate(-50%, -50%);
          filter: drop-shadow(0 0 8px rgba(0, 255, 136, 0.6));
          transition: transform 0.1s ease;
        }
        .custom-cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background: #00ff88;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(0, 255, 136, 0.8);
        }
      `}</style>
      
      <div 
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      <div 
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {techIcons[currentIcon]}
      </div>
    </>
  );
};

export default CustomCursor;
