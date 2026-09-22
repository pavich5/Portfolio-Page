import { skillCategories } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="section skills-section container" aria-label="Skills and technologies">
      <SectionHeading number="03" label="MY TOOLKIT" title={<>The right tools.<br />The whole picture.</>}><p>From the pixels you see to the systems you don’t. A toolkit built for the entire product.</p></SectionHeading>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <article className="skill-card" key={category.title}>
            <div className="skill-card-top"><category.icon size={25} strokeWidth={1.5} /><span className="mono">0{index + 1}</span></div>
            <h3>{category.title === 'Other' ? 'Tools & delivery' : category.title}</h3>
            <p>{['Interfaces that feel right.', 'Solid foundations that scale.', 'Data, thoughtfully structured.', 'From local to live.'][index]}</p>
            <ul className="skill-tags">{category.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="stats-strip">{[{ value: '3.5+', label: 'Years of experience' }, { value: '5+', label: 'Projects completed' }, { value: '10+', label: 'Technologies' }, { value: '2', label: 'Companies' }].map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
    </section>
  );
}
