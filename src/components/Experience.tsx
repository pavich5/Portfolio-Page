import { ArrowUpRight } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="experience-section section" aria-label="Work experience">
      <div className="container">
        <SectionHeading number="02" label="THE JOURNEY" title={<>Good products.<br />Great teams.</>}>
          <p>Product-focused engineering across healthcare, insurance, AI, and modern SaaS.</p>
          <a href="/assets/antonio-pavic-cv.pdf" download="Antonio-Pavic-CV.pdf" className="text-link">Get the full résumé <ArrowUpRight size={16} /></a>
        </SectionHeading>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-row" key={experience.company}>
              <div className="experience-period"><span className={`timeline-dot ${index === 0 ? 'current' : ''}`} /><span className="mono">{experience.period}</span>{index === 0 && <span className="current-label">CURRENT</span>}</div>
              <div className="experience-company"><h3>{experience.company}</h3><p>{experience.role}</p><div className="experience-technologies">{(index === 0 ? ['Rust', 'React', 'Next.js'] : ['Next.js', 'NestJS', 'PostgreSQL']).map((tech) => <span key={tech}>{tech}</span>)}</div></div>
              <div className="experience-description"><p>{experience.description}</p><ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
