import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OpenSource.css';
import { animateSectionHeader } from '../utils/gsapAnimations';

gsap.registerPlugin(ScrollTrigger);

const repos = [
  {
    name: 'opencodeiiita/Subsentry',
    desc: 'Subscription management dashboard contributed during OpenCode\'25, IIIT Allahabad.',
    tag: 'TypeScript',
    stats: '⭐ 13 Stars · 🍴 81 Forks',
    link: 'https://github.com/opencodeiiita/Subsentry'
  },
  {
    name: 'opencodeiiita/GoGit-5.0',
    desc: 'Interactive Git learning resource contributed during the open-source program.',
    tag: 'Documentation',
    stats: '⭐ 8 Stars · 🍴 90 Forks',
    link: 'https://github.com/opencodeiiita/GoGit-5.0'
  },
  {
    name: 'opencodeiiita/CampusOR',
    desc: 'Campus Online Queue & Reservation System. Virtual queue ecosystem with live WebSocket updates and ML service wait time predictions.',
    tag: 'Next.js & Express & FastAPI',
    stats: 'Smart Virtual Queues',
    link: 'https://github.com/opencodeiiita/CampusOR'
  },
  {
    name: 'opencodeiiita/Ba-Effe',
    desc: 'Design repository for IIIT Allahabad cultural fest (Effervescence\'25). Focuses on branding, UI/UX, and vintage 70s-80s aesthetics.',
    tag: 'UI/UX & Design',
    stats: 'IIIT Allahabad Fest',
    link: 'https://github.com/opencodeiiita/Ba-Effe'
  },
  {
    name: 'opencodeiiita/CareerCraft',
    desc: 'AI-powered resume optimizer, Applicant Tracking System (ATS) evaluator, and cover letter generator using FastAPI & NLP.',
    tag: 'Next.js & FastAPI',
    stats: 'ATS Resume Assistant',
    link: 'https://github.com/opencodeiiita/CareerCraft'
  },
  {
    name: 'opencodeiiita/Cyber_lens',
    desc: 'Threat Intelligence aggregator checking domains/IPs/URLs against public security feeds for unified risk assessments.',
    tag: 'React & Express & MongoDB',
    stats: 'Threat Intelligence',
    link: 'https://github.com/opencodeiiita/Cyber_lens'
  }
];

export default function OpenSource() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    animateSectionHeader(el);

    // 3D book-page fold: alternating cards fold in from left or right Y-axis
    const items = el.querySelectorAll('.opensource__card');
    items.forEach((item, i) => {
      const fromLeft = i % 2 === 0;
      gsap.fromTo(item,
        {
          opacity: 0,
          rotateY: fromLeft ? -70 : 70,
          transformPerspective: 900,
          transformOrigin: fromLeft ? 'left center' : 'right center',
          x: fromLeft ? -30 : 30,
        },
        {
          opacity: 1,
          rotateY: 0,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' }
        }
      );
    });
  }, []);

  return (
    <section className="section opensource" id="opensource" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contributions</span>
          <h2 className="section-title">Open Source Highlights</h2>
          <div className="section-divider" />
        </div>

        <div className="opensource__grid">
          {repos.map((repo, i) => (
            <div key={i} className="opensource__card glass-card">
              <div className="opensource__card-header">
                <span className="opensource__repo-icon">📁</span>
                <h3 className="opensource__repo-name">{repo.name}</h3>
              </div>
              <p className="opensource__repo-desc">{repo.desc}</p>
              <div className="opensource__meta">
                <span className="opensource__tag">{repo.tag}</span>
                <div className="opensource__stats">
                  <span>{repo.stats}</span>
                </div>
              </div>
              <a href={repo.link} target="_blank" rel="noopener noreferrer" className="opensource__link">
                View Repository ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
