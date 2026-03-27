import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import SectionIntro from './SectionIntro';

const Conversion: React.FC = () => {
  const WistiaPlayer = 'wistia-player' as any;

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden bg-background">

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-[1] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw]">
            <WistiaPlayer
              media-id="i952bbp1q2"
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
              className="w-full h-full object-cover"
            ></WistiaPlayer>
          </div>
        </div>
      </div>

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-background/85 z-[2] pointer-events-none"></div>

      {/* Top gradient fade from stats section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent z-[3] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-14 lg:gap-20">
          <div className="lg:w-[34%]">
            <SectionIntro
              eyebrow="Contact"
              title="Ready to"
              accent="Grow?"
              description="Fill out the form to learn more about our products and service offerings."
            />
          </div>

          <div className="lg:w-[66%]">
            <div className="border border-cream/15 bg-surface/20 backdrop-blur-md p-8 md:p-10 lg:p-12 shadow-[0_30px_80px_rgba(3,8,16,0.35)]">
              <form className="w-full max-w-2xl space-y-5 text-left" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-background/35 border border-cream/15 px-4 py-3.5 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full bg-background/35 border border-cream/15 px-4 py-3.5 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-background/35 border border-cream/15 px-4 py-3.5 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">What are you exploring?</label>
                  <textarea
                    rows={5}
                    className="w-full resize-none bg-background/35 border border-cream/15 px-4 py-3.5 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
                    placeholder="Tell us about the opportunity, financing need, or transaction you're considering."
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 pt-4">
                  <div className="flex items-center gap-2 text-xs text-cream/40">
                    <Lock className="w-3 h-3" />
                    <span>Your data is encrypted and secure.</span>
                  </div>

                  <button className="w-full md:w-auto md:min-w-[260px] bg-accent text-background font-bold uppercase tracking-widest px-8 py-5 flex items-center justify-center gap-2 hover:bg-cream transition-colors duration-300">
                    Start Conversation <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversion;
