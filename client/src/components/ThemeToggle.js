import React from 'react';
import { motion } from 'framer-motion';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
    </motion.button>
  );
}

export default ThemeToggle;