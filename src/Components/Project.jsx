 
import githubIcon from "../assets/github.svg"
 
import externalLink from "../assets/external-link.svg"
import { motion } from "framer-motion";
import "./project.css"



const flipInX = {
  hidden: {
    rotateX: 90,
    opacity: 0,
    transformPerspective: 400,
  },
  visible: {
    rotateX: [90, -20, 10, -5, 0],
    opacity: [0, 1, 1, 1, 1],
    transition: {
      duration: 1,
      times: [0, 0.4, 0.6, 0.8, 1],
      ease: "easeIn",
    },
  },
};

export function Project() {
  return (
    <div   className="mt-[9.5rem]  ">
      <h2 className="text-center   mb-[3rem]  ">My Projects</h2>
      <div className="projects    overflow-hidden">

 
        <motion.div variants={flipInX} initial="hidden" whileInView="visible" viewport={{ once: false }}>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/MultilingualVQA" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Multilingual VQA Vision-Language Model</h3>
              <p>
                Fine-tuned Qwen2.5-VL for visual question answering across 14 languages with optimized preprocessing.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Qwen2.5-VL</li>
                <li>Unsloth</li>
              </ul>
            </footer>
          </div>
        </motion.div>

        <motion.div variants={flipInX} initial="hidden" whileInView="visible" viewport={{ once: false}}>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Serverless Voting Application for Programming Languages</h3>
              <p> Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency. </p>
            </div>
            <footer> <ul className="tech-list"> <li>AWS Lambda</li> <li>API Gateway</li> <li>DynamoDB</li> </ul> </footer>
          </div>
        </motion.div>

        <motion.div variants={flipInX} initial="hidden" whileInView="visible" viewport={{ once: false }}>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>GeniusBot: AI-Powered Assistance with PDF Insight</h3>
              <p>
                Developed an interactive chatbot application using Streamlit, OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text extraction, enabling users to ask context-based questions on uploaded PDFs and general queries.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>PyPDF2</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </motion.div>

        <motion.div variants={flipInX} initial="hidden" whileInView="visible" viewport={{ once: false }}>
            <div className="project">
                <header>
                 <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                     <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <div className="project-links">
        <a href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Visit site" />
        </a>
        <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
          <img src={externalLink} alt="Visit site" />
        </a>
      </div>
    </header>
    <div className="body">
      <h3>MediBook: Medical Appointment Scheduler with Health History</h3>
      <p>Developed a secure medical appointment management platform with CRUD functionality, utilizing role-based access control, encryption techniques, and a robust MySQL database with normalized schema design and stored procedures for efficient scheduling, data privacy, and reliable retrieval of patient records.</p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>PHP</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MySQL</li>
      </ul>
         </footer> </div>
       </motion.div>

       <motion.div variants={flipInX} initial="hidden" whileInView="visible" viewport={{ once: false }}>
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <title>Code</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <div className="project-links">
        <a href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Visit site" />
        </a>
        <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
          <img src={externalLink} alt="Visit site" />
        </a>
      </div>
    </header>
    <div className="body">
      <h3>Real-Time Hand Gesture-Driven 3D Object Manipulation</h3>
      <p>Developed a real-time hand gesture recognition system for intuitive 3D object manipulation. Leveraged a multimodal approach integrating OpenCV for video processing, MediaPipe for hand detection/landmark extraction, and scikit-learn for machine learning model training. Achieved 95.2% accuracy in hand gesture classification with efficient real-time performance.</p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>OpenCV</li>
        <li>MediaPipe</li>
        <li>scikit-learn</li>
      </ul>
    </footer>
  </div>
       </motion.div>

       <motion.div variants={flipInX} initial="hidden" whileInView="visible" viewport={{ once: false}}>
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <div className="project-links">
        <a href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Visit site" />
        </a>
        {/* External link commented out */}
      </div>
    </header>
    <div className="body">
      <h3>Credit Risk Analysis Project</h3>
      <p>
        Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults. Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>XGBoost</li>
        <li>Pandas</li>
        <li>Matplotlib</li>
      </ul>
    </footer>
  </div>
       </motion.div>
       

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
