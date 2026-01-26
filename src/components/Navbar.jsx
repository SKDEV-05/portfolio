import React, { useState } from 'react';
import '../styles/navbar.scss';
import { motion } from 'framer-motion';
import { FaMusic, FaVolumeMute, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Logic to play music would go here if file provided
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="logo" onClick={() => scrollToSection('hero')}>SK.</div>
      
      <ul className="nav-links">
        <li><a onClick={() => scrollToSection('hero')}>{t('nav.home')}</a></li>
        <li><a onClick={() => scrollToSection('stack')}>{t('nav.skills')}</a></li>
        <li><a onClick={() => scrollToSection('projects')}>{t('nav.projects')}</a></li>
        <li><a onClick={() => scrollToSection('about')}>{t('nav.about')}</a></li>
        <li><a onClick={() => scrollToSection('contact')}>{t('nav.contact')}</a></li>
      </ul>

      <div className="controls">
        <div className="language-switcher">
          <button 
            className="lang-btn" 
            onClick={() => setShowLangMenu(!showLangMenu)}
            title="Change Language"
          >
            <span className="flag">{currentLang.flag}</span>
            <FaGlobe />
          </button>
          
          {showLangMenu && (
            <div className="lang-menu">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  className={`lang-option ${language === lang.code ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setShowLangMenu(false);
                  }}
                >
                  <span className="flag">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="music-btn" onClick={toggleMusic} title="Toggle Music">
          {isPlaying ? <FaMusic /> : <FaVolumeMute />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
