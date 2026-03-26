import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-cream/10 bg-background/88 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="section-frame px-6 md:px-10">
        <div className="flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}gb-logo-1.png`}
              alt="Great Bay Financial"
              className="h-9 w-auto object-contain md:h-11"
            />
            <div className="hidden lg:block border-l border-cream/15 pl-4">
              <p className="grid-label text-[10px] text-accentSoft/80">Independent capital advisory</p>
              <p className="text-sm text-cream/70">Asset-backed lending and strategic finance</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 xl:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="grid-label text-[11px] text-cream/70 transition-colors duration-200 hover:text-accentSoft"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-accent/35 bg-accent/10 px-5 py-3 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/70 hover:bg-accent/16"
            >
              Request a consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 bg-canvas/80 text-cream md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-cream/10 bg-background/96 px-6 pb-8 pt-6 backdrop-blur-xl md:hidden">
          <div className="section-frame space-y-6">
            <p className="grid-label text-[11px] text-accentSoft/75">Navigate</p>
            <div className="space-y-4">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block font-display text-3xl leading-none text-cream"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-accent/35 bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-background"
              onClick={() => setMobileOpen(false)}
            >
              Start the conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
