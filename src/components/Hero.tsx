import { ArrowDown, ArrowDownRight, ArrowUpRight, Code2, Download, MapPin } from 'lucide-react';

function EngineeringGlobe() {
  return (
    <div className="engineering-art" aria-hidden="true">
      <div className="art-topline mono"><span><span className="status-dot" /> ENGINEER. BUILDER. PROBLEM-SOLVER.</span><span>01 / AP</span></div>
      <div className="art-grid" />
      <svg className="globe" viewBox="0 0 480 480" fill="none">
        <g className="globe-wire" transform="rotate(-20 240 240)">
          <circle cx="240" cy="240" r="155" />
          {[36, 76, 118].map((radius) => <ellipse key={radius} cx="240" cy="240" rx={radius} ry="155" />)}
          {[36, 76, 118].map((radius) => <ellipse key={radius} cx="240" cy="240" rx="155" ry={radius} />)}
          <path d="M85 240h310M240 85v310" />
        </g>
        <g className="globe-orbit" transform="rotate(-34 240 240)">
          <ellipse cx="240" cy="240" rx="224" ry="75" />
          <circle cx="16" cy="240" r="7" />
          <circle cx="464" cy="240" r="5" />
        </g>
        <circle className="globe-core" cx="240" cy="240" r="58" />
        <text className="globe-monogram" x="240" y="253" textAnchor="middle">&lt;ap /&gt;</text>
      </svg>
      <span className="art-tag art-tag-frontend"><Code2 size={15} /> Frontend</span>
      <span className="art-tag art-tag-backend"><span className="mini-dot" /> Backend</span>
      <span className="art-tag art-tag-mobile">Mobile + AI <ArrowUpRight size={14} /></span>
      <div className="art-bottomline"><span className="mono">FROM THE FIRST IDEA<br />TO THE LAST DETAIL.</span><span className="art-asterisk">✳</span></div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow hero-intro"><span className="small-line" /> HELLO, I’M ANTONIO PAVIC</p>
          <h1 id="hero-title">Thoughtful code.<br />Meaningful<br /><span className="highlight-word">experiences<svg viewBox="0 0 600 22" preserveAspectRatio="none" aria-hidden="true"><path d="M3 16Q270 0 596 10" /></svg></span><span className="accent-period">.</span></h1>
          <p className="hero-role">Full-Stack Software Engineer</p>
          <p className="hero-description">I turn ideas into polished, reliable products. From the interface to the infrastructure — built with care, ready for the real world.</p>
          <div className="hero-buttons">
            <a href="#projects" className="button button-primary">Explore my work <ArrowDownRight size={19} /></a>
            <a href="/assets/antonio-pavic-cv.pdf" download="Antonio-Pavic-CV.pdf" className="button button-text">Download CV <Download size={17} /></a>
          </div>
          <div className="hero-location"><MapPin size={14} /><span>Based in North Macedonia</span><span className="location-divider" /><span>Building for everywhere.</span></div>
        </div>
        <EngineeringGlobe />
      </div>
      <div className="hero-bottom">
        <span className="mono hero-stack-label">IDEAS INTO REALITY, WITH</span>
        <div className="hero-stack"><span>React</span><span>Next.js</span><span>TypeScript</span><span>Rust</span><span>Node.js</span><span>PostgreSQL</span></div>
        <a href="#projects" className="scroll-link" aria-label="Scroll to selected work"><ArrowDown size={17} /></a>
      </div>
    </section>
  );
}
