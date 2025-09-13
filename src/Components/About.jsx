 

// import deepak from "../assets/ed.jpg";
// import { motion,  } from "framer-motion";
// import "./skills.css"
// import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
// import { SiExpress, SiJavascript, SiMongodb, SiPostman, SiRedux, SiTailwindcss, SiVercel } from "react-icons/si";
// import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
// import { TbBrandVscode } from "react-icons/tb";
// import "./about.css"
// import { useEffect,   useState } from "react";
 





 
// const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
// const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
// const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };










 
 
//  function SkillCard({ skills }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoverIndex, setHoverIndex] = useState(null);
//   const [animationsDone, setAnimationsDone] = useState(
//     new Array(skills.length).fill(false)
//   );
//   const [cycle, setCycle] = useState(0);
//   const [justReset, setJustReset] = useState(false);  

//   const animationsFinished = animationsDone.every(Boolean);

 
//   useEffect(() => {
//     if (animationsFinished) {
//       setActiveIndex(0);  
//       setJustReset(true);  
//       setCycle((c) => c + 1);  
//     }
//   }, [animationsFinished]);

 
//   useEffect(() => {
//     if (!animationsFinished) return;

//     const interval = setInterval(() => {
//       if (hoverIndex === null) {
       
//         if (justReset) {
//           setJustReset(false);
//           return;
//         }
//         setActiveIndex((prev) => (prev + 1) % skills.length);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [animationsFinished, hoverIndex, skills.length, cycle, justReset]);

//   return (
//     <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm">
//       <div className="p-6 relative z-10 pt-0">
//         <div className="flex flex-wrap gap-2">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               onViewportEnter={() => {
           
//                 setAnimationsDone((prev) => {
//                   const updated = [...prev];
//                   updated[index] = false;
//                   return updated;
//                 });
//               }}
//               onAnimationComplete={() => {
 
//                 setAnimationsDone((prev) => {
//                   const updated = [...prev];
//                   updated[index] = true;
//                   return updated;
//                 });
//               }}
//               onViewportLeave={() => {
     
//                 setActiveIndex(0);
//                 setJustReset(true);
//                 setAnimationsDone(new Array(skills.length).fill(false));
//               }}
//             >
//               <div
//                 className={`relative flex items-center gap-2 py-2 px-3 rounded-full text-xs font-semibold transition-all duration-300 ${
//                   (hoverIndex !== null
//                     ? hoverIndex === index
//                     : activeIndex === index)
//                     ? "bg-gray-700/80 scale-105 shadow-lg shadow-blue-500/20"
//                     : "bg-gray-800/50 hover:bg-gray-700/80"
//                 }`}
//                 onMouseEnter={() => setHoverIndex(index)}
//                 onMouseLeave={() => {
//                   setActiveIndex(index);
//                   setHoverIndex(null);
//                 }}
//               >
//                 <span>{skill.icon}</span>
//                 <span className="font-medium">{skill.name}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SkillCard;


 

 






// export function About() {
 
//  const skillCategories = [
//     { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
//     { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-yellow-400" /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
//     { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
//     { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
//     { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
//     { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-[#000000]" /> },
//     { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
//     { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
//     { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
//     { name: "Git/GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
//     { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
//     { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
//     { name: "Postman", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
//   ];

 

//   return (
//    <div className="mt-[12rem] grid grid-cols-2 gap-[2rem]   " id="about">  
//       <div className="about-text  ">

      
//         <motion.h2
//           variants={fadeInLeft}
//           initial="hidden"
//           whileInView="visible"
//           className="inline-block    "
//           viewport={{ once: false }}
//         >
//           About me
//         </motion.h2>

//         <motion.p
//           variants={fadeInLeft}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false }}
//           transition={{ delay: 0.1 }}
//         >
//           Hi there! I'm Deepak Bisht, a passionate Frontend Developer who loves building modern, responsive, and user-friendly web applications.
//         </motion.p>

//         <motion.p
//           variants={fadeInLeft}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false }}
//           transition={{ delay: 0.2 }}
//           style={{ marginTop: "1rem", marginBottom: "1rem" }}
//         >
//           I specialize in HTML, CSS, JavaScript, React, Redux, and Tailwind CSS, and I enjoy turning creative ideas into smooth, interactive digital experiences.
//         </motion.p>

