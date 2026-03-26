import React from 'react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';

const mandatePoints = [
  'Acquisitions and facility expansion',
  'Equipment-intensive growth initiatives',
  'Urgent lender outreach and deal positioning',
];

const sectorList = ['Manufacturing', 'Transportation', 'Distribution', 'Construction'];

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-cream/8 px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40">
      <div className="harbor-line" />
      <div className="section-frame relative z-10">
        <div className="grid items-start gap-14 xl:grid-cols-[minmax(0,1.15fr)_440px]">
          <div className="max-w-3xl">
            <div className="eyebrow reveal-up" style={{ animationDelay: '80ms' }}>
              Structured finance for operators with real deadlines
            </div>

            <h1
              className="reveal-up mt-8 max-w-4xl font-display text-[clamp(3.6rem,8vw,7.6rem)] leading-[0.9] tracking-[-0.04em] text-white"
              style={{ animationDelay: '170ms' }}
            >
              Capital strategy for companies that cannot afford a generic lender process.
            </h1>

            <div className="reveal-up mt-8 max-w-2xl space-y-5 text-lg leading-8 text-mist md:text-xl" style={{ animationDelay: '260ms' }}>
              <p>
                Great Bay Financial helps leadership teams structure debt, equipment finance, and lender outreach with the rigor of an internal capital-markets function.
              </p>
              <p>
                We bring clarity to complex projects, accelerate the financing path, and keep the solution aligned with how the business actually operates.
              </p>
            </div>

            <div className="reveal-up mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '340ms' }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-all duration-200 hover:-translate-y-0.5 hover:bg-accentSoft"
              >
                Request a consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-cream/15 bg-white/[0.03] px-7 py-4 text-sm font-medium text-cream transition-all duration-200 hover:border-accent/45 hover:bg-white/[0.05]"
              >
                Explore capabilities
                <Play className="h-4 w-4" />
              </a>
            </div>

            <div className="reveal-up mt-16 grid gap-4 md:grid-cols-3" style={{ animationDelay: '420ms' }}>
              {[
                { label: 'Operator-first lens', value: '40 years of industry experience' },
                { label: 'Execution focus', value: 'Senior-led deal process from outreach to close' },
                { label: 'Capital access', value: 'Banks, independents, and private credit partners' },
              ].map((item) => (
                <div key={item.label} className="stat-tile rounded-[1.75rem] px-5 py-5">
                  <p className="grid-label text-[11px] text-accentSoft/70">{item.label}</p>
                  <p className="mt-4 text-base leading-7 text-cream/88">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-up xl:pt-6" style={{ animationDelay: '220ms' }}>
            <div className="panel animate-float-slow rounded-[2rem] p-7 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="grid-label text-[11px] text-accentSoft/70">Current mandate</p>
                  <h2 className="mt-4 font-display text-4xl leading-none text-white">Senior-level advisory, built around the deal.</h2>
                </div>
                <div className="rounded-full border border-accent/30 px-3 py-1.5">
                  <span className="grid-label text-[10px] text-accentSoft">Active</span>
                </div>
              </div>

              <div className="section-divider my-7" />

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: '$500M+', label: 'Capital arranged' },
                  { value: '50+', label: 'Lender relationships' },
                  { value: '40+', label: 'Industries served' },
                  { value: '96%', label: 'Client retention' },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.4rem] border border-cream/10 bg-white/[0.03] px-4 py-4">
                    <p className="font-display text-3xl leading-none text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-mist">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="section-divider my-7" />

              <div className="space-y-4">
                <p className="grid-label text-[11px] text-accentSoft/70">Where we help most</p>
                {mandatePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" />
                    <p className="text-sm leading-7 text-cream/82">{point}</p>
                  </div>
                ))}
              </div>

              <div className="section-divider my-7" />

              <div>
                <p className="grid-label text-[11px] text-accentSoft/70">Common sectors</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {sectorList.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-cream/10 bg-white/[0.04] px-3.5 py-2 text-sm text-cream/80"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
