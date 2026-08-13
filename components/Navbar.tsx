import React from 'react';

/* A single-screen page has nowhere to navigate to: the form is already in
   view, so the bar is reduced to the mark. It sits absolute rather than fixed
   so that on the phone — the one place this page scrolls — it moves away with
   the rest of the content instead of covering the fields. */
/* Padding outside the max width, max width inside — the same nesting the hero
   uses, so the mark and the headline share one left edge instead of drifting
   apart once the viewport passes the 7xl container. */
const Navbar: React.FC = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-6 py-7 md:px-12 md:py-5">
      <div className="mx-auto flex w-full max-w-7xl items-center">
        {/* The lockup carries ~14% of its own width as blank space before the
            straight stem of the F begins. Pulling the link back by that inset
            puts the stem — not the SVG's box — on the headline's edge, and
            leaves the gull's tail to overhang as the flourish it is.

            The pull is a share of the rendered width, so it is paired to the
            height below: 14.29% x 1.691 x height. Change one and the mark
            slides off the headline's edge. */}
        <a href="#" className="group -ml-[13.5px] flex items-center md:-ml-[18.6px]">
          <img
            src={`${import.meta.env.BASE_URL}great-bay-full-logo-foam.svg`}
            alt="Great Bay Financial"
            className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 md:h-[4.8rem]"
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
