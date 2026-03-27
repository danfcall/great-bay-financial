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
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-12 bg-accent/60"></span>
          <span className="text-accent uppercase tracking-[0.38em] text-xs font-semibold">
            {eyebrow}
          </span>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95]">
            {accentInline ? (
              <span>
                {title}
                <span className="text-outline-accent italic">{accent}</span>
              </span>
            ) : (
              <>
                <span className="block">{title}</span>
                <span className="block text-outline-accent italic">{accent}</span>
              </>
            )}
          </h2>

          {description ? (
            <p className="max-w-md text-base md:text-lg leading-relaxed text-cream/60">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;
