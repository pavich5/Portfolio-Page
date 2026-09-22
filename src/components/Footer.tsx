import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer container">
      <a href="#home" className="wordmark" aria-label="Antonio Pavic, home">antonio<span className="wordmark-dot">.</span><span className="wordmark-surname">pavic</span></a>
      <p>© {new Date().getFullYear()} Antonio Pavic <span>·</span> Built with care.</p>
      <a href="#home" className="back-top">Back to top <ArrowUp size={16} /></a>
    </footer>
  );
}
