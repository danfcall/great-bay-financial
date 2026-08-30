import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const POSTER = `${import.meta.env.BASE_URL}great-bay-loop-poster.webp`;
const DESKTOP_SRC = `${import.meta.env.BASE_URL}great-bay-loop.mp4`;
const MOBILE_SRC = `${import.meta.env.BASE_URL}great-bay-loop-mobile.mp4`;

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
/* Phones get the 720p cut. The loop is a full-bleed background behind a
   portrait viewport, so most of a 1080p frame would be cropped away off-screen
   -- half the bytes for a difference nobody can see. */
const SMALL_SCREEN = '(max-width: 900px)';

const sourceForViewport = () =>
  window.matchMedia(SMALL_SCREEN).matches ? MOBILE_SRC : DESKTOP_SRC;

/* Visitors who asked for reduced motion, and visitors on a metered or slow
   connection, are never sent the video at all -- they keep the poster frame,
   and the toggle lets them opt in. Everyone else gets the loop. */
const shouldAutoplay = () => {
  if (window.matchMedia(REDUCED_MOTION).matches) return false;
  const connection = (navigator as any).connection;
  if (connection?.saveData) return false;
  if (typeof connection?.effectiveType === 'string' && connection.effectiveType.includes('2g')) return false;
  return true;
};

export const useBackgroundLoop = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const start = useCallback((video: HTMLVideoElement) => {
    // React writes `muted` as an attribute but does not always set the
    // property, and the property is the one the autoplay policy reads.
    video.muted = true;
    if (!video.getAttribute('src')) video.src = sourceForViewport();
    video.play().catch(() => setIsPlaying(false));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldAutoplay()) start(video);

    // The play/pause events are the source of truth rather than the click
    // handler, so the button stays honest when playback stops for a reason we
    // did not cause: a backgrounded tab, OS power saving, a dropped decoder.
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    // Someone switching reduced motion on mid-visit is asking for the motion
    // to stop now, not on the next load.
    const motion = window.matchMedia(REDUCED_MOTION);
    const onMotionChange = () => { if (motion.matches) video.pause(); };
    motion.addEventListener('change', onMotionChange);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      motion.removeEventListener('change', onMotionChange);
    };
  }, [start]);

  const toggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) start(video);
    else video.pause();
  }, [start]);

  return { videoRef, isPlaying, toggle };
};

/* Decorative, and announced as such: aria-hidden plus tabIndex -1 keeps the
   element out of both the accessibility tree and the tab order. */
export const BackgroundLoopVideo: React.FC<{
  videoRef: React.RefObject<HTMLVideoElement>;
}> = ({ videoRef }) => (
  <video
    ref={videoRef}
    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
    poster={POSTER}
    preload="none"
    muted
    loop
    playsInline
    aria-hidden="true"
    tabIndex={-1}
  />
);

/* WCAG 2.2.2: motion that starts on its own and runs past five seconds needs a
   way to stop it. The negative margin lets the control keep a 36px hit area
   without the icon sitting away from the baseline it shares with the notice. */
export const BackgroundLoopToggle: React.FC<{
  isPlaying: boolean;
  onToggle: () => void;
}> = ({ isPlaying, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
    className="-m-2 inline-flex h-9 w-9 shrink-0 items-center justify-center text-cream/55 transition-colors duration-300 hover:text-cream"
  >
    {isPlaying ? (
      <Pause className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
    ) : (
      <Play className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
    )}
  </button>
);
