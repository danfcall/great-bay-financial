import React from 'react';
import { SERVICES } from '../constants';
import SectionIntro from './SectionIntro';

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-20 md:py-28 px-6 md:px-12 border-b border-cream/5 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-14 md:flex-row md:gap-24">
          <div className="md:w-1/3">
            <SectionIntro
              eyebrow="Approach"
              title="The Great Bay "
              accent="Way"
              sticky
              stickyClassName="md:top-12"
              accentInline
            />
          </div>

          <div className="md:w-2/3">
            <div className="relative max-w-3xl ml-auto overflow-hidden border border-cream/10 bg-gradient-to-br from-surface/32 via-background/88 to-background/100 shadow-[0_32px_90px_rgba(4,10,24,0.4)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,222,201,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(26,61,93,0.45),transparent_42%)] pointer-events-none"></div>
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-accent/45 via-cream/10 to-transparent"></div>

              <div className="relative px-8 py-10 md:px-12 md:py-12">
                <p className="max-w-2xl text-xl md:text-[1.9rem] leading-[1.4] md:leading-[1.38] text-cream/88">
                  We are a private investment company focused on opportunities that strengthen New England businesses and communities. Through thoughtful capital allocation and strategic partnerships, our investments address unique challenges while creating lasting value.
                </p>
              </div>
            </div>

            {/* Focus areas — a plain divided row rather than cards */}
            <div className="max-w-3xl ml-auto mt-10 md:mt-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-accent/60"></span>
                <span className="text-accent uppercase tracking-[0.38em] text-xs font-semibold">
                  Where We Invest
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-3 border-t border-cream/10">
                {SERVICES.map((service) => (
                  <li
                    key={service.id}
                    className="group flex items-center gap-4 border-b border-cream/10 py-5 sm:flex-col sm:items-start sm:gap-4 sm:border-b-0 sm:border-r sm:border-cream/10 sm:py-8 sm:pr-6 sm:pl-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
                  >
                    <service.icon className="w-6 h-6 shrink-0 text-cream/25 transition-colors duration-500 group-hover:text-accent/70" />
                    <h3 className="text-lg font-bold leading-snug text-cream">{service.title}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
