import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

/* The slogan is set as three stacked lines rather than one block of caps.
   Sentence case and a light display weight do the work that size and weight
   used to do — the line is still the largest thing on the page, but it is
   read rather than shouted. */
const LINES = [
  { text: 'Liquidity.', delay: '0.15s', accent: false },
  { text: 'Growth.', delay: '0.3s', accent: true },
  { text: 'Freedom.', delay: '0.45s', accent: false },
];

const Hero: React.FC = () => {
  const WistiaPlayer = 'wistia-player' as any;

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden border-b border-cream/10">
      {/* Full-screen background loop, graded toward the page navy so type
          stays legible over any frame of the footage. */}
      <div className="absolute inset-0 w-full h-full z-0 bg-background">
        <div className="absolute inset-0 bg-background/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/45 via-background/10 to-transparent z-10"></div>

        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw]">
            <WistiaPlayer
              media-id="l5jef1dyo0"
              aspect="1.7777777777777777"
              autoplay="muted"
              muted="true"
              loop="true"
              playsinline="true"
              controlsVisibleOnLoad="false"
              playButton="false"
              playbar="false"
              volumeControl="false"
              fullscreenButton="false"
              smallPlayButton="false"
              loadingSpinner="false"
              videoFoam="false"
              quality="1080p"
              className="w-full h-full object-cover opacity-100"
            ></WistiaPlayer>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center px-6 md:px-12 pt-32 pb-12 md:pt-36 md:pb-10 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl xl:max-w-3xl">
            <h1 className="font-display font-normal text-cream text-[clamp(2.75rem,5.6vw,4.75rem)] leading-[1.06] tracking-[-0.02em]">
              {LINES.map((line) => (
                <span
                  key={line.text}
                  className={`block opacity-0 animate-[fadeInUp_1.1s_cubic-bezier(0.16,1,0.3,1)_${line.delay}_forwards] ${
                    line.accent ? 'italic text-accent/95 font-light' : ''
                  }`}
                >
                  {line.text}
                </span>
              ))}
            </h1>

            <p className="opacity-0 animate-[fadeInUp_1.1s_cubic-bezier(0.16,1,0.3,1)_0.65s_forwards] mt-8 md:mt-9 max-w-xl font-sans text-base md:text-[1.0625rem] font-light leading-[1.7] text-cream/70 text-pretty">
              Great Bay is a holding company focused on select investments across New England. Through disciplined capital allocation and a long-term investment philosophy, we preserve and grow generational wealth.
            </p>

            {/* One quiet action. The page's only filled button belongs to the
                contact form, so this reads as a hairline. */}
            <div className="opacity-0 animate-[fadeIn_1.2s_ease-out_0.95s_forwards] mt-9 md:mt-11">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 border border-accent/40 px-9 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent transition-colors duration-500 hover:bg-accent hover:text-background"
              >
                <span>Start Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Index rail. The three focus areas as a table of contents rather than
          a row of cards — labelled, so the list reads as an answer to a
          question the visitor is already asking. */}
      <div className="relative z-10 px-6 md:px-12 pb-10 opacity-0 animate-[fadeIn_1.2s_ease-out_1.2s_forwards]">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-5 font-sans text-[0.6875rem] font-light uppercase tracking-[0.18em] sm:tracking-[0.32em] text-accent/80">
            What We Do
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-3 border-t border-cream/15">
            {SERVICES.map((service) => (
              <li
                key={service.id}
                className="flex items-baseline gap-4 border-b border-cream/10 py-5 sm:border-b-0 sm:border-r sm:border-cream/10 sm:py-7 sm:pr-8 sm:pl-8 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
              >
                <span className="font-display text-[0.6875rem] font-medium tracking-[0.18em] text-accent/70">
                  {service.id}
                </span>
                <span className="font-sans text-sm md:text-base font-light tracking-[0.01em] text-cream/75 text-balance">
                  {service.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
