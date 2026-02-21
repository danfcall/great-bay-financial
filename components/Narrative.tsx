import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const Narrative: React.FC = () => {
  return (
    <section id="narrative" className="py-24 md:py-32 px-6 md:px-12 border-b border-cream/5 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">

          <div className="md:w-1/3 sticky top-32 h-fit">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cream leading-tight">
              The Great <span className="text-accent">Bay</span><br />Approach
            </h2>
          </div>

          <div className="md:w-2/3 space-y-16">

            {/* Solution Card */}
            <div className="relative p-8 md:p-12 border border-accent/20 bg-accent/5 max-w-2xl mx-auto">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent/20 text-accent flex items-center justify-center rounded-full border border-accent/50">
                <CheckCircle2 className="w-6 h-6" />
              </div>

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