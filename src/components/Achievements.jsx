import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Achievements.css';

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    role: 'Core Technical Coordinator',
    organization: 'AWS Cloud Club, MNNIT Allahabad',
    period: 'Feb 2026 – Present',
    desc: 'Cloud workshops and campus technical branding',
    icon: '☁️'
  },
  {
    role: 'Web Developer',
    organization: 'MechaPef, MNNIT Allahabad',
    period: 'Mar 2026 – Present',
    desc: 'Built MERN-stack portal for the society',
    icon: '⚙️'
  },
  {
    role: "OpenCode'25 Contributor",
    organization: 'IIIT Allahabad',
    period: 'Jan 2026',
    desc: 'Rank 46/1000 — high-impact open source contributions',
    icon: '🚀'
  }
];

export default function Achievements() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll('.achievements__item');
    gsap.fromTo(items,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section className="section achievements" id="experience" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Roles</span>
          <h2 className="section-title">Experience & Positions</h2>
          <div className="section-divider" />
        </div>

        <div className="achievements__timeline">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="achievements__item glass-card"
            >
              <div className="achievements__icon">{item.icon}</div>
              <div className="achievements__content">
                <div className="achievements__top">
                  <div>
                    <h3 className="achievements__title">{item.role}</h3>
                    <h4 className="achievements__org">{item.organization}</h4>
                  </div>
                  <span className="achievements__period">{item.period}</span>
                </div>
                <p className="achievements__desc">"{item.desc}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
