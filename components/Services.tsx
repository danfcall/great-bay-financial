import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Our Expertise</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-cream">
            Great Bay <span className="text-outline">Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-cream/10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative border-b border-r border-cream/10 p-8 md:p-10 flex flex-col justify-between hover:bg-surface transition-all duration-500"
            >
              <div className="relative z-10">
                {/* Icon replaces number, using the same faint color as the old number */}
                <service.icon className="w-10 h-10 text-cream/10 group-hover:text-accent/40 transition-colors duration-500 mb-6" />
                <h3 className="text-2xl font-bold mb-3 text-cream">{service.title}</h3>
                <p className="text-sm text-cream/40">{service.detail}</p>
              </div>

              {/* "Learn More" only appears on hover */}
              <div className="relative z-10 mt-6 overflow-hidden h-5">
                <a
                  href="#contact"
                  className="inline-flex items-center text-accent uppercase text-xs font-bold tracking-widest transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                >
                  Learn More <ArrowRight className="w-3 h-3 ml-2" />
                </a>
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