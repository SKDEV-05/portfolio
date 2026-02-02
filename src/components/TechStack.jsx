import React from 'react';
import '../styles/techstack.scss';
import { TECH_STACK } from '../data/index.jsx';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const TechStack = () => {
  // Duplicate the stack to create seamless loop for scrolling section
  const displayStack = [...TECH_STACK, ...TECH_STACK];
  const { t } = useLanguage();

  return (
    <section className="tech-stack-section" id="stack">
      <div className="container">
        <h2 className="section-title">{t('techStack.title')}</h2>
        
        {/* Scrolling Tech Icons */}
        <div className="scroll-wrapper" dir="ltr">
          <div className="track">
            {displayStack.map((tech, index) => (
              <div className="tech-card" key={index}>
                <tech.icon className="icon" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid with Progress Bars */}
        <div className="skills-grid">
          {TECH_STACK.map((tech, index) => (
            <motion.div 
              className="skill-item"
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="skill-header">
                <div className="skill-info">
                  <tech.icon className="skill-icon" />
                  <span className="skill-name">{tech.name}</span>
                </div>
                <span className="skill-percentage">{tech.level}%</span>
              </div>
              <div className="progress-bar">
                <motion.div 
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
