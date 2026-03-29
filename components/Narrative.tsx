import React from 'react';
import SectionIntro from './SectionIntro';

const Narrative: React.FC = () => {
  return (
    <section id="narrative" className="py-24 md:py-32 px-6 md:px-12 border-b border-cream/5 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
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

          <div className="md:w-2/3 space-y-16">
            <div className="relative max-w-3xl ml-auto overflow-hidden border border-cream/10 bg-gradient-to-br from-surface/32 via-background/88 to-background/100 shadow-[0_32px_90px_rgba(4,10,24,0.4)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,222,201,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(26,61,93,0.45),transparent_42%)] pointer-events-none"></div>
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-accent/45 via-cream/10 to-transparent"></div>

              <div className="relative px-8 py-10 md:px-12 md:py-12">
                <p className="max-w-2xl text-xl md:text-[1.9rem] leading-[1.4] md:leading-[1.38] text-cream/88">
                  We bring small and medium businesses institutional-level financial expertise and tools that have traditionally only been available to large companies. With over 40 years of industry experience, our team will help you win business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
