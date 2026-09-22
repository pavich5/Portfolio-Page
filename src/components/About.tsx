import { ArrowUpRight, Globe2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="about-image"><img src="/assets/about-builder-1440.webp" srcSet="/assets/about-builder-720.webp 720w, /assets/about-builder-1440.webp 1440w" sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1392px) 45vw, 598px" alt="Sculptural code, mobile, and database modules connected in charcoal, ivory, and olive green" loading="lazy" decoding="async" width="1536" height="1024" /></div>
          <div className="about-note"><span className="mono">THE MINDSET</span><p>Stay curious.<br />Build with purpose<span>.</span></p><ArrowUpRight size={32} strokeWidth={1.4} /></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span className="section-number">04</span> BEYOND THE CODE</p>
          <h2 id="about-title">An engineer.<br />Always a builder.</h2>
          <p>I’m <strong>Antonio</strong>, a full-stack software engineer from <strong>North Macedonia</strong>. I enjoy building complete products: shaping the user experience, designing reliable APIs, connecting data, and bringing features all the way to production.</p>
          <p>My work spans frontend, backend, mobile, and AI-driven functionality. I’m especially interested in <strong>Rust, system design, and automation</strong> — and the engineering decisions that make products easier to maintain as they grow.</p>
          <div className="about-traits">{['Problem-solver', 'Fast learner', 'Communicative', 'Collaborative', 'Detail-oriented'].map((trait) => <span key={trait}>{trait}</span>)}</div>
          <div className="languages"><Globe2 size={18} /><span>Macedonian <small>Native</small></span><span>English <small>Fluent</small></span></div>
        </div>
      </div>
    </section>
  );
}
