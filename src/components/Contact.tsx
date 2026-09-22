import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin } from 'lucide-react';

const email = 'antoniopavic.dev@gmail.com';

export function Contact() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
    resetTimer.current = setTimeout(() => setCopyStatus('idle'), 3500);
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-top"><p className="eyebrow"><span className="section-number">05</span> NEXT STARTS WITH A CONVERSATION</p><span className="contact-star" aria-hidden="true">✳</span></div>
        <div className="contact-main"><h2 id="contact-title">Have something<br />in mind? <span>Let’s build it.</span></h2><a className="contact-arrow" href={`mailto:${email}`} aria-label="Email Antonio to discuss a project"><ArrowUpRight strokeWidth={1} /></a></div>
        <div className="contact-bottom">
          <div><p>Have a role, project, or collaboration in mind?<br />I’d be happy to hear from you.</p><div className="email-row"><a href={`mailto:${email}`}>{email}</a><button className="copy-button" onClick={copyEmail} aria-label={copyStatus === 'copied' ? 'Email address copied' : 'Copy email address'}>{copyStatus === 'copied' ? <Check size={17} /> : <Copy size={17} />}</button></div><p className="copy-status" role="status">{copyStatus === 'copied' ? 'Email copied to clipboard.' : copyStatus === 'error' ? 'Select the email address to copy it, or click to open your email app.' : ''}</p></div>
          <div className="contact-socials"><a href="https://github.com/pavich5" target="_blank" rel="noopener noreferrer"><Github size={17} />GitHub<ArrowUpRight size={17} /></a><a href="https://www.linkedin.com/in/antonio-pavic/" target="_blank" rel="noopener noreferrer"><Linkedin size={17} />LinkedIn<ArrowUpRight size={17} /></a></div>
        </div>
      </div>
    </section>
  );
}
