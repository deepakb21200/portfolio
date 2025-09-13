import React, { useEffect, useState } from "react";
import SparklesText from "./ui/sparklestext";
import { FlipWords } from "./ui/flip_words";
 import { motion, useAnimation} from "framer-motion";
import deepak from "../assets/ed.jpg";
const GridBackground = () => {



  return (
    <div className=" hello absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

function Heroes() {

//   const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,  
//       delayChildren: 0.2,    
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };









// 🔹 Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // text items ek ek karke aayenge
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// 🔹 Image ke liye alag variant
const imageItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

 



















  const words = [
    "MERN Stack Developer",
    "Frontend Enthusiast with React & Tailwind",
    "Learning Backend with Node & Express",
    "MongoDB Explorer & API Builder",
  ];

  const [code] = useState(`
const profile = {
    name: 'Deepak Bisht',
    title: 'MERN Stack Developer | Fresher | Passionate Learner',
    skills: [
        'HTML', 'CSS', 'JavaScript', 'Tailwind',
        'React', 'Redux', 'Node.js', 'Express',
        'MongoDB', 'Postman', 'Git', 'GitHub'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 0, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
        );
    }
};
  `);



    useEffect(() => {
 
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

 
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <>
 

    {/* <section className="relative flex items-center justify-center min-h-screen   text-white px-6 sm:px-12">
  <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
    
 
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 text-center lg:text-left"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
        Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f91f7] to-[#55e0c7]">Deepak Bisht</span>
      </h1>

 
      <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
        <i className="fas fa-rocket text-[#4f91f7] animate-bounce text-sm sm:text-base"></i>
        <span>
          <FlipWords
            className={"text-lg sm:text-xl text-[#55e0c7] font-medium"}
            words={words}
          />
        </span>
      </div>

      <p className="text-gray-300 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-widest">
        I specialize in building modern, responsive, and user-friendly web applications
        with clean UI and smooth interactions. Always curious to learn & explore new technologies.
      </p>

 
      <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#4f91f7] to-[#1fd1c1] hover:opacity-90 transition text-white font-medium shadow-lg"
        >
          Contact Me
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-gray-600 hover:border-[#1fd1c1] transition text-gray-200 hover:text-[#1fd1c1] font-medium"
        >
          Get Resume
        </a>
      </div>
    </motion.div>

    
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="flex-1 flex justify-center"
>
  <div className="relative">
    <img
      src={deepak}
      alt="Deepak Bisht"
      className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-fill block "
    />
     
  </div>
</motion.div>

  </div>
</section> */}

{/* <section className="relative flex items-center justify-center min-h-screen text-white px-6 sm:px-12">
  <motion.div
    className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    
    <motion.div className="flex-1 text-center lg:text-left space-y-6">
      <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
        Hi, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f91f7] to-[#55e0c7]">
          Deepak Bisht
        </span>
      </motion.h1>

      <motion.div variants={item} className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
        <i className="fas fa-rocket text-[#4f91f7] animate-bounce"></i>
        <span>
          <FlipWords
            className={"text-lg sm:text-xl text-[#55e0c7] font-medium"}
            words={words}
          />
        </span>
      </motion.div>

      <motion.p variants={item} className="text-gray-300 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-widest">
        I specialize in building modern, responsive, and user-friendly web applications
        with clean UI and smooth interactions. Always curious to learn & explore new technologies.
      </motion.p>

      <motion.div variants={item} className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#4f91f7] to-[#1fd1c1] hover:opacity-90 transition text-white font-medium shadow-lg"
        >
          Contact Me
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-gray-600 hover:border-[#1fd1c1] transition text-gray-200 hover:text-[#1fd1c1] font-medium"
        >
          Get Resume
        </a>
      </motion.div>
    </motion.div>

   
    <motion.div variants={item} className="flex-1 flex justify-center">
      <div className="relative">
        <img
          src={deepak}
          alt="Deepak Bisht"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-fill block"
        />
      </div>
    </motion.div>
  </motion.div>
</section> */}

    <section className="relative flex items-center justify-center min-h-screen text-white px-6 sm:px-12">
      <motion.div
        className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT CONTENT */}
        <motion.div className="flex-1 text-center lg:text-left space-y-6">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          >
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f91f7] to-[#55e0c7]">
              Deepak Bisht
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <i className="fas fa-rocket text-[#4f91f7] animate-bounce"></i>
            <span>
              <FlipWords
                className={
                  "text-lg sm:text-xl text-[#55e0c7] font-medium"
                }
                words={words}
              />
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="text-gray-300 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-widest"
          >
            I specialize in building modern, responsive, and user-friendly web
            applications with clean UI and smooth interactions. Always curious
            to learn & explore new technologies.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#4f91f7] to-[#1fd1c1] hover:opacity-90 transition text-white font-medium shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:border-[#1fd1c1] transition text-gray-200 hover:text-[#1fd1c1] font-medium"
            >
              Get Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div variants={imageItem} className="flex-1 flex justify-center">
          <div className="relative">
            <img
              src={deepak}
              alt="Deepak Bisht"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-fill block"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
    </>
  );
}

export default Heroes;











