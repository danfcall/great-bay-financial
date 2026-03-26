import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cream/8 px-6 py-10 md:px-10 md:py-12">
      <div className="section-frame flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <img
            src={`${import.meta.env.BASE_URL}gb-logo-1.png`}
            alt="Great Bay Financial"
            className="h-11 w-auto object-contain md:h-12"
          />
          <p className="mt-6 max-w-lg text-sm leading-7 text-mist">
            Great Bay Financial advises equipment-intensive and growth-minded businesses on capital strategy, lender positioning, and execution.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-12">
          <div>
            <p className="grid-label text-[10px] text-accentSoft/65">Navigate</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-cream/80">
              {NAV_LINKS.map((item) => (
                <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-accentSoft">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-cream/40">
            © {new Date().getFullYear()} Great Bay Financial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