//         <motion.p
//           variants={fadeInLeft}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false}}
//           transition={{ delay: 0.3 }}
//         >
//           My focus is on writing clean code, designing professional UIs, and continuously learning new technologies to grow as a developer.
//         </motion.p>

//         <motion.div
//           className="education"
//           variants={fadeInLeft}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false }}
//           transition={{ delay: 0.4 }}
//         >
//           <h3 className="mt-[2rem] text-[#23ce6b]  font-[700] mb-[15px]">Education:</h3>
//           <h4> Bachelor of Commerce (B.Com)</h4>
//           <p className="">School of Open Learning, University of Delhi | 2018 - 2021</p>
        
//         </motion.div>

      


//         <motion.h3
//           variants={fadeInLeft}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false }}
//           transition={{ delay: 0.6 }}
//           className=" "
//         >
//           Here are my main skills:
//         </motion.h3>



//         <div className="grid ">
//           <SkillCard
//             icon={() => <FiLayers className="w-6 h-6 text-white" />}
//             title="My Skills"
//             skills={skillCategories}
//             color="text-blue-400"
//           />
//         </div>

     

 
//       </div>

//       <motion.div
//         className="about-image  *:"
//         variants={fadeInRight}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         transition={{ delay: 0.21 }}
        
//       >
//         <img src={deepak} alt="Vinayak Singh" className="  ml-auto w-[50%] h-[500px]  bg-lime-400"/>
//       </motion.div>
     
//     </div>
//   );
// }































import deepak from "../assets/ed.jpg";
import { motion } from "framer-motion";
import "./skills.css";
import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";
// import "./about.css";
import { useEffect, useState } from "react";
import lottieFile from "../assets/study.json";
import AnimationLottie from "../helper/animationLottie";
import { FiLayers } from "react-icons/fi";
// Animation variants
// const fadeInLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};













//new

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,  
      // delayChildren: 0.2,    
    },
  },
};

 
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};


 



