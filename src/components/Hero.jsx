import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-white text-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl font-bold mb-4">
            Hi, I&apos;m Ishaan Das-Basak
          </h1>
          <p className="text-lg mb-6">
            A 3rd-year Software Engineering student at York University’s Big Data stream, I’m passionate about transforming raw data into actionable insights through analytics and machine learning.
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-gradient-to-r from-primaryPurple to-secondaryPurple text-white rounded-full shadow-lg hover:brightness-110 transition"
          >
            View Projects
          </a>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}avatar/avatar.png`}
            alt="Ishaan Das-Basak"
            className="w-3/4 mx-auto rounded-full shadow-lg border-4 border-secondaryPurple"
          />
        </motion.div>
      </div>
    </section>
  );
}
