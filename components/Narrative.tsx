import React from 'react';
import { ArrowUpRight, ShieldCheck, TimerReset } from 'lucide-react';

const principles = [
  {
    title: 'Strategic before transactional',
    description: 'We pressure-test the capital plan, lender fit, and operating implications before the process starts.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast where timing matters',
    description: 'Our process is built for live opportunities, tight close windows, and lenders that need decisive guidance.',
    icon: TimerReset,
  },
  {
    title: 'Designed around the business',
    description: 'We shape structures that align with production cycles, asset lives, and management priorities.',
    icon: ArrowUpRight,
  },
];

const Narrative: React.FC = () => {
  return (
    <section id="narrative" className="border-b border-cream/8 px-6 py-20 md:px-10 md:py-28">
      <div className="section-frame grid gap-14 xl:grid-cols-[340px_minmax(0,1fr)]">
        <div className="xl:sticky xl:top-28 xl:h-fit">
          <div className="eyebrow">How Great Bay works</div>
          <h2 className="mt-7 font-display text-[clamp(2.7rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.04em] text-white">
            Advisory discipline where capital decisions carry operational consequences.
          </h2>
        </div>

        <div className="space-y-8">
          <div className="panel rounded-[2rem] p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="grid-label text-[11px] text-accentSoft/70">What clients are navigating</p>
                <div className="mt-5 space-y-5 text-lg leading-8 text-mist">
                  <p>
                    A strong business can still lose time and leverage when the financing process is mismatched to the asset, timeline, or lender appetite.
                  </p>
                  <p>
                    We step in where management teams need more than introductions. We build the story, shape the structure, and run a process that creates confidence on both sides of the table.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-cream/10 bg-white/[0.03] p-6">
                <p className="grid-label text-[11px] text-accentSoft/70">What that means in practice</p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-cream/82">
                  <li>Capital-stack guidance before commitments are made</li>
                  <li>Lender targeting based on asset fit and execution style</li>
                  <li>Clear packaging of financials, use of proceeds, and collateral story</li>
                  <li>Senior involvement from first meeting through closing coordination</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="panel rounded-[1.8rem] p-6">
                <principle.icon className="h-9 w-9 text-accent" />
                <h3 className="mt-6 font-display text-3xl leading-none text-white">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-mist">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
