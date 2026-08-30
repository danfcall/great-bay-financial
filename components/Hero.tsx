import React from 'react';
import ContactForm from './ContactForm';
import { BackgroundLoopToggle, BackgroundLoopVideo, useBackgroundLoop } from './BackgroundLoop';

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
  const { videoRef, isPlaying, toggle } = useBackgroundLoop();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Full-screen background loop, graded toward the page navy so type
          stays legible over any frame of the footage. The layer is pinned to
          the viewport rather than to the section, so the loop sits still while
          the content scrolls over it.

          The framing is object-cover on the video itself. The old embed could
          not do that, so it carried its own cover math in vh/vw — which only
          held when the box was exactly one screen, and letterboxed the footage
          on phones where the section grows past that. */}
      <div className="fixed inset-0 z-0 bg-background">
        <BackgroundLoopVideo videoRef={videoRef} />
        <div className="absolute inset-0 z-10 bg-background/35"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/55 to-transparent"></div>
        {/* Both edges now carry content — the words on the left, the panel on
            the right — so the footage is darkened at the sides and left to
            breathe through the middle. */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/70 via-background/15 to-background/55"></div>
      </div>

      {/* The vertical rhythm is tied to viewport height so the panel keeps
          fitting on a short laptop screen instead of pushing the page into a
          scroll. */}
      <div className="relative z-10 flex flex-1 flex-col px-6 pb-8 pt-28 md:px-12 lg:pb-5 lg:pt-[clamp(6.75rem,13vh,8rem)]">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center">
          {/* One row on desktop: the statement holds the left, the form holds
              the right. Below lg they stack, words first. */}
          <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-16 xl:gap-24">
            <div className="max-w-xl">
              <h1 className="font-display text-[clamp(2.75rem,5vw,4.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-cream">
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

              <p className="mt-7 max-w-lg text-pretty font-sans text-base font-light leading-[1.7] text-cream/70 opacity-0 animate-[fadeInUp_1.1s_cubic-bezier(0.16,1,0.3,1)_0.65s_forwards] md:mt-8 md:text-[1.0625rem]">
                Great Bay is a holding company focused on select investments across New England. Through disciplined capital allocation and a long-term investment philosophy, we preserve and grow generational wealth.
              </p>
            </div>

            <div className="opacity-0 animate-[fadeIn_1.2s_ease-out_0.85s_forwards]">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* The old footer folded into the bottom of the viewport, so the page
            ends where the screen does. */}
        <div className="mx-auto mt-10 flex w-full max-w-7xl items-center justify-between gap-6 lg:mt-4">
          <p className="font-sans text-[0.6875rem] font-light text-cream/40">
            &copy; {new Date().getFullYear()} Great Bay Financial. All rights reserved.
          </p>
          <BackgroundLoopToggle isPlaying={isPlaying} onToggle={toggle} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
