import { HeartHandshake } from 'lucide-react';
import { involvement } from '../data';
import Reveal from './Reveal';

export default function Involvement() {
  return (
    <section id="involvement" className="section">
      <Reveal>
        <p className="eyebrow">06 · Involvement</p>
        <h2 className="h2">Leadership &amp; volunteering</h2>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {involvement.map((v, i) => (
          <Reveal key={v.role + v.org} delay={i * 0.04}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 hover:border-plum-600/40 transition-colors">
              <HeartHandshake size={20} className="text-plum-600" />
              <h3 className="font-display text-lg font-semibold mt-3">{v.role}</h3>
              <p className="text-sm text-ink/70">{v.org}</p>
              {v.note && <p className="text-sm text-ink/50 mt-1">{v.note}</p>}
              {v.period && <p className="font-mono text-xs text-ink/45 mt-3">{v.period}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
