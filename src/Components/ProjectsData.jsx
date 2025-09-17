import React, { useEffect, useState } from 'react'

function ProjectsData() {
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
    <>

    </>
  )
}

export default ProjectsData