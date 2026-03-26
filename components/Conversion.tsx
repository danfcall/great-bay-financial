import React from 'react';
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react';

const Conversion: React.FC = () => {
  return (
    <section id="contact" className="px-6 py-20 md:px-10 md:py-28">
      <div className="section-frame">
        <div className="panel rounded-[2.25rem] p-8 md:p-10 xl:p-12">
          <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-xl">
              <div className="eyebrow">Start the conversation</div>
              <h2 className="mt-7 font-display text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] tracking-[-0.04em] text-white">
                Bring us the mandate. We will help shape the path to capital.
              </h2>
              <p className="mt-7 text-lg leading-8 text-mist">
                Share the opportunity, timing, and financing question you are working through. We will respond with the right next step for the situation.
              </p>

              <div className="mt-10 grid gap-4">
                {[
                  'Confidential review of the opportunity and capital need',
                  'Senior-level perspective on lender fit and process design',
                  'Clear next steps instead of a generic intake sequence',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1.3rem] border border-cream/10 bg-white/[0.03] px-4 py-4">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-accent" />
                    <p className="text-sm leading-7 text-cream/82">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">Name</label>
                  <input id="name" type="text" className="field-input rounded-2xl" placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="company" className="field-label">Company</label>
                  <input id="company" type="text" className="field-input rounded-2xl" placeholder="Company name" />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="field-label">Email</label>
                  <input id="email" type="email" className="field-input rounded-2xl" placeholder="name@company.com" />
                </div>
                <div>
                  <label htmlFor="timeline" className="field-label">Timeline</label>
                  <select id="timeline" className="field-select rounded-2xl" defaultValue="">
                    <option value="" disabled>
                      Select timing
                    </option>
                    <option>Immediate opportunity</option>
                    <option>Within 30 days</option>
                    <option>Quarter planning horizon</option>
                    <option>Exploratory</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="need" className="field-label">Financing need</label>
                <input
                  id="need"
                  type="text"
                  className="field-input rounded-2xl"
                  placeholder="Acquisition, equipment refresh, fleet, working capital support, or other"
                />
              </div>

              <div>
                <label htmlFor="details" className="field-label">Project overview</label>
                <textarea
                  id="details"
                  className="field-textarea rounded-[1.5rem]"
                  placeholder="Share the asset, use of proceeds, required timing, and anything lenders should understand about the business."
                />
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-all duration-200 hover:-translate-y-0.5 hover:bg-accentSoft"
                >
                  Request review
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="inline-flex items-center gap-3 text-sm text-mist">
                  <LockKeyhole className="h-4 w-4 text-accent" />
                  Information is handled discreetly and reviewed directly.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversion;
