import React from 'react';
import '../styles/about.scss'; // Sharing styles for simplicity or create footer.scss
import { PROFILE } from '../data/index.jsx';
import { FaInstagram, FaGithub, FaPhone, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
           {PROFILE.social.github && <a href={PROFILE.social.github} target="_blank" rel="noreferrer"><FaGithub /></a>}
           {PROFILE.social.instagram && <a href={PROFILE.social.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>}
           {PROFILE.social.tiktok && <a href={PROFILE.social.tiktok} target="_blank" rel="noreferrer"><FaTiktok /></a>}
        </div>
        
        <div className="contact-info">
             <div><FaPhone /> {PROFILE.social.phone}</div>
             <div>Available for Freelance & Professional Projects</div>
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
