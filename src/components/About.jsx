import { Compass } from 'lucide-react';
import { about } from '../data';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section grid gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
      <Reveal>
        <p className="eyebrow">01 · About</p>
        <h2 className="h2">Data, systems and business decisions</h2>
        <div className="mt-8 space-y-5 text-lg text-ink/75 leading-relaxed">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="rounded-3xl border border-plum-600/20 bg-plum-50 p-8 lg:mt-16">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-plum-600 text-white"><Compass size={20} /></span>
          <h3 className="font-display text-2xl font-semibold mt-5">{about.lookingFor.title}</h3>
          <p className="mt-3 text-ink/75 leading-relaxed">{about.lookingFor.text}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {about.lookingFor.tags.map((t) => <span key={t} className="chip bg-white">{t}</span>)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
