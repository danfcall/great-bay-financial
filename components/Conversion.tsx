import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

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

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-cream">
          Ready to <span className="text-accent italic">Grow?</span>
        </h2>
        <p className="text-xl text-cream/70 mb-12 max-w-2xl mx-auto">
          <span className="block mt-2">Fill out the brief form below and a senior advisor will be in touch.</span>
        </p>

        <form className="w-full max-w-lg mx-auto space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">Name</label>
            <input
              type="text"
              className="w-full bg-surface/50 border-b border-cream/20 px-4 py-3 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">Company</label>
            <input
              type="text"
              className="w-full bg-surface/50 border-b border-cream/20 px-4 py-3 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
              placeholder="Company name"
            />
          </div>
          <div>
            <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-surface/50 border-b border-cream/20 px-4 py-3 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
              placeholder="email@company.com"
            />
          </div>

          <div className="pt-8">
            <button className="w-full bg-accent text-background font-bold uppercase tracking-widest py-5 flex items-center justify-center gap-2 hover:bg-cream transition-colors duration-300">
              Start Conversation <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-cream/40 pt-4">
            <Lock className="w-3 h-3" />
            <span>Your data is encrypted and secure.</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Conversion;