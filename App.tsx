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
    <div className="relative w-full min-h-screen bg-background text-cream font-sans selection:bg-accent selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <Narrative />
        <Services />
        <Stats />
        <Conversion />
      </main>
      <Footer />
      
      {/* Background Noise/Texture - Subtle Grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[9999] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
};

export default App;