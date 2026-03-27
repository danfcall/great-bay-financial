import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import SectionIntro from './SectionIntro';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <SectionIntro
              eyebrow="Services"
              title="Great Bay"
              accent="Solutions"
            />
          </div>

          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border-t border-l border-cream/10">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="group relative overflow-hidden border-b border-r border-cream/10 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 min-h-[320px] bg-gradient-to-br from-surface/28 via-background/92 to-background"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,222,201,0.1),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(26,61,93,0.38),transparent_44%)] opacity-90 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-accent/35 via-cream/10 to-transparent pointer-events-none"></div>

                  <div className="relative z-10">
                    <service.icon className="w-10 h-10 text-cream/10 group-hover:text-accent/40 transition-colors duration-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-3 text-cream">{service.title}</h3>
                    <p className="text-sm text-cream/40 leading-relaxed">{service.detail}</p>
                  </div>

                  <div className="relative z-10 mt-6 overflow-hidden h-5">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-accent uppercase text-xs font-bold tracking-widest transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                    >
                      Learn More <ArrowRight className="w-3 h-3 ml-2" />
                    </a>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
