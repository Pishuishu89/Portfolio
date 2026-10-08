import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data';
import Reveal from './Reveal';
import ProjectImage from './ProjectImage';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ml', label: 'Machine learning' },
  { id: 'data', label: 'Data & BI' },
  { id: 'web', label: 'Full-stack' },
];

const cats = (p) => (Array.isArray(p.category) ? p.category : [p.category]);
const catLabel = (p) => cats(p).map((c) => filters.find((f) => f.id === c)?.label).filter(Boolean).join(' · ');

function Links({ links, title }) {
  return (
    <div className="flex gap-4 text-sm font-semibold">
      {links.demo && (
        <a href={links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-plum-700 hover:underline" aria-label={`${title} live demo`}>
          Live <ArrowUpRight size={14} />
        </a>
      )}
      {links.code && (
        <a href={links.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-ink/70 hover:text-plum-700" aria-label={`${title} source code`}>
          <Github size={14} /> Code
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => (filter === 'all' ? !p.featured : cats(p).includes(filter)));

  return (
    <section id="projects" className="bg-white border-y border-plum-600/10">
      <div className="section">
        <Reveal>
          <p className="eyebrow">03 · Projects</p>
          <h2 className="h2">Things I've built</h2>
        </Reveal>

        {/* Featured */}
        <div className="mt-14 space-y-8">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={0.05}>
              <article className={`group grid overflow-hidden rounded-3xl border border-ink/10 bg-paper md:grid-cols-2 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <ProjectImage image={p.image} title={p.title} className="h-60 md:h-full w-full min-h-[16rem] transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="p-7 sm:p-10 flex flex-col">
                  <span className="font-mono text-xs text-plum-600">Featured · {catLabel(p)}</span>
                  <h3 className="font-display text-3xl font-semibold mt-2">{p.title}</h3>
                  <p className="mt-4 text-ink/70 leading-relaxed">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <div className="mt-auto pt-6"><Links links={p.links} title={p.title} /></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Filterable grid */}
        <div className="mt-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold">More projects</h3>
          <div role="tablist" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === f.id ? 'bg-ink text-paper' : 'bg-paper text-ink/70 hover:text-ink border border-ink/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((p) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper hover:border-plum-600/40 hover:shadow-xl hover:shadow-plum-900/5 transition-[border-color,box-shadow]"
              >
                <div className="overflow-hidden">
                  <ProjectImage image={p.image} title={p.title} className="h-44 w-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[11px] text-plum-600">{catLabel(p)}</span>
                  <h4 className="font-display text-xl font-semibold mt-1">{p.title}</h4>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <div className="mt-auto pt-5"><Links links={p.links} title={p.title} /></div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {rest.length === 0 && <p className="mt-8 text-ink/50">Nothing else in this category yet. See the featured projects above.</p>}
      </div>
    </section>
  );
}