// SkillCard component
function SkillCard({ skills }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [animationsDone, setAnimationsDone] = useState(
    new Array(skills.length).fill(false)
  );
  const [cycle, setCycle] = useState(0);
  const [justReset, setJustReset] = useState(false);

  const animationsFinished = animationsDone.every(Boolean);

  // Reset on complete
  useEffect(() => {
    if (animationsFinished) {
      setActiveIndex(0);
      setJustReset(true);
      setCycle((c) => c + 1);
    }
  }, [animationsFinished]);

  // Automatic cycling
  useEffect(() => {
    if (!animationsFinished) return;

    const interval = setInterval(() => {
      if (hoverIndex === null) {
        if (justReset) {
          setJustReset(false);
          return;
        }
        setActiveIndex((prev) => (prev + 1) % skills.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [animationsFinished, hoverIndex, skills.length, cycle, justReset]);

  return (
    <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm">
      <div className="p-6 px-0 relative z-10 pt-0">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onViewportEnter={() => {
                setAnimationsDone((prev) => {
                  const updated = [...prev];
                  updated[index] = false;
                  return updated;
                });
              }}
              onAnimationComplete={() => {
                setAnimationsDone((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
              }}
              onViewportLeave={() => {
                setActiveIndex(0);
                setJustReset(true);
                setAnimationsDone(new Array(skills.length).fill(false));
              }}
            >
              <div
                className={`relative flex items-center gap-2 py-2 px-3 rounded-full     transition-all duration-300 tracking-widest ${
                  hoverIndex !== null
                    ? hoverIndex === index
                      ? "bg-gray-700/80 scale-105 shadow-lg shadow-blue-500/20"
                      : "bg-gray-800/50 hover:bg-gray-700/80"
                    : activeIndex === index
                    ? "bg-gray-700/80 scale-105 shadow-lg shadow-blue-500/20"
                    : "bg-gray-800/50 hover:bg-gray-700/80"
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => {
                  setActiveIndex(index);
                  setHoverIndex(null);
                }}
              >
                <span>{skill.icon}</span>
                <span className="font-semibold">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;

// About Section
export function About() {
  const skillCategories = [
    { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
    { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
    { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-[#000000]" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
    { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
    { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
    { name: "Git/GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
    { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
    { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
    { name: "Postman", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
  ];























 







  return (
   
 
 

//    <div
//   id="about"
//   className="about-section relative mt-32 px-6 lg:px-24 py-12"
 

// >
//   <div className="grid lg:grid-cols-2 gap-16 items-center ">
 
//     <motion.div
//       className="about-text bg-[#04081A] p-10 rounded-3xl shadow-2xl  space-y-6"
//       variants={fadeInLeft}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false }}
//     >
//       <h2 className="text-2xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//         About me
//       </h2>

//       <p className="text-white text-lg leading-relaxed tracking-widest">
//         Hi there! I'm Deepak Bisht, a passionate Frontend Developer who loves building modern, responsive, and user-friendly web applications.
//       </p>

     

//       <p className="text-white text-lg leading-relaxed tracking-widest" >
//         My focus is on writing clean code, designing professional UIs, and continuously learning new technologies to grow as a developer.
//       </p>

//       <div className="education   p-6  px-0 transition-shadow duration-300">
//         <h3 className="text-2xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Education:</h3>
//         <h4 className="text-white font-semibold tracking-widest leading-relaxed mt-[24px] ">Bachelor of Commerce (B.Com)</h4>
//         <p className="text-white font-semibold  tracking-widest leading-relaxed mt-[24px]">School of Open Learning, University of Delhi | 2018 - 2021</p>
//       </div>

//       <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//         Here are my main skills:
//       </h3>

//       <div className="mt-4">
//         <SkillCard
//           icon={() => <FiLayers className="w-6 h-6 text-white" />}
//           title="My Skills"
//           skills={skillCategories}
//           color="text-blue-400"
//         />
//       </div>
//     </motion.div>

 
    

   
// <motion.div
//   className="about-animation flex justify-center lg:justify-end w-full h-full"
//   variants={fadeInRight}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: false }}
//   transition={{ delay: 0.2 }}
// >
//   <div className="w-full h-full bg-[#04081A] rounded-3xl shadow-2xl relative overflow-hidden">
//     {/* Lottie Animation full cover */}
//     <AnimationLottie
//       animationPath={lottieFile}
//       style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//     />
//   </div>
// </motion.div>

      
 

//   </div>
// </div>  

 

 <div
      id="about"
      className="about-section relative mt-32 px-6 lg:px-24 py-12"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
     
        <motion.div
          className="about-text bg-[#04081A] p-10 rounded-3xl shadow-2xl space-y-6"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.h2 variants={fadeInLeft} className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            About me
          </motion.h2>

          <motion.p variants={fadeInLeft} className="text-white text-lg leading-relaxed tracking-widest">
            Hi there! I'm Deepak Bisht, a passionate Frontend Developer who loves building modern, responsive, and user-friendly web applications.
          </motion.p>

          <motion.p variants={fadeInLeft} className="text-white text-lg leading-relaxed tracking-widest">
            My focus is on writing clean code, designing professional UIs, and continuously learning new technologies to grow as a developer.
          </motion.p>

          <motion.div variants={fadeInLeft} className="education p-6 px-0 transition-shadow duration-300">
            <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Education:
            </h3>
            <h4 className="text-white font-semibold tracking-widest leading-relaxed mt-[24px] ">
              Bachelor of Commerce (B.Com)
            </h4>
            <p className="text-white font-semibold tracking-widest leading-relaxed mt-[24px]">
              School of Open Learning, University of Delhi | 2018 - 2021
            </p>
          </motion.div>

          <motion.h3 variants={fadeInLeft} className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Here are my main skills:
          </motion.h3>

       

<motion.div variants={fadeInLeft}>
  <SkillCard
    icon={() => <FiLayers className="w-6 h-6 text-white" />}
    title="My Skills"
    skills={skillCategories}
    color="text-blue-400"
  />
</motion.div>


        </motion.div>

     
        <motion.div
          className="about-animation flex justify-center lg:justify-end w-full h-full"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-full h-full bg-[#04081A] rounded-3xl shadow-2xl relative overflow-hidden">
            <AnimationLottie
              animationPath={lottieFile}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>
        </motion.div>
      </div>
    </div>

 

 

  );
}

