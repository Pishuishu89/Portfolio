import React from 'react';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: 'Fitness Application',
    description: 'Full-stack fitness tracker (React, HTML/CSS/JS) with heartbeat-to-text Arduino hack, plus nutrition data scraped via Python.',
    link: 'https://github.com/artin59/CTRL-HACK-DEL',
    image: '/images/fitness-app.png'
  },
  {
    title: 'Real-Time Squat Analyzer',
    description: 'OpenCV + MediaPipe tool for calculating knee-angle and providing live form feedback.',
    link: 'https://github.com/Pishuishu89/Depth_Checker',
    image: '/images/squat-analyzer.png'
  },
  {
    title: 'Plant Disease Classifier',
    description: 'TensorFlow CNN to classify healthy vs. diseased leaves with a Streamlit front-end and Docker deployment.',
    link: 'https://github.com/Pishuishu89/Plant-Disease-Detector-',
    image: '/images/plant-disease-classifier.png'
  },
  {
    title: 'WhoTheGOAT – NBA MVP Predictor',
    description: 'End-to-end ML pipeline with Selenium-scraped stats, RandomForestRegressor (1% MAE), and Flask UI.',
    link: 'https://github.com/Pishuishu89/whothegoat',
    image: '/images/whothegoat.png'
  },
  {
    title: 'Credit Card Fraud Detection',
    description: 'Streamlit dashboard with Logistic Regression, Random Forest, and XGBoost; interactive metrics and uploads.',
    link: 'https://github.com/Pishuishu89/credit-card-fraud-app',
    image: '/images/fraud-detection-app.png'
  },

  {
        title: 'Cyclistic Bike-Share Analysis',
        description: 'Analyzed Chicago’s Cyclistic bike-share data with Python to uncover rider behavior patterns',
        link: 'https://github.com/Pishuishu89/Cyclistic',
        image: '/images/cyclistic.png'
      }

];

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 font-serif text-primaryPurple">
        Projects
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {projectList.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            className="block bg-secondaryPurple bg-opacity-10 p-6 rounded-lg shadow hover:bg-opacity-20 transition"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 w-full rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
