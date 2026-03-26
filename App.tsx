import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Services from './components/Services';
import Stats from './components/Stats';
import Conversion from './components/Conversion';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="page-shell w-full min-h-screen bg-background text-cream font-sans selection:bg-accent selection:text-background">
      <div className="hero-orbit" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(215,189,132,0.16),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[24rem] z-0 h-[36rem] bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.02),transparent)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Narrative />
        <Services />
        <Stats />
        <Conversion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
