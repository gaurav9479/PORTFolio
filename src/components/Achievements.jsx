import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Achievements.css';
import { animateSectionHeader } from '../utils/gsapAnimations';

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

    animateSectionHeader(el);

    // Scrub-driven line draw: the vertical timeline line draws itself as user scrolls
    const timeline = el.querySelector('.achievements__timeline');
    const lineTrack = el.querySelector('.achievements__line-track');
    if (lineTrack && timeline) {
      gsap.fromTo(lineTrack,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: timeline,
            start: 'top 78%',
            end: 'bottom 65%',
            scrub: 1.2,
          }
        }
      );
    }

    // Elastic bounce entrance per item — slight CCW tilt → straight
    const items = el.querySelectorAll('.achievements__item');
    items.forEach((item, i) => {
      // Icon: spin in
      const icon = item.querySelector('.achievements__icon');
      if (icon) {
        gsap.fromTo(icon,
          { scale: 0, rotation: -180, opacity: 0 },
          {
            scale: 1, rotation: 0, opacity: 1,
            duration: 0.7, delay: i * 0.15 + 0.2, ease: 'back.out(2)',
            scrollTrigger: { trigger: timeline, start: 'top 78%', toggleActions: 'play none none none' }
          }
        );
      }

      gsap.fromTo(item,
        { opacity: 0, x: -55, rotation: -3, transformOrigin: 'left center' },
        {
          opacity: 1, x: 0, rotation: 0,
          duration: 0.85,
          delay: i * 0.15,
          ease: 'elastic.out(1, 0.75)',
          scrollTrigger: { trigger: timeline, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
    });
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
          {/* Animated vertical line that draws as you scroll */}
          <div className="achievements__line-track" />

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
