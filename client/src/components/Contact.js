import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
              }),
            })
              .then((res) => res.json())
              .then((data) => alert(data.message))
              .catch(() => alert('Error submitting form'));
          }}
          className="col-md-5 mx-auto"
        >
          <div className="mb-2">
            <input
              type="text"
              className="form-control form-control-xs"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              className="form-control form-control-xs"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-2">
            <textarea
              className="form-control form-control-xs"
              name="message"
              placeholder="Your Message"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-xs w-100">
            Send Message
          </button>
        </motion.form>
        <motion.div
          className="contact-info text-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            <i className="fab fa-github me-2"></i>
            <a href="https://github.com/bingwa" target="_blank" rel="noopener noreferrer">@bingwa</a>
          </p>
          <p>
            <i className="fas fa-envelope me-2"></i>
            <a href="mailto:munyaobryan6@gmail.com">munyaobryan6@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-phone me-2"></i>
            <a href="tel:+254115350640">+254115350640</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;