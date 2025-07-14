// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/NavBar';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-20 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Mediliance</h1>
        <p className="text-lg text-gray-600">
          Your trusted partner in modern healthcare solutions.
        </p>
      </motion.section>
    </div>
  );
};

export default HomePage;
