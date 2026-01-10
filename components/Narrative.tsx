import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const Narrative: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 border-b border-cream/5 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          <div className="md:w-1/3 sticky top-32 h-fit">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cream">
              The <span className="text-accent">Gap</span> in Growth.
            </h2>
            <p className="text-cream/70 text-lg">
              Where financing breaks down.
            </p>
          </div>

          <div className="md:w-2/3 space-y-16">
            
            {/* Problem Card */}
            <div className="group relative p-8 md:p-12 border border-cream/5 bg-surface/50 hover:bg-surface transition-colors duration-500">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-900/40 text-red-400 flex items-center justify-center rounded-full border border-red-500/30">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-cream group-hover:text-red-300 transition-colors">The Problem</h3>
              <div className="text-lg text-cream/60 leading-relaxed space-y-6">
                <p>
                  Small businesses technically have access to capital—but rarely the right kind.
                </p>
                <ul className="space-y-3 list-disc pl-5 marker:text-red-400/50">
                  <li>Banks favor low-risk lending like commercial real estate and SBA loans, which are slow and bureaucratic.</li>
                  <li>Fintech loans move faster, but often come with punishing rates.</li>
                  <li>Vendor financing exists, but is limited to what dealers are set up to offer.</li>
                </ul>
                <p>
                  The market is fragmented—and most options force tradeoffs between speed, cost, and fit.
                </p>
              </div>
            </div>

            {/* Bridge Graphic (Simple CSS) */}
            <div className="h-16 flex items-center justify-center">
              <div className="w-0.5 h-full bg-gradient-to-b from-red-500/20 to-accent/40"></div>
            </div>

            {/* Solution Card */}
            <div className="group relative p-8 md:p-12 border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors duration-500">
               <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent/20 text-accent flex items-center justify-center rounded-full border border-accent/50">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-cream group-hover:text-accent transition-colors">The Great Bay Approach</h3>
              <div className="text-lg text-cream leading-relaxed space-y-6">
                <p>
                  We bring financial expertise and flexibility most small businesses don’t have access to.
                </p>
                <p>
                  With 40 years of industry experience and long-standing dealer and lender relationships, we structure creative equipment-backed financing others miss—or can’t execute quickly.
                </p>
                <p>
                  We combine capital access with financial analysis and guidance, helping businesses optimize decisions instead of guessing or settling.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;