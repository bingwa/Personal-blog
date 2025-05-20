import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            I'm a final-year Computer Science student at Cooperative University of Kenya, passionate about building responsive web applications with ReactJS, TypeScript, and PHP. I've developed dashboards at the State Department for ASALs, led a team on a PHP backend project, and mentored peers in coding. I thrive in Agile environments and love exploring frameworks like Angular and CI/CD tools. Outside coding, I enjoy football, basketball, jogging, and staying updated on emerging tech trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;