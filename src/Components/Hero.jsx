import { motion } from "framer-motion";
import Illustration from "../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../assets/linkedin.svg'

import githubIcon from '../assets/github.svg'
import whatsapp from '../assets/whatsapp.svg'
import Hello from '../assets/Hello.gif'
import telegram from '../assets/telegram.svg'
import "./hero.css"
 

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 }
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0 }
// };


// const fadeInLeft = { 
//   hidden: { opacity: 0, x: -50 },
//    visible: { opacity: 1, x: 0, 
//     transition: { duration: 0.6 } } };
// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0 }
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 80 },
//   visible: { opacity: 1, x: 0 }
// };  orginals all thre 


// const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3, 
//         // har child ke beech delay
//     },
//   },
// };
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};


// Child animation
// const fadeInLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 80 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0 }
// };

export default function Hero() {
  return (

<section id="home" className="overflow-hidden">
  <div className="hero-text text-center lg-text-left">
    <motion.p
      // variants={fadeInUp}
       variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="hero-inline"
    >
      Hello <img src={Hello} alt="Hello" width="20px" />, I'm
    </motion.p>

    <motion.h1
      // variants={fadeInUp}
       variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Deepak Bisht
    </motion.h1>

    <motion.h3
      // variants={fadeInUp}
       variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
     Front End Developer
    </motion.h3>

    <motion.p
      className="small-resume"
      // variants={fadeInUp}
       variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      1 Year Experience
    </motion.p>

    <motion.div
      // variants={fadeInUp}
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.8 }} >
      <button  className="button">
        Contact
      </button>
    </motion.div>

    <motion.div
      className="social-media"
      // variants={fadeInUp}
       variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <a href="https://www.linkedin.com/in/codevinayak" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="Linkedin" />
      </a>
      <a href="https://github.com/CodeVinayak/" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsapp} alt="Whatsapp" />
      </a>
      <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
        <img src={telegram} alt="telegram" />
      </a>
    </motion.div>
  </div>

  <div className="hero-image ">
    <motion.img
      src={Illustration}
      alt="Ilustração"
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 1 }}
    />
  </div>
</section>  

)}



    // <section id="home" className="">
    //   <div className="hero-text">
    //     <motion.p
    //       variants={fadeInUp}
    //       initial="hidden"
    //       animate="visible"
    //       transition={{ duration: 0.6 }} 
    //       className="hero-inline"
    //       viewport={{ once: false}}
    //     >
    //       Hello <img src={Hello} alt="Hello" width="20px"   />, I'm
    //     </motion.p>

    //     <motion.h1
    //       variants={fadeInUp}
    //       initial="hidden"
    //       animate="visible"
    //       transition={{ duration: 0.6, delay: 0.2 }}
    //       viewport={{ once: false}}
    //     >
    //       Vinayak Singh
    //     </motion.h1>

    //     <motion.h3
    //       variants={fadeInUp}
    //       initial="hidden"
    //       animate="visible"
    //       transition={{ duration: 0.6, delay: 0.4 }}
    //       viewport={{ once: false}}
    //     >
    //       Software Engineer
    //     </motion.h3>

    //     <motion.p
    //       className="small-resume"
    //       variants={fadeInUp}
    //       initial="hidden"
    //       animate="visible"
    //       transition={{ duration: 0.6, delay: 0.6 }}
    //       viewport={{ once: false}}
    //     >
    //       1 Year Experience
    //     </motion.p>

    //     <motion.div
    //       variants={fadeInUp}
    //       initial="hidden"
    //       animate="visible"
    //       transition={{ duration: 0.6, delay: 0.8 }}
    //       viewport={{ once: false}}
    //     >
         
    //         <NavHashLink smooth to="#contact" className="button">
    //           Contact
    //         </NavHashLink>
           
    //     </motion.div>

    //     <motion.div
    //       className="social-media"
    //       variants={fadeInUp}
    //       initial="hidden"
    //       animate="visible"
    //       transition={{ duration: 0.6, delay: 1 }}
    //       viewport={{ once: false}}
    //     >
    //       <a href="https://www.linkedin.com/in/codevinayak" target="_blank" rel="noreferrer">
    //         <img src={linkedin} alt="Linkedin" />
    //       </a>
    //       <a href="https://github.com/CodeVinayak/" target="_blank" rel="noreferrer">
    //         <img src={githubIcon} alt="GitHub" />
    //       </a>
    //       <a
    //         href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <img src={whatsapp} alt="Whatsapp" />
    //       </a>
    //       <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
    //         <img src={telegram} alt="telegram" />
    //       </a>
    //     </motion.div>
    //   </div>

    //   <div className="hero-image">
    //     <motion.img
    //       src={Illustration}
    //       alt="Ilustração"
    //       variants={fadeInRight}
    //       initial="hidden"
    //       animate="visible"
    //       transition={{ duration: 0.6, delay: 1 }}
    //       viewport={{ once: false}}
    //     />
    //   </div>
    // </section>

{/* <section id="home" className="overflow-hidden">
  <div className="hero-text">
    <motion.p
      // variants={fadeInUp}
       variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="hero-inline"
    >
      Hello <img src={Hello} alt="Hello" width="20px" />, I'm
    </motion.p>

    <motion.h1
      // variants={fadeInUp}
       variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Vinayak Singh
    </motion.h1>

    <motion.h3
      // variants={fadeInUp}
       variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Software Engineer
    </motion.h3>

    <motion.p
      className="small-resume"
      // variants={fadeInUp}
       variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      1 Year Experience
    </motion.p>

    <motion.div
      // variants={fadeInUp}
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <NavHashLink smooth to="#contact" className="button">
        Contact
      </NavHashLink>
    </motion.div>

    <motion.div
      className="social-media"
      // variants={fadeInUp}
       variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <a href="https://www.linkedin.com/in/codevinayak" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="Linkedin" />
      </a>
      <a href="https://github.com/CodeVinayak/" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsapp} alt="Whatsapp" />
      </a>
      <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
        <img src={telegram} alt="telegram" />
      </a>
    </motion.div>
  </div>

  <div className="hero-image ">
    <motion.img
      src={Illustration}
      alt="Ilustração"
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 1 }}
    />
  </div>
</section>   original*/} 