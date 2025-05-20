import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Key Projects</h2>
        <div className="row">
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Newsletter Sign-Up Page</h5>
                <p className="card-text">
                  A responsive ReactJS/TypeScript app with form validation and API integration. Hosted on GitHub (@bingwa).
                </p>
                <a href="https://github.com/bingwa" className="btn btn-outline-primary">View on GitHub</a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Company Website Backend</h5>
                <p className="card-text">
                  Led a team to build a PHP-based backend with Microsoft SQL Server and RESTful APIs.
                </p>
                <a href="#contact" className="btn btn-outline-primary">Contact for Details</a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Final-Year Project: Database-Driven System</h5>
                <p className="card-text">
                  Coordinated a full-stack database system using SQL, potentially with Python or ReactJS.
                </p>
                <a href="#contact" className="btn btn-outline-primary">Contact for Details</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;