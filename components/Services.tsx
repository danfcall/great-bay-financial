import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="border-b border-cream/8 px-6 py-20 md:px-10 md:py-28">
      <div className="section-frame">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="eyebrow">Capabilities</div>
            <h2 className="mt-7 font-display text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.92] tracking-[-0.04em] text-white">
              Structured around the financing questions clients actually need answered.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-mist">
            Each engagement is tailored, but the mandate is consistent: bring the right capital structure, the right market coverage, and the right process discipline to the table.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <article key={service.id} className="panel group rounded-[2rem] p-8 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="grid-label text-[11px] text-accentSoft/70">{service.id}</p>
                  <h3 className="mt-5 font-display text-4xl leading-none text-white">{service.title}</h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-accentSoft/78">{service.description}</p>
                </div>
                <div className="rounded-2xl border border-accent/20 bg-accent/10 p-3">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
              </div>

              <p className="mt-8 max-w-xl text-base leading-8 text-mist">{service.detail}</p>

              <div className="section-divider my-7" />

              <div className="grid gap-3 md:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[1.25rem] border border-cream/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-cream/80"
                  >
                    {highlight}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-accentSoft transition-colors duration-200 group-hover:text-accent"
              >
                Discuss this capability
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
