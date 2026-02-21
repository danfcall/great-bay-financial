import React, { useRef, useCallback, useEffect } from 'react';
import { ArrowDownRight } from 'lucide-react';

const WORDS = [
  { text: 'VISION', animationClass: 'opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]' },
  { text: 'MEETS', animationClass: 'opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]' },
  { text: 'CAPITAL', animationClass: 'opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]' },
];

const Hero: React.FC = () => {
  const WistiaPlayer = 'wistia-player' as any;
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const letterSpansRef = useRef<HTMLSpanElement[]>([]);
  const letterCentersRef = useRef<{ x: number; y: number }[]>([]);
  const currentBlurRef = useRef<number[]>([]);
  const targetPointerRef = useRef({ x: 0, y: 0 });
  const smoothPointerRef = useRef({ x: 0, y: 0 });
  const isPointerActiveRef = useRef(false);
  const hoverIntensityRef = useRef(0);
  const blurRadiusRef = useRef(150);
  const blurFalloffExponentRef = useRef(2);
  const rafIdRef = useRef<number | null>(null);

  const MAX_BLUR = 14;

  const updateLetterCenters = useCallback(() => {
    const spans = letterSpansRef.current;
    if (!spans.length) return;

    letterCentersRef.current = spans.map((span) => {
      const rect = span.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    });

    if (!h1Ref.current) return;
    const headlineRect = h1Ref.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    const widthBasedRadius = headlineRect.width * 0.22;
    const viewportBoost =
      viewportWidth >= 1440 ? 40 :
        viewportWidth >= 1200 ? 24 :
          viewportWidth >= 1024 ? 12 : 0;

    blurRadiusRef.current = Math.max(150, Math.min(320, widthBasedRadius + viewportBoost));
    blurFalloffExponentRef.current = viewportWidth >= 1024 ? 1.5 : 2;
  }, []);

  const stopAnimationIfIdle = useCallback(() => {
    if (!rafIdRef.current) return;

    const blurValues = currentBlurRef.current;
    const hasResidualBlur = blurValues.some((blur) => blur > 0.08);
    if (!isPointerActiveRef.current && hoverIntensityRef.current < 0.02 && !hasResidualBlur) {
      letterSpansRef.current.forEach((span) => {
        span.style.filter = '';
      });
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  const animate = useCallback(() => {
    const spans = letterSpansRef.current;
    const centers = letterCentersRef.current;
    const currentBlur = currentBlurRef.current;
    const blurRadius = blurRadiusRef.current;
    const blurFalloffExponent = blurFalloffExponentRef.current;

    if (!spans.length || spans.length !== centers.length) {
      rafIdRef.current = null;
      return;
    }

    const pointerLerp = isPointerActiveRef.current ? 0.18 : 0.06;
    const blurRiseLerp = isPointerActiveRef.current ? 0.22 : 0.1;
    const blurDecayLerp = isPointerActiveRef.current ? 0.08 : 0.06;
    const intensityTarget = isPointerActiveRef.current ? 1 : 0;
    const intensityLerp = isPointerActiveRef.current ? 0.22 : 0.06;
    hoverIntensityRef.current += (intensityTarget - hoverIntensityRef.current) * intensityLerp;
    smoothPointerRef.current.x += (targetPointerRef.current.x - smoothPointerRef.current.x) * pointerLerp;
    smoothPointerRef.current.y += (targetPointerRef.current.y - smoothPointerRef.current.y) * pointerLerp;

    spans.forEach((span, i) => {
      const center = centers[i];
      const dist = Math.hypot(smoothPointerRef.current.x - center.x, smoothPointerRef.current.y - center.y);
      const normalized = Math.max(0, 1 - dist / blurRadius);
      const targetBlur = MAX_BLUR * Math.pow(normalized, blurFalloffExponent) * hoverIntensityRef.current;

      const blurDelta = targetBlur - currentBlur[i];
      currentBlur[i] += blurDelta * (blurDelta >= 0 ? blurRiseLerp : blurDecayLerp);
      const blurValue = currentBlur[i];
      span.style.filter = blurValue > 0.08 ? `blur(${blurValue.toFixed(2)}px)` : '';
    });

    stopAnimationIfIdle();
    if (rafIdRef.current !== null) {
      rafIdRef.current = requestAnimationFrame(animate);
    }
  }, [MAX_BLUR, stopAnimationIfIdle]);

  const startAnimation = useCallback(() => {
    if (rafIdRef.current !== null) return;
    rafIdRef.current = requestAnimationFrame(animate);
  }, [animate]);

  useEffect(() => {
    if (!h1Ref.current) return;
    const spans = Array.from(h1Ref.current.querySelectorAll<HTMLSpanElement>('span[data-letter]'));
    letterSpansRef.current = spans;
    currentBlurRef.current = spans.map(() => 0);
    updateLetterCenters();

    const resizeObserver = new ResizeObserver(updateLetterCenters);
    resizeObserver.observe(h1Ref.current);
    window.addEventListener('resize', updateLetterCenters);
    window.addEventListener('scroll', updateLetterCenters, true);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateLetterCenters);
      window.removeEventListener('scroll', updateLetterCenters, true);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [updateLetterCenters]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    targetPointerRef.current = { x: e.clientX, y: e.clientY };
    isPointerActiveRef.current = true;
    hoverIntensityRef.current = Math.max(hoverIntensityRef.current, 0.4);
    startAnimation();
  }, [startAnimation]);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    targetPointerRef.current = { x: e.clientX, y: e.clientY };
    smoothPointerRef.current = { x: e.clientX, y: e.clientY };
    isPointerActiveRef.current = true;
    hoverIntensityRef.current = Math.max(hoverIntensityRef.current, 0.4);
    updateLetterCenters();
    startAnimation();
  }, [startAnimation, updateLetterCenters]);

  const handleMouseLeave = useCallback(() => {
    isPointerActiveRef.current = false;
    startAnimation();
  }, [startAnimation]);

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

      <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col items-center justify-center text-center">
        {/* Centered Hero headline with letter-level blur on hover */}
        <div className="relative mb-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 font-display text-[14vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[160px] leading-[0.9] font-bold tracking-tighter pointer-events-none select-none"
            style={{ color: 'transparent', WebkitTextStroke: '1px rgba(232, 221, 200, 0.95)' }}
          >
            {WORDS.map((word) => (
              <span key={`base-${word.text}`} className={`block ${word.animationClass}`}>
                {word.text.split('').map((letter, i) => (
                  <span key={`base-${word.text}-${i}`} style={{ display: 'inline-block' }}>
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </div>

          <h1
            ref={h1Ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative font-display text-[14vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[160px] leading-[0.9] font-bold tracking-tighter text-cream drop-shadow-2xl cursor-default select-none"
          >
            {WORDS.map((word) => (
              <span
                key={word.text}
                className={`block ${word.animationClass} ${word.text === 'MEETS' ? 'text-outline text-accent' : ''}`}
              >
                {word.text.split('').map((letter, i) => (
                  <span
                    key={i}
                    data-letter="true"
                    style={{ display: 'inline-block', willChange: 'filter' }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        {/* Action Area Below Headline */}
        <div className="opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards] max-w-2xl mx-auto flex flex-col items-center group/cta relative pb-24">

          <a
            href="#narrative"
            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-background font-bold uppercase tracking-wider hover:bg-cream transition-colors duration-300 shadow-[0_0_40px_rgba(238,211,177,0.15)] hover:shadow-[0_0_60px_rgba(238,211,177,0.3)] text-sm rounded-sm z-30 peer relative"
          >
            <span>LEARN MORE</span>
            <ArrowDownRight className="w-5 h-5 ml-4 group-hover/cta:rotate-45 transition-transform duration-300" />
          </a>

          {/* Scroll Down Line connected to CTA hover */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 pt-12 flex flex-col items-center justify-start pointer-events-none w-full h-24 opacity-50 group-hover/cta:opacity-100 transition-opacity duration-300">
            <div className="w-[1px] h-16 bg-cream/30 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full bg-cream transform -translate-y-full group-hover/cta:animate-[scrollDownLine_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none animate-pulse mix-blend-overlay"></div>

    </section>
  );
};

export default Hero;
