import profileImg from '../assets/profile/profile.jpeg';

// Projects - Ecommerce
import ecommerce1 from '../assets/projects/ecommerce/ecommerce1.png';
import ecommerce2 from '../assets/projects/ecommerce/ecommerce2.png';

// Projects - School
import schoolImg from '../assets/projects/school-management/school_management.png';

// Projects - Social
import social1 from '../assets/projects/social-media/social1.png';
import social2 from '../assets/projects/social-media/social2.png';
import socialChat from '../assets/projects/social-media/chat.png';

// Icons
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaReact, FaLaravel, FaNodeJs, FaGlobe, FaJava } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTailwindcss, SiExpo } from 'react-icons/si';

export const PROFILE = {
  name: "Saad Korma",
  title: "Full-Stack Web & Mobile Developer",
  description: "I build full-stack web and mobile applications, from backend APIs to frontend interfaces, focusing on performance and real-world solutions. I turn complex problems into smooth, efficient code.",
  image: profileImg,
  social: {
    instagram: "https://www.instagram.com/saadkorma_dev/",
    tiktok: "#",
    github: "https://github.com/SKDEV-05",
    phone: "0670955826"
  }
};

export const TECH_STACK = [
  { name: "HTML", icon: FaHtml5, level: 90 },
  { name: "CSS", icon: FaCss3Alt, level: 90 },
  { name: "JavaScript", icon: FaJs, level: 80 },
  { name: "PHP", icon: FaPhp, level: 70 },
  { name: "Python", icon: FaPython, level: 70 },
  { name: "Java", icon: FaJava, level: 60 },
  { name: "React", icon: FaReact, level: 80 },
  { name: "Laravel", icon: FaLaravel, level: 75 },
  { name: "MongoDB", icon: SiMongodb, level: 50 },
  { name: "Inertia", icon: FaGlobe, level: 70 },
  { name: "Express.js", icon: FaNodeJs, level: 40 },
  { name: "MySQL", icon: SiMysql, level: 80 },
  { name: "React Native", icon: SiExpo, level: 80 },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with product management, cart functionality, and secure checkout as well as an admin dashboard.",
    stack: ["HTML", "CSS", "Topography SCSS", "JavaScript", "PHP", "MySQL"],
    type: "slider",
    assets: [ecommerce1, ecommerce2]
  },
  {
    id: 2,
    title: "School Management System",
    description: "Comprehensive management system for educational institutions, handling students, grades, and administrative tasks efficiently.",
    stack: ["HTML", "CSS", "SCSS", "JavaScript", "PHP", "MySQL"],
    type: "scroll-reveal",
    assets: [schoolImg]
  },
  {
    id: 3,
    title: "Social Media Application",
    description: "Real-time social platform featuring live chat, posts, and user interactions without page refreshes, powered by WebSockets.",
    stack: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "Laravel Reverb"],
    type: "slider",
    assets: [social1, social2, socialChat]
  }
];
