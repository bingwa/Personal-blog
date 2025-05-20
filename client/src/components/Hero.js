import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      className="hero min-vh-100 d-flex align-items-center justify-content-center text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <motion.h1
          className="display-4 fw-bold text-white"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Brian Munyao
        </motion.h1>
        <motion.p
          className="lead text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Front-End Developer | ReactJS, TypeScript, PHP | Innovating with Code
        </motion.p>
        <motion.a
          href="/BRIAN MUNYAO CV.pdf"
          className="btn btn-primary btn-lg mt-3 me-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          download
        >
          Download CV
        </motion.a>
        <motion.a
          href="#projects"
          className="btn btn-outline-light btn-lg mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Hero;