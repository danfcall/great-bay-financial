import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'py-4 bg-background/85 backdrop-blur-md border-cream/10' : 'py-8 bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={`${import.meta.env.BASE_URL}gb-logo.png`}
            alt="Great Bay Financial"
            className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </a>

        {/* CTA. The page is a single scroll now, so the only nav target is
            the form; a lone "About us" link had nowhere left to point. */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="group relative flex items-center gap-3 px-7 py-3 border border-cream/25 font-sans text-[0.6875rem] uppercase tracking-[0.24em] text-cream/85 overflow-hidden transition-colors duration-500 hover:border-accent/50 hover:text-accent"
          >
            <span className="relative">Contact Us</span>
            <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-500" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-cream/10 p-6 md:hidden flex flex-col gap-6">
          <a
            href="#contact"
            className="text-2xl font-display font-normal tracking-[-0.01em] text-cream hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
