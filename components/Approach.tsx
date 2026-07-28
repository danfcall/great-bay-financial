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
            <div className="relative max-w-3xl ml-auto overflow-hidden border border-cream/12 bg-gradient-to-br from-surface/28 via-background/90 to-background shadow-[0_32px_90px_rgba(4,10,24,0.4)]">
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-accent/45 via-cream/10 to-transparent"></div>

              <div className="relative px-8 py-11 md:px-14 md:py-14">
                <p className="max-w-2xl text-xl md:text-[1.8rem] leading-[1.45] md:leading-[1.42] tracking-[-0.012em] text-cream/90 text-pretty">
                  We are a private investment company focused on opportunities that strengthen New England businesses and communities. Through thoughtful capital allocation and strategic partnerships, our investments address unique challenges while creating lasting value.
                </p>
              </div>
            </div>

            {/* Focus areas — set typographically. The labels are the content;
                an icon beside each one only competes with them. */}
            <ul className="max-w-3xl ml-auto mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-3 border-t border-cream/15">
              {SERVICES.map((service) => (
                <li
                  key={service.id}
                  className="border-b border-cream/10 py-6 sm:border-b-0 sm:border-r sm:border-cream/10 sm:py-8 sm:pl-6 sm:pr-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
                >
                  <h3 className="font-display text-lg font-medium leading-[1.35] tracking-tight text-cream/90 text-balance">
                    {service.title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
