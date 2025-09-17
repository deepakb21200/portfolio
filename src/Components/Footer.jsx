import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo & Description */}
        <div className="text-center md:text-left max-w-sm">
          <h2 className="text-2xl font-bold mb-2 tracking-wide">YourName</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Crafting awesome web experiences with passion and precision.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-8 font-medium text-gray-300">
          <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-8 text-xl text-gray-400">
          <a href="mailto:youremail@example.com" className="hover:text-white transition-colors duration-300" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
