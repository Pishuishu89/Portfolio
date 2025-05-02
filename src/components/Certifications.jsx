import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 font-serif text-primaryPurple">
        Certifications
      </h2>
      <ul className="list-none space-y-3">
        <li className="flex items-center space-x-2">
          <CheckCircle size={20} className="text-accentTeal" />
          <a
            href="https://www.credly.com/earner/earned/badge/986d20b7-7e07-425f-bd60-ce76f514faec"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-secondaryPurple"
          >
            Google Data Analytics Certificate
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <CheckCircle size={20} className="text-accentTeal" />
          <a
            href="https://www.credly.com/badges/8b5e68b4-3998-4cee-bd00-ff464d239bf5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-secondaryPurple"
          >
            Microsoft Excel for Data Analysis
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <CheckCircle size={20} className="text-accentTeal" />
          <a
            href="https://www.credly.com/earner/earned/badge/ab70373a-76fe-4197-9cff-385398d9828a"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-secondaryPurple"
          >
            Google AI Essentials
          </a>
        </li>
      </ul>
    </section>
  );
}
