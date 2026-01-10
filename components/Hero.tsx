import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const WistiaPlayer = 'wistia-player' as any;



  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden border-b border-cream/5"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-background">
        <div className="absolute inset-0 bg-background/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>

        {/* Wistia Background Wrapper */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {/* 
            Aspect Ratio Hack for Coverage:
            Forces the video to always cover the screen by setting min dimensions and 
            using the 177.78vh (16/9) / 56.25vw (9/16) trick.
          */}
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
              className="w-full h-full object-cover opacity-60"
            ></WistiaPlayer>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12">
          {/* Hero headline */}
          <h1 className="font-display text-[14vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[160px] leading-[0.9] font-bold tracking-tighter text-cream drop-shadow-2xl">
            <span className="block opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">VISION</span>
            <span className="block text-outline opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] text-accent">MEETS</span>
            <span className="block opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">CAPITAL</span>
          </h1>

          {/* CTA */}
          <div className="lg:pb-2 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards] lg:max-w-sm">
            <p className="text-cream/90 text-base lg:text-lg leading-relaxed mb-6 border-l-2 border-accent pl-6 drop-shadow-lg">
              Navigate growth with confidence. We connect ambitious companies with the right capital partners.
            </p>

            <a
              href="#services"
              className="group w-full lg:w-auto inline-flex items-center justify-between px-8 py-5 bg-accent text-background font-bold uppercase tracking-wider hover:bg-cream transition-colors duration-300 shadow-lg shadow-black/20 text-sm"
            >
              <span>Explore Solutions</span>
              <ArrowDownRight className="w-5 h-5 ml-8 group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none animate-pulse mix-blend-overlay"></div>
    </section>
  );
};

export default Hero;