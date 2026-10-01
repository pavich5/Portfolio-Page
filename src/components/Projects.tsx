import { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { projects } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

const projectInfo: Record<string, { category: string; summary: string }> = {
  'Smart Termin': { category: 'Web & SaaS', summary: 'A React and MySQL booking platform I built for beauty professionals, with scheduling, client management, and analytics.' },
  'Globetrotter': { category: 'Web & SaaS', summary: 'A full-stack travel platform I built with curated trips, Clerk authentication, Stripe payments, and an AI assistant.' },
  'Moj Prevoz': { category: 'Mobile', summary: 'A React Native ride-sharing app I built with live messaging, location sharing, and a C# backend deployed on Azure.' },
  'Quarzo Life': { category: 'Web & SaaS', summary: 'French life-insurance workflows spanning settlement, premium scheduling, and secure financial-data handling.' },
  'Pabau': { category: 'Web & SaaS', summary: 'Healthcare platform work focused on PostgreSQL performance, clinic-report exports, and automated testing.' },
  'Cockpit': { category: 'AI', summary: 'AI meeting intelligence work spanning GPT Playbooks, transcripts, React migration, and real-time updates.' },
  'AP Motorworks': { category: 'Web & SaaS', summary: 'A React and TypeScript Porsche 911 concept showroom with model comparisons and a shareable configurator.' },
  'GitHub': { category: 'Open source', summary: 'More of what I’m building: open-source projects, experiments, and code worth sharing.' },
};
const work = projects;
const filters = ['All work', 'Web & SaaS', 'Mobile', 'AI', 'Open source'];

export function Projects() {
  const [filter, setFilter] = useState('All work');
  const visibleProjects = work.filter((project) => filter === 'All work' || projectInfo[project.title].category === filter);
  return (
    <section id="projects" className="section projects-section container" aria-label="Selected work">
      <SectionHeading number="01" label="SELECTED WORK" title={<>Built to make<br />a difference<span className="accent-period">.</span></>}>
        <p>A selection of personal products and team contributions. Real problems, thoughtful solutions.</p>
      </SectionHeading>
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'filter active' : 'filter'} aria-pressed={filter === item} aria-controls="project-grid">{item}{item === 'All work' && <span aria-hidden="true">{work.length.toString().padStart(2, '0')}</span>}</button>)}
        </div>
        <span className="mono project-count" role="status">{visibleProjects.length.toString().padStart(2, '0')} PROJECTS</span>
      </div>
      <div id="project-grid" className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <a className="project-image-link" href={project.links[0].url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}>
              <img
                src={project.image.replace(/\.[^.]+$/, '-1440.webp')}
                srcSet={`${project.image.replace(/\.[^.]+$/, '-720.webp')} 720w, ${project.image.replace(/\.[^.]+$/, '-1440.webp')} 1440w`}
                sizes="(max-width: 360px) calc(100vw - 32px), (max-width: 600px) calc(100vw - 40px), (max-width: 800px) calc((100vw - 76px) / 2), (max-width: 1023px) calc((100vw - 100px) / 2), (max-width: 1100px) calc((100vw - 132px) / 4), (max-width: 1392px) calc((100vw - 172px) / 4), 305px"
                alt={`${project.title} — ${project.subtitle}`}
                loading="lazy"
                decoding="async"
                width="1536"
                height="1024"
              />
              <span className="project-category">{projectInfo[project.title].category}</span>
              <span className="project-image-arrow"><ArrowUpRight size={21} /></span>
            </a>
            <div className="project-title-row"><h3>{project.title}</h3><span className="mono project-index">/{(work.indexOf(project) + 1).toString().padStart(2, '0')}</span></div>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-summary">{projectInfo[project.title].summary}</p>
            <details className="project-details">
              <summary>About the project <Plus size={16} /></summary>
              <div className="project-details-content"><p>{project.description}</p><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
            </details>
            <div className="project-links">{project.links.map((link) => <a href={link.url} key={link.url} target="_blank" rel="noopener noreferrer"><link.icon size={14} />{link.label}<ArrowUpRight size={13} /></a>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
