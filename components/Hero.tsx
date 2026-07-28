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
      {/* Ambient ground. The video is framed further down, so the section
          itself stays quiet: one warm bloom behind the frame, one cool wash
          under the type. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-[-10%] w-[45rem] h-[45rem] rounded-full bg-surface/25 blur-[140px]"></div>
        <div className="absolute top-1/4 right-[-8%] w-[38rem] h-[38rem] rounded-full bg-accent/[0.07] blur-[130px]"></div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="flex-1 flex items-center px-6 md:px-12 pt-32 pb-12 md:pt-36 md:pb-10 relative z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-y-12 lg:gap-x-16">

          {/* Type column */}
          <div className="lg:col-span-7 xl:col-span-6">
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
              We are a private investment company focused on opportunities that strengthen New England businesses and communities. Through thoughtful capital allocation and strategic partnerships, our investments address unique challenges while creating lasting value.
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

          {/* Framed loop. Matted like a print: a hairline border, a margin of
              ground between border and image, and a vignette so the footage
              settles into the navy instead of sitting on top of it. */}
          <div className="lg:col-span-5 xl:col-start-8 xl:col-span-5 opacity-0 animate-[fadeIn_1.6s_ease-out_0.5s_forwards]">
            <figure className="relative border border-cream/15 bg-background/40 p-2.5 md:p-3 shadow-[0_40px_120px_rgba(3,8,20,0.55)]">
              <span className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-accent/50 via-cream/10 to-transparent"></span>

              {/* Portrait crop on desktop, but bounded by the viewport so the
                  hero still resolves in one screen. */}
              <div className="relative aspect-[3/2] sm:aspect-[16/10] lg:aspect-auto lg:h-[clamp(18rem,46vh,28rem)] overflow-hidden bg-background">
                <div className="absolute left-1/2 top-1/2 h-full aspect-video -translate-x-1/2 -translate-y-1/2 pointer-events-none [filter:saturate(0.86)_contrast(1.02)_brightness(1)]">
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
                    className="w-full h-full object-cover"
                  ></WistiaPlayer>
                </div>

                {/* Grade the footage toward the page's navy so the frame reads
                    as part of the composition rather than a window cut into it. */}
                <div className="absolute inset-0 pointer-events-none bg-background/12"></div>
                <div className="absolute inset-0 pointer-events-none bg-surface/20 mix-blend-color"></div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/45 via-transparent to-background/12"></div>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(10,22,40,0.45)]"></div>
              </div>
            </figure>
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
