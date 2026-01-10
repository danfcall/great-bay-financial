import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Our Expertise</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-cream">
            Great Bay <span className="text-outline">Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-cream/10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative border-b border-r border-cream/10 p-8 md:p-12 min-h-[400px] flex flex-col justify-between hover:bg-surface transition-all duration-500"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="relative z-10">
                <span className="text-5xl font-display font-bold text-cream/5 group-hover:text-accent/20 transition-colors duration-500 mb-8 block">
                  {service.id}
                </span>
                <service.icon className="w-10 h-10 text-cream/80 mb-6 group-hover:text-accent transition-colors duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-cream">{service.title}</h3>
                <p className="text-cream/60 group-hover:text-cream transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 overflow-hidden">
                <div className={`transform transition-all duration-500 ease-out ${activeService === service.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <p className="text-sm text-cream/50 mb-4">{service.detail}</p>
                  <a href="#contact" className="inline-flex items-center text-accent hover:underline decoration-1 underline-offset-4 uppercase text-xs font-bold tracking-widest">
                    Learn More <ArrowRight className="w-3 h-3 ml-2" />
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;