import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { profile } from '../data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? 'bg-paper/85 backdrop-blur border-b border-plum-600/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 h-16">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          {profile.name}<span className="text-plum-600">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-plum-600 transition-colors">
              {l.label}
            </a>
          ))}
          <span className="h-4 w-px bg-ink/15" />
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-plum-600">
            <Linkedin size={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-plum-600">
            <Github size={18} />
          </a>
        </nav>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-plum-600/10 px-5 pb-5 pt-2 flex flex-col">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-lg font-medium border-b border-ink/5">
              {l.label}
            </a>
          ))}
          <div className="flex gap-5 pt-4">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
