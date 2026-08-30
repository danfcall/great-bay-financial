import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/* Underline fields rather than boxes. A grid of outlined rectangles reads as
   an application form; a ruled line under each answer reads as stationery,
   and it keeps the only hard edges on the page for the panel itself.

   The weights here are set by contrast rather than by eye: the rules are the
   only thing marking where a field is, so they have to clear 3:1 against the
   panel (cream/45 measures 3.62:1), and every scrap of text has to clear
   4.5:1 at these sizes - cream/70 for labels at 7.06:1, cream/55 for
   placeholders and fine print at 4.80:1. The label still outranks the
   placeholder, which is the hierarchy the old cream/55-over-cream/35 was
   drawing before it was failing both bars. */
const labelClass =
  'block font-sans text-[0.625rem] font-medium uppercase tracking-[0.22em] text-cream/70 mb-2';

/* Focus is marked twice over: the rule turns accent (13.57:1 against the
   panel, against 3.62:1 at rest) and a box-shadow doubles its thickness. The
   second cue matters because colour alone is a weak signal for anyone who
   cannot separate cream from accent. The shadow rather than a border-width
   change keeps it from nudging the layout by a pixel on focus; it is a named
   token because the Play CDN does not emit an arbitrary shadow with a hex in
   it. */
const fieldClass =
  'w-full bg-transparent border-0 border-b border-cream/45 px-0 py-2.5 font-sans text-[0.9375rem] font-light text-cream transition-colors duration-300 placeholder-cream/55 hover:border-cream/65 focus:outline-none focus:border-accent focus:shadow-field focus:ring-0';

/* The message field is tall enough that a single bottom rule leaves the
   placeholder stranded well above the line, so it gets a full box instead. */
const textareaFieldClass =
  'w-full resize-none bg-transparent border border-cream/45 px-4 py-3 font-sans text-[0.9375rem] font-light text-cream transition-colors duration-300 placeholder-cream/55 hover:border-cream/65 focus:outline-none focus:border-accent focus:shadow-field-box focus:ring-0';

const RequiredMark: React.FC = () => (
  // The `required` attribute already carries this to assistive technology, so
  // the asterisk is decoration on top of it rather than the only signal.
  <span aria-hidden="true" className="text-accent/80"> *</span>
);

const ContactForm: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const isSubmitting = submissionState === 'submitting';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

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

      {/* The eyebrow carries the heading now that the display line above it is
          gone. Keeping it as an h2 rather than a bare span means the panel is
          still a landmark anyone navigating by heading can jump to. */}
      <div className="mb-6 flex flex-col gap-3 lg:mb-[clamp(1.125rem,2.6vh,1.5rem)]">
        <div className="inline-flex items-center gap-4">
          <span className="h-px w-10 bg-accent/50"></span>
          <h2
            id="gb-form-heading"
            className="font-sans text-[0.625rem] font-light uppercase tracking-[0.32em] text-accent/80"
          >
            Contact
          </h2>
        </div>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        aria-labelledby="gb-form-heading"
        aria-busy={isSubmitting}
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

        <p className="font-sans text-[0.625rem] font-light text-cream/55">
          <span aria-hidden="true" className="text-accent/80">*</span> Required
        </p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:gap-y-[clamp(1rem,2.6vh,1.5rem)]">
          <div>
            <label className={labelClass} htmlFor="gb-name">Name<RequiredMark /></label>
            <input
              id="gb-name"
              type="text"
              name="name"
              autoComplete="name"
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
              autoComplete="organization"
              className={fieldClass}
              placeholder="Company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:gap-y-[clamp(1rem,2.6vh,1.5rem)]">
          <div>
            <label className={labelClass} htmlFor="gb-email">Email<RequiredMark /></label>
            <input
              id="gb-email"
              type="email"
              name="email"
              autoComplete="email"
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
              autoComplete="tel"
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

        {/* Opt-in, not opt-out: the box starts empty and submitting the form
            does not depend on it. The terms sit in a description rather than
            in the label so that the checkbox announces as the agreement it is,
            with the small print read after it instead of swallowed into its
            name. */}
        <div className="flex items-start gap-3">
          <input
            id="gb-consent"
            type="checkbox"
            name="marketing_opt_in"
            value="agreed"
            aria-describedby="gb-consent-terms"
            className="mt-0.5 h-3.5 w-3.5 shrink-0 border border-cream/45 bg-background/35 accent-accent"
          />
          <div className="font-sans text-[0.6875rem] font-light leading-relaxed text-cream/55">
            <label htmlFor="gb-consent">
              I agree to receive marketing emails and text messages from Great Bay Financial at the
              contact details provided.
            </label>
            <span id="gb-consent-terms" className="mt-1 block text-cream/55">
              Consent is not a condition of any purchase. Message frequency varies. Message and data
              rates may apply. Reply STOP to unsubscribe.
            </span>
          </div>
        </div>

        {/* The live region is in the DOM at all times, empty or not. A region
            that arrives in the same update as its text is very often not
            announced at all, because assistive technology has to have been
            watching the node before it changed. */}
        <div role="status" aria-live="polite" className="empty:hidden">
          {isSubmitting && (
            <p className="text-sm leading-relaxed text-cream/70">Sending your message…</p>
          )}

          {submissionState === 'success' && (
            <p className="border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm leading-relaxed text-emerald-100">
              Thanks. Your message was sent successfully, and we&apos;ll be in touch shortly.
            </p>
          )}

          {submissionState === 'error' && (
            <p className="border border-amber-300/25 bg-amber-300/10 px-4 py-3 text-sm leading-relaxed text-amber-100">
              Something went wrong while sending your message. Please try again in a moment or email us directly.
            </p>
          )}
        </div>

        {/* aria-disabled rather than disabled: a genuinely disabled button is
            blurred by the browser and dropped from the tab order, so a
            keyboard visitor loses their place mid-submit and lands back at the
            top of the document. The handler guards against a double send. */}
        <button
          type="submit"
          aria-disabled={isSubmitting}
          className={`group flex w-full items-center justify-center gap-3 bg-accent px-10 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-background transition-all duration-300 ${
            isSubmitting
              ? 'opacity-60'
              : 'hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_18px_40px_rgba(232,222,201,0.18)]'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
