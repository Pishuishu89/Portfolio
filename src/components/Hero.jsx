import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data';

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (d) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  });
  const base = import.meta.env.BASE_URL;

  return (
    <section id="top" className="relative overflow-hidden grid-bg">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-plum-300/40 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28 grid gap-12 md:grid-cols-[1.4fr_1fr] items-center">
        <div>
          <motion.p {...fade(0)} className="eyebrow flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
            {profile.role}
          </motion.p>
          <motion.h1 {...fade(0.08)} className="font-display text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.02] mt-5">
            Ishaan<br />Das-Basak
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-lg text-ink/70 leading-relaxed">
            {profile.intro}
          </motion.p>
          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-plum-700 transition-colors">
              See my work <ArrowDown size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold hover:border-plum-600 hover:text-plum-600 transition-colors">
              Get in touch <ArrowUpRight size={16} />
            </a>
          </motion.div>
          <motion.p {...fade(0.3)} className="mt-6 flex items-center gap-1.5 text-sm text-ink/50">
            <MapPin size={14} /> {profile.location}
          </motion.p>
        </div>

        <motion.div {...fade(0.2)} className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] border border-plum-600/20 rotate-3" />
          <img
            src={`${base}avatar.jpg`}
            alt="Portrait of Ishaan Das-Basak"
            className="relative aspect-square w-full rounded-[2rem] object-cover shadow-2xl shadow-plum-900/20"
          />
          <dl className="relative -mt-10 mx-4 grid grid-cols-3 divide-x divide-ink/10 rounded-2xl bg-white/90 backdrop-blur shadow-lg">
            {profile.stats.map((s) => (
              <div key={s.label} className="px-2 py-3 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-xl font-semibold text-plum-700">{s.value}</dd>
                <dd className="text-[11px] leading-tight text-ink/55 mt-0.5">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
