// import React from "react";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import "./footer.css";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Logo / Name */}
//         <div className="footer-brand">
//           <h2>Deepak Bisht</h2>
//           <p>Frontend Developer & MERN Enthusiast</p>
//         </div>

//         {/* Quick Links */}
//         <div className="footer-links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div className="footer-social">
//           <h3>Follow Me</h3>
//           <div className="social-icons">
//             <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//             <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//             <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//             <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Deepak Bisht. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



// import React from "react";
// import { FaGithub, FaLinkedin,   FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "./footer.css";

 
// const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25,  
//     },
//   },
// };

// // Variants for each child (Y-axis slide)
// const item = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// function Footer() {
//   return (
//     <motion.footer
//       className="footer"
//       variants={container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false, amount: 0.2 }} // once false rakha h
//     >
//       <div className="footer-container flex-col md:flex-row md:justify-between md:items-start md:text-left">
//         {/* Logo / Name */}
//         <motion.div className="footer-brand" variants={item}>
//           <h2 className="text-center md:text-left">Deepak Bisht</h2>
//           <p>Frontend Developer & MERN Enthusiast</p>
//         </motion.div>

//         {/* Quick Links */}
//         <motion.div className="footer-links" variants={item}>
//           <h3>Quick Links</h3>
//           <ul className="flex-col md:justify-start">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </motion.div>

//         {/* Social Links */}
//         <motion.div className="footer-social" variants={item}>
//           <h3>Follow Me</h3>
//           <div className="social-icons justify-center md:justify-start;">
//   <a
//     href="https://github.com/yourusername"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <FaGithub />
//   </a>

//   <a
//     href="https://linkedin.com/in/yourusername"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <FaLinkedin />
//   </a>

//   <a href="mailto:deepak@example.com">
//     <FaEnvelope /> {/* Email icon */}
//   </a>
// </div>

//         </motion.div>
//       </div>

//       {/* Copyright */}
//       <motion.div className="footer-bottom" variants={item}>
//         <p>© {new Date().getFullYear()} Deepak Bisht. All Rights Reserved.</p>
//       </motion.div>
//     </motion.footer>
//   );
// }

// export default Footer;


// import React from "react";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "./footer.css";

// // Container for stagger effect
// const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// };

// // Each item (Y-axis slide)
// const item = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// function Footer() {
//   return (
//     <motion.footer
//       className="footer"
//       variants={container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false, amount: 0.2 }}
//     >
//       <div className="footer-container">
//         {/* Logo / Name */}
//         <motion.div className="footer-brand" variants={item}>
//           <h2>Deepak Bisht</h2>
//           <p>Frontend Developer & MERN Enthusiast</p>
//         </motion.div>

//         {/* Quick Links */}
//         <motion.div className="footer-links" variants={item}>
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </motion.div>

//         {/* Social Links */}
//         <motion.div className="footer-social" variants={item}>
//           <h3>Follow Me</h3>
//           <div className="social-icons">
//             <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//             <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//             <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//             <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//           </div>
//         </motion.div>

//         {/* Quote Section */}
//         <motion.div className="footer-quote" variants={item}>
//           <h3>Quote</h3>
//           <p>"Code is like art — every line tells a story."</p>
//         </motion.div>
//       </div>

//       {/* Copyright */}
//       <motion.div className="footer-bottom" variants={item}>
//         <p>© {new Date().getFullYear()} Deepak Bisht. All Rights Reserved.</p>
//       </motion.div>
//     </motion.footer>
//   );
// }

// export default Footer;

















import React from "react";
import { FaGithub, FaLinkedin,   FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./footer.css";

 
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,  
    },
  },
};

// Variants for each child (Y-axis slide)
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Footer() {
  return (
<motion.footer
  className="  text-white px-[16px] py-[30px] text-center overflow-hidden
  "
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start md:text-left  
   ">
    
    {/* Logo / Name */}
    <motion.div className="mb-4 md:mb-0" variants={item}>
      <h2 className="text-xl md:text-2xl font-bold mb-2">Deepak Bisht</h2>
      <p className="text-sm md:text-base text-gray-400">
        Frontend Developer & MERN Enthusiast
      </p>
    </motion.div>

    {/* Quick Links */}
    <motion.div variants={item}>
      <h3 className="text-lg md:text-xl font-semibold mb-3 text-center">Quick Links</h3>
      <ul className="flex flex-col gap-[12px] md:gap-1 md:items-start xl:flex-row">
        <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
        <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
        <li><a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
        <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
      </ul>
    </motion.div>

    {/* Social Links */}
    <motion.div variants={item}>
      <h3 className="text-lg md:text-xl font-semibold mb-3">Follow Me</h3>
      <div className="flex justify-center md:justify-start gap-4 text-2xl md:text-3xl">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaLinkedin /></a>
        <a href="mailto:deepak@example.com" className="text-gray-400 hover:text-white transition"><FaEnvelope /></a>
      </div>
    </motion.div>

  </div>

  {/* Copyright */}
  <motion.div className="border-t border-gray-700 pt-4 mt-6 text-gray-500 text-sm md:text-base" variants={item}>
    <p>© {new Date().getFullYear()} Deepak Bisht. All Rights Reserved.</p>
  </motion.div>
</motion.footer>


  );
}

export default Footer;
