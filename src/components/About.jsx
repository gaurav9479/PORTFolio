import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import { animateSectionHeader } from '../utils/gsapAnimations';

gsap.registerPlugin(ScrollTrigger);

const SKILL_CATEGORIES = [
  { category: 'Languages', skills: ['C++', 'JavaScript', 'Python', 'SQL'] },
  { category: 'Frontend', skills: ['React.js', 'Tailwind CSS', 'Leaflet.js', 'Socket.io'] },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'FastAPI'] },
  { category: 'Databases', skills: ['MongoDB', 'MySQL', 'Redis (Upstash)'] },
  { category: 'Cloud & DevOps', skills: ['Docker', 'AWS EC2', 'Docker Compose'] },
  { category: 'Algorithms', skills: ['A* Pathfinding', 'Haversine Formula', '3D Interpolation'] }
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Animated section header: blur + blur-reveal
    animateSectionHeader(el);

    // Word-by-word clip reveal for intro paragraph
    const intro = el.querySelector('.about__intro');
    if (intro) {
      const words = intro.textContent.split(' ');
      intro.innerHTML = words
        .map(w => `<span class="gsap-word-outer"><span class="gsap-word-inner">${w}</span></span>`)
        .join(' ');

      gsap.fromTo(intro.querySelectorAll('.gsap-word-inner'),
        { y: '115%' },
        {
          y: '0%',
          duration: 0.65,
          stagger: 0.022,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%', toggleActions: 'play none none none' }
        }
      );
    }

    // Social links fade up after words
    const links = el.querySelector('.about__links');
    if (links) {
      gsap.fromTo(links,
        { opacity: 0, y: 22, filter: 'blur(4px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration: 0.7, delay: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%', toggleActions: 'play none none none' }
        }
      );
    }

    // Alternating left/right entrance for skill cards (every other card mirrors)
    const skillCards = el.querySelectorAll('.about__skill-card');
    skillCards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, x: i % 2 === 0 ? -55 : 55, scale: 0.92 },
        {
          opacity: 1, x: 0, scale: 1,
          duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
        }
      );
    });
  }, []);

  return (
    <section className="section about" id="about" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me & Skills</h2>
          <div className="section-divider" />
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p className="about__intro about__animate-text">
              I'm a 3rd-year Materials Engineering student at MNNIT Allahabad who builds full-stack products seriously.
              I've shipped SkyTrace — a real-time drone ATC system — and Glipkart — a production-grade e-commerce platform with live Stripe payments.
              I care about systems that work at scale, code that handles concurrency correctly, and problems that are genuinely hard to solve.
            </p>

            <div className="about__links about__animate-text">
              <a href="https://github.com/gaurav9479" target="_blank" rel="noopener noreferrer" className="about__social">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/gaurav-prajapati-5194902a3/" target="_blank" rel="noopener noreferrer" className="about__social">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="mailto:gauravphb@gmail.com" className="about__social">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Email
              </a>
            </div>
          </div>

          <div className="about__skills-section about__cards">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i} className="about__skill-card glass-card">
                <h3 className="about__skill-title">{cat.category}</h3>
                <div className="about__skill-tags">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
