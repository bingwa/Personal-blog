import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: 'ReactJS', icon: 'fab fa-react' },
    { name: 'TypeScript', icon: 'fas fa-code' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'Microsoft SQL Server', icon: 'fas fa-database' },
    { name: 'HTML/CSS', icon: 'fab fa-html5' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'API Integration', icon: 'fas fa-plug' },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Technical Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-3 col-sm-6 mb-4 d-flex justify-content-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-card text-center">
                <i className={`${skill.icon} fa-2x mb-2`}></i>
                <h5>{skill.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;