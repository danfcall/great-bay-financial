import React from 'react';

/* A single-screen page has nowhere to navigate to: the form is already in
   view, so the bar is reduced to the mark. It sits absolute rather than fixed
   so that on the phone — the one place this page scrolls — it moves away with
   the rest of the content instead of covering the fields. */
const Navbar: React.FC = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 py-7 md:py-5">
      <div className="mx-auto flex max-w-7xl items-center px-6 md:px-12">
        <a href="#" className="group flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}great-bay-full-logo-foam.svg`}
            alt="Great Bay Financial"
            className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 md:h-16"
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
