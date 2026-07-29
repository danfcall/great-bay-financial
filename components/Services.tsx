import React from 'react';
import { Building2, HandCoins, HeartHandshake } from 'lucide-react';
import { SERVICES } from '../constants';

/* One icon per focus area, kept to a thin stroke so they read as line marks
   rather than illustrations — a quieter register than the rest of the page's
   type, but enough visual weight to carry a section on its own. */
const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  '01': Building2,
  '02': HandCoins,
  '03': HeartHandshake,
};

const Services: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-background border-t border-cream/5">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-4 mb-14 md:mb-20">
          <span className="h-px w-12 bg-accent/50"></span>
          <span className="font-sans text-accent/80 uppercase tracking-[0.32em] text-[0.6875rem] font-light">
            What We Do
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-cream/15">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.id];
            return (
              <div
                key={service.id}
                className="group flex flex-col gap-8 border-b border-cream/10 py-10 sm:border-b-0 sm:border-r sm:border-cream/10 sm:py-0 sm:pt-14 sm:pb-2 sm:pr-10 sm:pl-10 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center w-14 h-14 border border-cream/15 text-accent transition-colors duration-500 group-hover:border-accent/50">
                    <Icon className="w-6 h-6" strokeWidth={1.25} />
                  </div>
                  <span className="font-display text-[0.6875rem] font-medium tracking-[0.18em] text-cream/30">
                    {service.id}
                  </span>
                </div>

                <span className="font-display text-xl md:text-2xl font-normal tracking-[-0.01em] text-cream/90 text-balance">
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
