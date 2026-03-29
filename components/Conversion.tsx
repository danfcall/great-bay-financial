import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionIntro from './SectionIntro';

const Conversion: React.FC = () => {
  const WistiaPlayer = 'wistia-player' as any;
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedBody = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        encodedBody.append(key, value);
      }
    });

    setSubmissionState('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodedBody.toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setSubmissionState('success');
    } catch (error) {
      console.error(error);
      setSubmissionState('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden bg-background border-t border-cream/5">

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-[1] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[320vh] h-[180vh] sm:w-[240vh] sm:h-[135vh] md:w-[177.78vh] md:h-[56.25vw]">
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
              className="w-full h-full object-cover pointer-events-none"
            ></WistiaPlayer>
          </div>
        </div>
      </div>

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-background/75 z-[2] pointer-events-none"></div>

      {/* Longer top gradient fade from services section */}
      <div className="absolute top-0 left-0 right-0 h-72 md:h-80 bg-gradient-to-b from-background via-background/92 to-transparent z-[3] pointer-events-none"></div>
      <div className="absolute inset-0 z-[4]" aria-hidden="true"></div>

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
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="w-full max-w-2xl space-y-5 text-left"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="hidden"
                  name="marketing_opt_in"
                  value="By submitting this form, you agree to receive email and SMS communications from us"
                />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-background/35 border border-cream/15 px-4 py-3.5 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full bg-background/35 border border-cream/15 px-4 py-3.5 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-background/35 border border-cream/15 px-4 py-3.5 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-background/35 border border-cream/15 px-4 py-3.5 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-cream/60 mb-2">What are you exploring?</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full resize-none bg-background/35 border border-cream/15 px-4 py-3.5 text-cream focus:outline-none focus:border-accent transition-colors placeholder-cream/20 backdrop-blur-sm"
                    placeholder="Tell us about the opportunity, financing need, or transaction you're considering."
                  />
                </div>

                <p className="text-xs leading-relaxed text-cream/50 pt-1">
                  By submitting this form, you agree to receive email and SMS communications from us
                </p>

                {submissionState === 'success' && (
                  <p className="border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm leading-relaxed text-emerald-100" aria-live="polite">
                    Thanks. Your message was sent successfully, and we&apos;ll be in touch shortly.
                  </p>
                )}

                {submissionState === 'error' && (
                  <p className="border border-amber-300/25 bg-amber-300/10 px-4 py-3 text-sm leading-relaxed text-amber-100" aria-live="polite">
                    Something went wrong while sending your message. Please try again in a moment or email us directly.
                  </p>
                )}

                <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-5 pt-3">
                  <button
                    type="submit"
                    disabled={submissionState === 'submitting'}
                    className="group w-full md:w-auto md:min-w-[260px] bg-accent text-background font-bold uppercase tracking-widest px-8 py-5 flex items-center justify-center gap-2 hover:bg-cream hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(232,222,201,0.18)] transition-all duration-300"
                  >
                    {submissionState === 'submitting' ? 'Sending...' : 'Start Conversation'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
