import React from 'react';
import SectionIntro from './SectionIntro';

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 md:py-36 px-6 md:px-12 border-b border-cream/10 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/25 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col gap-14 md:flex-row md:gap-24">
          <div className="md:w-1/3">
            <SectionIntro
              eyebrow="Approach"
              title="The Great Bay "
              accent="Way"
              sticky
              stickyClassName="md:top-32"
              accentInline
            />
          </div>

          {/* One statement, given room. No frame, no card — the indent rule
              and the whitespace are the containment. */}
          <div className="md:w-2/3">
            <div className="relative max-w-3xl border-l border-cream/15 pl-8 md:pl-14">
              <p className="font-sans text-2xl md:text-[2.1rem] font-light leading-[1.5] md:leading-[1.45] tracking-[-0.015em] text-cream/85 text-pretty">
                Through thoughtful capital allocation and strategic partnerships, our investments address unique challenges while creating lasting value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
