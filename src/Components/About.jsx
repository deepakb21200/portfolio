 
import VinayakSingh from "../assets/VinayakSingh.webp";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import wordpress from "../assets/wordpress.svg";
import shopify from "../assets/shopify.svg";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import jsIcon from "../assets/js-icon.svg";
 
import redux from "../assets/redux.png";
import reactIcon from "../assets/react-icon.svg";
import tailwinds from "../assets/tailwinds.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import vueIcon from "../assets/vue-icon.svg";
import boostrapIcon from "../assets/bootstrap-icon.svg";
import { motion } from "framer-motion";
import "./about.css"

// Variants for animations
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export function About() {
  const skills = [
    // { src: python, alt: "Python", delay: 0.1 },
    // { src: java, alt: "Java", delay: 0.11 },
    { src: redux, alt: "Redux", delay: 0.2 },
      { src: reactIcon, alt: "React", delay: 0.13 },
    { src: jsIcon, alt: "JavaScript", delay: 0.12 },
      { src: tailwinds, alt: "JavaScript", delay: 0.12 },
       { src: cssIcon, alt: "Css", delay: 0.19 },
          { src: htmlIcon, alt: "Html", delay: 0.18 },
  
    // { src: typescriptIcon, alt: "Typescript", delay: 0.14 },
    // { src: vueIcon, alt: "Vue", delay: 0.15 },
    // { src: wordpress, alt: "Wordpress", delay: 0.16 },
    // { src: shopify, alt: "Shopify", delay: 0.17 },
 
   
    // { src: boostrapIcon, alt: "Bootstrap", delay: 0.2 },
     
  ];

  return (
   <div className="mt-[12rem] grid grid-cols-2 gap-[2rem]  border-[4px] border-red-500" id="about">  
      <div className="about-text border border-pink-600">

      
        <motion.h2
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          className="inline-block    "
          viewport={{ once: false }}
        >
          About me
        </motion.h2>

        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
        >
          Hi there! I'm Deepak Bisht, a passionate Frontend Developer who loves building modern, responsive, and user-friendly web applications.
        </motion.p>

        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          I specialize in HTML, CSS, JavaScript, React, Redux, and Tailwind CSS, and I enjoy turning creative ideas into smooth, interactive digital experiences.
        </motion.p>

        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
          transition={{ delay: 0.3 }}
        >
          My focus is on writing clean code, designing professional UIs, and continuously learning new technologies to grow as a developer.
        </motion.p>

        <motion.div
          className="education"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="mt-[2rem] text-[#23ce6b]  font-[700] mb-[15px]">Education:</h3>
          <h4> Bachelor of Commerce (B.Com)</h4>
          <p className="">School of Open Learning, University of Delhi | 2018 - 2021</p>
          {/* <p className="">MERN Stack Development Course</p> */}
          {/* <p className="">8.09 CGPA</p> */}
        </motion.div>

        <motion.div
          className="experience"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ delay: 0.55 }}
        >
          <h3 className="mt-[2rem] text-[#23ce6b]   mb-[25px] font-[700]   ">Experience:</h3>
    <h4>Data Entry Operator</h4>
<p className="">AIIMS (All India Institute of Medical Sciences) | May 2024 - October 2024</p>
<p className="">New Delhi, India</p>
        </motion.div>

        <motion.h3
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
          className=" "
        >
          Here are my main skills:
        </motion.h3>

        <div className="hard-skills  ">
          {skills.map((skill, index) => (
            <motion.img
              key={index}
              src={skill.src}
              alt={skill.alt}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="w-[2.25rem]"
              viewport={{ once: false }}
              transition={{ delay: skill.delay }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="about-image border border-green-600"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ delay: 0.21 }}
        
      >
        <img src={VinayakSingh} alt="Vinayak Singh" className="  ml-auto w-[50%] h-[500px]"/>
      </motion.div>
    </div>
  );
}
 