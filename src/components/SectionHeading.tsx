import type { ReactNode } from 'react';

export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow"><span className="section-number">{number}</span> {label}</p><h2>{title}</h2></div>
      {children && <div className="section-heading-description">{children}</div>}
    </div>
  );
}
