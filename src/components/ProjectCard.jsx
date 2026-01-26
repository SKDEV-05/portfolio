import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLanguage } from '../i18n/LanguageContext';

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 !== 0;
  const [activeMedia, setActiveMedia] = useState(project.type === 'video-scroll' ? 'video' : null);
  const [selectedImage, setSelectedImage] = useState(0);
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
            autoHeight={true} // Adjusts height to slide content
            observer={true} // Updates on DOM changes
            observeParents={true} // Updates if parent changes (sticky/scroll)
          >
            {project.assets.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`${title} ${i + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {project.type === 'scroll-reveal' && (
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <img src={project.assets[0]} alt={title} style={{ width: '100%', borderRadius: '12px' }} />
            </motion.div>
        )}

        {project.type === 'video-scroll' && (
            <div className="video-section">
                <div className="main-media">
                    {activeMedia === 'video' ? (
                        <div className="video-wrapper-large">
                            <video 
                                className="custom-video-player"
                                controls
                                preload="metadata"
                                poster={project.images[0]}
                            >
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ) : (
                        <motion.div 
                            className="image-display"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={project.images[selectedImage]} alt={`Gallery ${selectedImage}`} />
                        </motion.div>
                    )}
                </div>
                
                {/* Gallery Thumbnails */}
                <div className="gallery-preview">
                     <div 
                        className={`gallery-thumb ${activeMedia === 'video' ? 'active' : ''}`}
                        onClick={() => setActiveMedia('video')}
                     >
                        <div className="video-thumb">
                            <span className="play-icon">▶</span>
                            <span className="thumb-label">Video Chat</span>
                        </div>
                     </div>
                     {project.images.map((img, i) => (
                        <div 
                            key={i}
                            className={`gallery-thumb ${activeMedia === 'image' && selectedImage === i ? 'active' : ''}`}
                            onClick={() => {
                                setActiveMedia('image');
                                setSelectedImage(i);
                            }}
                        >
                            <img src={img} alt={`Thumbnail ${i}`} />
                        </div>
                     ))}
                </div>
            </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
