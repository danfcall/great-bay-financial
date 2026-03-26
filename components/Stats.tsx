import React from 'react';
import { Quote } from 'lucide-react';
import { CASE_STUDIES, STATS, TESTIMONIALS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section id="outcomes" className="border-b border-cream/8 px-6 py-20 md:px-10 md:py-28">
      <div className="section-frame">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="eyebrow">Selected outcomes</div>
            <h2 className="mt-7 font-display text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.92] tracking-[-0.04em] text-white">
              Results that reflect fit, speed, and disciplined execution.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-mist">
            Great Bay is built for mandates where financing quality matters as much as financing availability. The numbers below only matter because they translate into better decisions and better closes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-tile rounded-[1.8rem] px-6 py-7">
              <p className="font-display text-5xl leading-none text-white">{stat.value}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-accentSoft/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 xl:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <article key={study.company} className="panel rounded-[2rem] p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-accentSoft">
                  {study.sector}
                </span>
                <span className="grid-label text-[10px] text-cream/50">Selected engagement</span>
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <h3 className="font-display text-4xl leading-none text-white">{study.company}</h3>
                <p className="rounded-full border border-cream/10 bg-white/[0.04] px-4 py-2 text-sm text-accentSoft">{study.metric}</p>
              </div>

              <div className="mt-8 space-y-6 text-sm leading-7 text-mist">
                <div>
                  <p className="grid-label text-[10px] text-accentSoft/70">Situation</p>
                  <p className="mt-2">{study.challenge}</p>
                </div>
                <div>
                  <p className="grid-label text-[10px] text-accentSoft/70">Structure</p>
                  <p className="mt-2">{study.structure}</p>
                </div>
                <div>
                  <p className="grid-label text-[10px] text-accentSoft/70">Result</p>
                  <p className="mt-2 text-cream/84">{study.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-5 xl:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.author} className="panel rounded-[2rem] p-8 md:p-9">
              <Quote className="h-9 w-9 text-accent" />
              <p className="mt-6 text-xl leading-9 text-cream/92">{testimonial.quote}</p>
              <div className="section-divider my-7" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-white">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-mist">{testimonial.role}</p>
                </div>
                <p className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm text-accentSoft">
                  {testimonial.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
