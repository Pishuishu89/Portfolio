import { BarChart3, Brain, Code2, Workflow } from 'lucide-react';
import { skills } from '../data';
import Reveal from './Reveal';

const icons = [BarChart3, Brain, Code2, Workflow];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <p className="eyebrow">04 · Skills</p>
        <h2 className="h2">What I work with</h2>
      </Reveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
        {skills.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={s.group} delay={i * 0.05} className="bg-paper p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-plum-50 text-plum-600"><Icon size={20} /></span>
                <h3 className="font-display text-xl font-semibold">{s.group}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li key={it} className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 text-sm">{it}</li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
