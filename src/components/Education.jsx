import { Award, ArrowUpRight, GraduationCap } from 'lucide-react';
import { certifications, education } from '../data';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="bg-white border-y border-plum-600/10">
      <div className="section grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="eyebrow">05 · Education</p>
          <h2 className="h2">Studies</h2>
          <div className="mt-10 rounded-3xl bg-ink p-8 text-paper">
            <GraduationCap className="text-plum-300" size={28} />
            <h3 className="font-display text-2xl font-semibold mt-4">{education.school}</h3>
            <p className="text-paper/60 text-sm">{education.place}</p>
            <p className="mt-4 text-lg">{education.degree}</p>
            <p className="mt-1 font-mono text-xs text-mint">{education.period}</p>
          </div>
          <p className="mt-6 text-ink/65 leading-relaxed">
            Outside of class I keep learning on the job and on my own: {certifications.length} certifications across
            BI, data science, AI tooling and agile project management.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">Certifications</p>
          <h2 className="h2">Credentials</h2>
          <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {certifications.map((c) => {
              const inner = (
                <>
                  <Award size={18} className="text-plum-600 shrink-0" />
                  <span className="flex-1 min-w-0">
                    <span className="block font-medium">{c.name}</span>
                    <span className="block text-xs text-ink/50">{c.issuer} · {c.date}</span>
                  </span>
                  {c.url && <ArrowUpRight size={16} className="text-ink/40 group-hover:text-plum-600 transition-colors shrink-0" />}
                </>
              );
              return (
                <li key={c.name}>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 py-3.5 hover:text-plum-700">{inner}</a>
                  ) : (
                    <div className="flex items-center gap-3 py-3.5">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
