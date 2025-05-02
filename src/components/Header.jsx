import React from 'react';
import { Menu, Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-serif text-primaryPurple">Ishaan Das-Basak</h1>
        <nav className="space-x-6 font-medium text-gray-700 flex items-center">
          <a href="#hero" className="hover:text-primaryPurple">Home</a>
          <a href="#education" className="hover:text-primaryPurple">Education</a>
          <a href="#projects" className="hover:text-primaryPurple">Projects</a>
          <a href="#skills" className="hover:text-primaryPurple">Skills</a>
          <a href="#certifications" className="hover:text-primaryPurple">Certifications</a>
          {/* Social icons */}
          <a
            href="https://linkedin.com/in/ishaan-das-basak"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:text-primaryPurple"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Pishuishu89"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primaryPurple"
          >
            <Github size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
}
