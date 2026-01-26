import React from 'react';
import '../styles/about.scss';
import { PROFILE } from '../data/index.jsx';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="section about-section" id="about">
      <h2 className="section-title">{t('about.title')}</h2>
      <div className="about-content">
        <div className="profile-img">
          <img src={PROFILE.image} alt={PROFILE.name} />
        </div>
        <div className="text-content">
          <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
        </div>
      </div>
    </section>
  );
};

export default About;
