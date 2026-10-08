import { Github } from 'lucide-react';
import { experience } from '../data';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <p className="eyebrow">02 · Experience</p>
        <h2 className="h2">Where I've worked</h2>
      </Reveal>

      <ol className="mt-14 relative border-l border-plum-600/20 ml-2 space-y-12">
        {experience.map((job, i) => (
          <li key={job.company} className="pl-8 relative">
            <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-plum-600 bg-paper" />
            <Reveal delay={i * 0.05}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-display text-2xl font-semibold">
                  {job.role} <span className="text-plum-600">@ {job.company}</span>
                </h3>
                {job.period && <span className="font-mono text-xs text-ink/50">{job.period}</span>}
              </div>
              <ul className="mt-4 space-y-2 text-ink/75 max-w-3xl">
                {job.points.filter(Boolean).map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-3 shrink-0 bg-plum-300" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
              {job.links?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  {job.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-plum-700 hover:underline">
                      <Github size={14} /> {l.label}
                    </a>
                  ))}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
