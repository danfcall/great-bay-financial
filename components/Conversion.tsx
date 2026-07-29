import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionIntro from './SectionIntro';

/* Underline fields rather than boxes. A grid of outlined rectangles reads as
   an application form; a ruled line under each answer reads as stationery,
   and it keeps the only hard edges on the page for the panel itself. */
const labelClass =
  'block font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-cream/55 mb-3';

const fieldClass =
  'w-full bg-transparent border-0 border-b border-cream/20 px-0 py-3 font-sans text-base font-light text-cream transition-colors duration-300 placeholder-cream/35 hover:border-cream/35 focus:outline-none focus:border-accent focus:ring-0';

/* The message field is tall enough that a single bottom rule leaves the
   placeholder stranded well above the line, so it gets a full box instead. */
const textareaFieldClass =
  'w-full bg-transparent border border-cream/20 px-4 py-3 font-sans text-base font-light text-cream transition-colors duration-300 placeholder-cream/35 hover:border-cream/35 focus:outline-none focus:border-accent focus:ring-0';

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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[320vh] h-[180vh] sm:w-[284.44vh] sm:h-[160vh] md:w-[266.67vh] md:h-[150vh] lg:w-[248.89vh] lg:h-[140vh]">
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

      {/* Overlays for readability. The horizon band in this footage is the
          brightest thing on the page; the left wash keeps it from running
          under the heading and lede. */}
      <div className="absolute inset-0 bg-background/82 z-[2] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/55 z-[2] pointer-events-none"></div>

      {/* Longer top gradient fade out of the hero */}
      <div className="absolute top-0 left-0 right-0 h-72 md:h-80 bg-gradient-to-b from-background via-background/92 to-transparent z-[3] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-background to-transparent z-[3] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-14 lg:gap-20">
          <div className="lg:w-[34%]">
            <SectionIntro
              eyebrow="Contact"
              title="Ready to"
              accent="Grow?"
            />
          </div>

          <div className="lg:w-[66%]">
            <div className="relative border border-cream/15 bg-background/60 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_40px_110px_rgba(3,8,16,0.45)]">
              <span className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-accent/45 via-cream/10 to-transparent"></span>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="w-full max-w-2xl space-y-8 text-left"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                  <div>
                    <label className={labelClass} htmlFor="gb-name">Name</label>
                    <input
                      id="gb-name"
                      type="text"
                      name="name"
                      required
                      className={fieldClass}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="gb-company">Company</label>
                    <input
                      id="gb-company"
                      type="text"
                      name="company"
                      className={fieldClass}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                  <div>
                    <label className={labelClass} htmlFor="gb-email">Email</label>
                    <input
                      id="gb-email"
                      type="email"
                      name="email"
                      required
                      className={fieldClass}
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="gb-phone">Phone</label>
                    <input
                      id="gb-phone"
                      type="tel"
                      name="phone"
                      className={fieldClass}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="gb-message">How can we help?</label>
                  <textarea
                    id="gb-message"
                    name="message"
                    rows={4}
                    className={`${textareaFieldClass} resize-none`}
                    placeholder="Tell us about the opportunity, financing need, or transaction you're considering."
                  />
                </div>

                <label className="flex items-start gap-3.5 pt-2 font-sans text-xs font-light leading-relaxed text-cream/55">
                  <input
                    type="checkbox"
                    name="marketing_opt_in"
                    value="agreed"
                    defaultChecked
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 border border-cream/30 bg-background/35 accent-accent"
                  />
                  <span>By submitting this form, you agree to receive email and SMS communications from us</span>
                </label>

                <div className="empty:hidden">
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
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-5 pt-4">
                  <button
                    type="submit"
                    disabled={submissionState === 'submitting'}
                    className="group w-full md:w-auto md:min-w-[260px] bg-accent text-background font-sans text-xs font-semibold uppercase tracking-[0.2em] px-10 py-5 flex items-center justify-center gap-3 hover:bg-cream hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(232,222,201,0.18)] disabled:opacity-60 disabled:hover:translate-y-0 transition-all duration-300"
                  >
                    {submissionState === 'submitting' ? 'Sending...' : 'Submit'}
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
