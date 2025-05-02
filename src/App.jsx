import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow container mx-auto px-4 py-8 bg-white text-gray-900">
        <Education />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <footer className="text-center py-4 bg-primaryPurple text-white">
        <p>Ishaan Das-Basak | 416-613-1122 | <a href="mailto:ishaandasbasak@gmail.com" className="underline">Email</a> | <a href="https://linkedin.com/in/ishaan-das-basak" target="_blank" className="underline">LinkedIn</a> | <a href="https://github.com/Pishuishu89" target="_blank" className="underline">GitHub</a></p>
        <p>© {new Date().getFullYear()} Ishaan Das-Basak. All rights reserved.</p>
      </footer>
    </div>
  );
}
