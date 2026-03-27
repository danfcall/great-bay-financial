import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 px-6 md:px-12 border-t border-cream/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <a href="#" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}gb-logo.png`}
              alt="Great Bay Financial"
              className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>

        <p className="text-xs text-cream/30">
          &copy; {new Date().getFullYear()} Great Bay Financial. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
