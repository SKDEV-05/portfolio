import React from 'react';
import '../styles/projects.scss';
import { PROJECTS } from '../data/index.jsx';
import ProjectCard from './ProjectCard.jsx';
import { useLanguage } from '../i18n/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className="section projects-section" id="projects">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="projects-container">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
