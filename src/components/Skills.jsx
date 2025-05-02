import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, BarChart } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Code },
  { name: 'Java', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'React', icon: Terminal },
  { name: 'SQL', icon: Database },
  { name: 'R', icon: Database },
  // Data Visualization
  { name: 'Matplotlib', icon: Code },
  { name: 'Seaborn', icon: Code },
  { name: 'Plotly', icon: Code },
  // Machine Learning Frameworks
  { name: 'TensorFlow', icon: Code },
  { name: 'Keras', icon: Code },
  { name: 'PyTorch', icon: Code },
  // NoSQL Database
  { name: 'MongoDB', icon: Database },
  // Scripting & Automation
  { name: 'Bash', icon: Terminal },
  { name: 'PowerShell', icon: Terminal },
  // Business Intelligence
  { name: 'Power BI', icon: BarChart }
];

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 font-serif text-primaryPurple">
        Technical Skills
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="flex items-center space-x-3 bg-secondaryPurple bg-opacity-10 p-4 rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Icon size={24} className="text-primaryPurple" />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
