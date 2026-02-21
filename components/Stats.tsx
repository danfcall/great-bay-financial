import React from 'react';
import { STATS, TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-background px-6 md:px-12 border-y border-cream/5">
      <div className="max-w-7xl mx-auto">

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-6xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-cream/70 font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-background hover:bg-surface p-8 md:p-12 border border-cream/10 relative hover:border-white/20 transition-colors duration-300 shadow-2xl">
              <Quote className="w-8 h-8 text-accent mb-6 opacity-80" />
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-cream">"{t.quote}"</p>
              <div className="flex items-center justify-between border-t border-cream/10 pt-6">
                <div>
                  <div className="font-bold text-cream">{t.author}</div>
                  <div className="text-sm text-cream/60">{t.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-accent font-mono text-sm">{t.metric}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;