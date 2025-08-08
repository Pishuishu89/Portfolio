import React from 'react';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: 'SpeakEZ – ASL → English Glove',
    description:
      'Wearable glove that translates ASL to speech using flex sensors + ESP32; custom CNN hit 97.5% on static letters with time-series inference over Wi-Fi—no cameras.',
    link: '#', // add repo/demo if you have it
    image: `${import.meta.env.BASE_URL}images/speakez.png`,
    skills: ['HTML', 'Vite', 'ESP32', 'TensorFlow', 'Python']
  },
  {
    title: 'Fitness Application',
    description:
      'Full-stack fitness tracker (React, HTML/CSS/JS) with heartbeat-to-text Arduino hack and nutrition data scraped via Python.',
    link: 'https://github.com/artin59/CTRL-HACK-DEL',
    image: `${import.meta.env.BASE_URL}images/fitness-app.png`,
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Arduino', 'Python']
  },
  {
    title: 'Real-Time Squat Analyzer',
    description:
      'OpenCV + MediaPipe tool that measures knee angle and gives live form feedback.',
    link: 'https://github.com/Pishuishu89/Depth_Checker',
    image: `${import.meta.env.BASE_URL}images/squat-analyzer.png`,
    skills: ['Python', 'OpenCV', 'MediaPipe']
  },
  {
    title: 'Plant Disease Classifier',
    description:
      'TensorFlow CNN for healthy vs. diseased leaves with a Streamlit front end and Dockerized deploy.',
    link: 'https://v6wcbgrfoydjmjysgicbe8.streamlit.app',
    image: `${import.meta.env.BASE_URL}images/plant-disease-classifier.png`,
    skills: [
      'Python',
      'TensorFlow',
      'Streamlit',
      'Docker',
      'NumPy',
      'Pillow',
      'Image Classification',
      'gdown'
    ]
  },
  {
    title: 'WhoTheGOAT – NBA MVP Predictor',
    description:
      'End-to-end ML pipeline with Selenium-scraped stats, RandomForestRegressor (~1% MAE), and a Flask UI.',
    link: 'https://pishuishu89.github.io/WhoTheGoat/',
    image: `${import.meta.env.BASE_URL}images/whothegoat.png`,
    skills: [
      'Python',
      'Machine Learning',
      'Selenium',
      'Flask',
      'JavaScript',
      'HTML/CSS',
      'Random Forest'
    ]
  },
  {
    title: 'Credit Card Fraud Detection',
    description:
      'Streamlit dashboard comparing Logistic Regression, Random Forest, and XGBoost with interactive metrics and uploads.',
    link: 'https://credit-card-fraud-app-ew858uzdpnuepddsnovuqt.streamlit.app',
    image: `${import.meta.env.BASE_URL}images/fraud-detection-app.png`,
    skills: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'XGBoost',
      'Data Visualization',
      'Fraud Detection',
      'Random Forest',
      'Logistic Regression'
    ]
  },
  {
    title: 'Cyclistic Bike-Share Analysis',
    description:
      'Exploratory analysis of Chicago Cyclistic data to uncover rider behavior patterns.',
    link: 'https://github.com/Pishuishu89/Cyclistic',
    image: `${import.meta.env.BASE_URL}images/cyclistic.png`,
    skills: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Visualization']
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
            <p className="mb-3">{project.description}</p>

            {/* Skill badges */}
            {project.skills && (
              <div className="flex flex-wrap gap-2">
                {project.skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-2 py-1 rounded-full bg-primaryPurple/10 text-primaryPurple border border-primaryPurple/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
