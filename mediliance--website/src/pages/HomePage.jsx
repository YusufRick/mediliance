// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="pt-32 px-4 md:px-8 max-w-4xl mx-auto text-center bg-white min-h-screen"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
        Welcome to <span className="text-blue-600">Mediliance</span>
      </h1>
      <p className="text-base md:text-lg text-gray-600">
        Your trusted partner in modern healthcare solutions. We bring innovation and care together for healthier futures.
      </p>
    </motion.section>
  );
};

export default HomePage;
