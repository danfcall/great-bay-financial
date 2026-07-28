import React from 'react';

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
  sticky?: boolean;
  stickyClassName?: string;
  align?: 'left' | 'center';
  accentInline?: boolean;
}

const SectionIntro: React.FC<SectionIntroProps> = ({
  eyebrow,
  title,
  accent,
  description,
  sticky = false,
  stickyClassName = 'md:top-32',
  align = 'left',
  accentInline = false,
}) => {
  const alignmentClasses =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-start text-left';

  return (
    <div className={`${sticky ? `md:sticky h-fit ${stickyClassName}` : ''}`}>
      <div className={`flex max-w-md flex-col gap-6 ${alignmentClasses}`}>
        <div className="inline-flex items-center gap-4">
          <span className="h-px w-12 bg-accent/50"></span>
          <span className="font-sans text-accent/80 uppercase tracking-[0.32em] text-[0.6875rem] font-light">
            {eyebrow}
          </span>
        </div>

        <div className="space-y-5">
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-normal text-cream leading-[1.05] tracking-[-0.02em] text-balance">
            {accentInline ? (
              <span>
                {title}
                <span className="italic font-light text-accent/95">{accent}</span>
              </span>
            ) : (
              <>
                <span className="block">{title}</span>
                <span className="block italic font-light text-accent/95">{accent}</span>
              </>
            )}
          </h2>

          {description ? (
            <p className="max-w-md font-sans text-base md:text-lg font-light leading-[1.75] text-cream/65">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;
