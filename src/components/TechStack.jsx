import React from 'react';
import '../styles/techstack.scss';
import { TECH_STACK } from '../data/index.jsx';

import { useLanguage } from '../i18n/LanguageContext';

const TechStack = () => {
  // Duplicate the stack to create seamless loop
  const displayStack = [...TECH_STACK, ...TECH_STACK];
  const { t } = useLanguage();

  return (
    <section className="tech-stack-section" id="stack">
        <h2>{t('techStack.title')}</h2>
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
    </section>
  );
};

export default TechStack;
