 
 
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectlist";
 
const headingVariants = {
  hidden: { opacity: 0, y: 50 },    
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  },
};
 export   function Project() {

  return (
  <div   className=" py-20  px-4 xl:px-0" id="projects">
    
    <motion.h2
  className="text-xl sm:text-3xl md:text-4xl xl:text-5xl leading-[1.3] mb-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center py-[5px]
  "
  variants={headingVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
>
  My Projects
</motion.h2>  
    
      <div className="projects     ">
        {projects.map((p, i) => (
        <ProjectCard key={i} {...p}  />
      ))}
        </div>
        </div>
  );
}






















// Define the flipInX animation variant
// const flipInX = {
//   hidden: { rotateX: 90, opacity: 0 },
//   visible: { rotateX: 0, opacity: 1, transition: { duration: 0.8 } }
// };

// const flipInX = {
//   hidden: {
//     rotateX: 90,      // start flipped
//     opacity: 0         // invisible
//   },
//   visible: {
//     rotateX: 0,        // rotate to normal
//     opacity: 1,        // fade in
//     transition: {
//       duration: 0.8,   // animation speed
//       ease: [0.455, 0.03, 0.515, 0.955] // smooth ease
//     }
//   }
// };


// const flipInX = {
//   hidden: {
//     opacity: 0,
//     rotateX: 90,
//     transformPerspective: 400,
//     transition: { duration: 0 } // start immediately
//   },
//   visible: {
//     opacity: 1,
//     rotateX: 0,
//     transformPerspective: 400,
//     transition: {
//       duration: 1,
//       ease: [0.42, 0, 0.58, 1], // ease-in-out similar
//       times: [0, 0.4, 0.6, 0.8, 1],
//       rotateX: [90, -20, 10, -5, 0] // replicate the keyframes
//     }
//   }
// };
