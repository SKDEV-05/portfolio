import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLanguage } from '../i18n/LanguageContext';

const ImageWithSkeleton = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
      {!loaded && <div className="skeleton-loader"></div>}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ ...props.style, opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease', width: '100%', display: 'block', objectFit: 'cover' }}
        {...props}
      />
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 !== 0;
  const { t } = useLanguage();

  // Get translated project data
  let projectKey = '';
  if (project.title.includes('E-commerce')) projectKey = 'ecommerce';
  else if (project.title.includes('School')) projectKey = 'school';
  else if (project.title.includes('Social')) projectKey = 'social';

  const title = projectKey ? t(`projects.${projectKey}.title`) : project.title;
  const description = projectKey ? t(`projects.${projectKey}.description`) : project.description;

  return (
    <motion.div 
      className={`project-card ${isReversed ? 'reversed' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="project-content">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <div className="stack">
          {project.stack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-media" dir="ltr">
        {project.type === 'slider' && (
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            className="project-slider"
            autoHeight={true}
            observer={true}
            observeParents={true}
          >
            {project.assets.map((img, i) => (
              <SwiperSlide key={i}>
                <ImageWithSkeleton src={img} alt={`${title} ${i + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {project.type === 'scroll-reveal' && (
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ height: '100%', width: '100%' }}
            >
                <ImageWithSkeleton src={project.assets[0]} alt={title} style={{ borderRadius: '12px', objectPosition: 'top' }} />
            </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
