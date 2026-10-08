import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data';
import Reveal from './Reveal';

export default function Contact() {
  const items = [
    { href: `mailto:${profile.email}`, icon: Mail, label: profile.email },
    { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: profile.github, icon: Github, label: 'GitHub' },
  ];
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="section">
        <Reveal>
          <p className="eyebrow !text-plum-300">07 · Contact</p>
          <h2 className="h2 max-w-2xl">Let's turn your data into decisions.</h2>
          <p className="mt-5 max-w-xl text-paper/60">
            Open to analytics, BI and product roles for 2027, including product management and product analytics. Email is the fastest way to reach me.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {items.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-5 py-3 text-sm font-medium hover:bg-paper hover:text-ink transition-colors"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </Reveal>
        <div className="mt-20 flex flex-col sm:flex-row justify-between gap-2 border-t border-paper/10 pt-6 text-xs text-paper/40">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Built with React, Tailwind &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
