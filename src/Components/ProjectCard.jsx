 
import { motion } from "framer-motion";
import githubIcon from "../assets/github.svg";
import "./project.css"
import { useEffect, useRef, useState } from "react";
 

  const flipInX = {
  hidden: {
    rotateX: 90,
    opacity: 0,
    // transformPerspective: 400,
    transformPerspective: 800,
  },
  visible: {
    rotateX: [90, -20, 10, -5, 0],
    opacity: [0, 1, 1, 1, 1],
    transition: {
      duration: 1,
      times: [0, 0.4, 0.6, 0.8, 1],
      // ease: "easeIn",
      ease: "easeInOut",
    },
  },
};

export default function ProjectCard({ title, desc, link, tech , videoUrl}) {

            const videoRef = useRef(null);
        const [isHovered, setIsHovered] = useState(false);
        const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
            const checkMobile = () => setIsMobile(window.innerWidth < 640);
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }, [])




    const handleMouseEnter = () => {
            if (isMobile) return;
            setIsHovered(true);
            if (videoRef.current) {
                videoRef.current.playbackRate = 1.25;
                videoRef.current.play().catch(e => console.log('Video play failed:', e));
            }
        };

        const handleMouseLeave = () => {
            if (isMobile) return;
            setIsHovered(false);
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        };
  return (
 
       <motion.div variants={flipInX} initial="hidden" whileInView="visible" viewport={{ once: false}}
           onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={!isMobile ? { scale: 1.05, y: -8, transition: { duration: 0.3 } } : {}}>
   <div className="project ">
     <div   className="  h-full relative">
      
      <header>
       <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
         <title>Folder</title>
         <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
       </svg>
       <div className="project-links">
     

       <a href={link} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
         </a>

        {/* External link commented out */}
      </div>
        <video
                        ref={videoRef}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 transform ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}`}
                        // src={projects.videoUrl}
                         src={videoUrl}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    />
   </header>
    <div className="body">
           <h3>{title}</h3>
         <p>{desc}</p>
   </div>
  
   </div>
    <footer>
             <ul className="tech-list">
              {tech.map((t, i) => (
         <li key={i}>{t}</li>
        ))}
        </ul>
     </footer>
   </div>
         </motion.div>
  );
}
