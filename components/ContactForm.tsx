import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/* Underline fields rather than boxes. A grid of outlined rectangles reads as
   an application form; a ruled line under each answer reads as stationery,
   and it keeps the only hard edges on the page for the panel itself. */
const labelClass =
  'block font-sans text-[0.625rem] font-medium uppercase tracking-[0.22em] text-cream/55 mb-2';

const fieldClass =
  'w-full bg-transparent border-0 border-b border-cream/20 px-0 py-2.5 font-sans text-[0.9375rem] font-light text-cream transition-colors duration-300 placeholder-cream/35 hover:border-cream/35 focus:outline-none focus:border-accent focus:ring-0';

/* The message field is tall enough that a single bottom rule leaves the
   placeholder stranded well above the line, so it gets a full box instead. */
const textareaFieldClass =
  'w-full resize-none bg-transparent border border-cream/20 px-4 py-3 font-sans text-[0.9375rem] font-light text-cream transition-colors duration-300 placeholder-cream/35 hover:border-cream/35 focus:outline-none focus:border-accent focus:ring-0';

const ContactForm: React.FC = () => {
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
    <div
      id="contact"
      className="relative border border-cream/15 bg-background/60 p-7 backdrop-blur-xl shadow-[0_40px_110px_rgba(3,8,16,0.45)] sm:p-9 lg:p-[clamp(1.5rem,3.4vh,2.5rem)]"
    >
      <span className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-accent/45 via-cream/10 to-transparent"></span>

      {/* The heading the old contact section carried, compressed to two lines
          so the panel spends its height on fields rather than on a title. */}
      <div className="mb-7 flex flex-col gap-3 lg:mb-[clamp(1.25rem,3vh,1.75rem)]">
        <div className="inline-flex items-center gap-4">
          <span className="h-px w-10 bg-accent/50"></span>
          <span className="font-sans text-[0.625rem] font-light uppercase tracking-[0.32em] text-accent/80">
            Contact
          </span>
        </div>
        <h2 className="font-display text-[1.75rem] font-normal leading-[1.1] tracking-[-0.02em] text-cream lg:text-3xl">
          Ready to <span className="font-light italic text-accent/95">Grow?</span>
        </h2>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="w-full space-y-6 text-left lg:space-y-[clamp(1rem,2.6vh,1.5rem)]"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human:
            <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:gap-y-[clamp(1rem,2.6vh,1.5rem)]">
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

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:gap-y-[clamp(1rem,2.6vh,1.5rem)]">
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
            rows={3}
            className={textareaFieldClass}
            placeholder="Tell us about the opportunity, financing need, or transaction you're considering."
          />
        </div>

        <label className="flex items-start gap-3 font-sans text-[0.6875rem] font-light leading-relaxed text-cream/55">
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

        <button
          type="submit"
          disabled={submissionState === 'submitting'}
          className="group flex w-full items-center justify-center gap-3 bg-accent px-10 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_18px_40px_rgba(232,222,201,0.18)] disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {submissionState === 'submitting' ? 'Sending...' : 'Submit'}
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
