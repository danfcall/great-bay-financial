import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050B14] py-16 px-6 md:px-12 border-t border-cream/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <div className="font-display font-bold text-2xl mb-6 text-cream">GREAT BAY</div>
          <p className="text-cream/50 max-w-xs text-sm leading-relaxed">
            Connecting vision with capital. Asset-backed lending and equipment financing for the modern economy.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-cream hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-cream hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-cream hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <h4 className="text-cream font-bold uppercase text-xs tracking-widest mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li><a href="#" className="hover:text-accent transition-colors">Capital Advisory</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Loan Brokerage</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Vendor Finance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cream font-bold uppercase text-xs tracking-widest mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between text-xs text-cream/40">
        <p>&copy; {new Date().getFullYear()} Great Bay Financial. All rights reserved.</p>
        <p>Designed with precision.</p>
      </div>
    </footer>
  );
};

export default Footer;