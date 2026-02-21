import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 px-6 md:px-12 border-t border-cream/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">

        {/* Logo + tagline + socials */}
        <div>
          <a href="#" className="flex items-center mb-5">
            <img
              src={`${import.meta.env.BASE_URL}gb-logo.png`}
              alt="Great Bay Financial"
              className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <p className="text-cream/50 max-w-xs text-sm leading-relaxed mb-5">
            Connecting vision with capital. Asset-backed lending and equipment financing for ambitious companies.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-cream/50 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-cream/50 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-cream/50 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Copyright bottom-right */}
        <p className="text-xs text-cream/30">
          &copy; {new Date().getFullYear()} Great Bay Financial. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;