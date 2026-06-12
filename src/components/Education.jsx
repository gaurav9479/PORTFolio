import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Education.css';
import { animateSectionHeader } from '../utils/gsapAnimations';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'Bachelors of Technology',
    field: 'Materials Engineering',
    institution: 'Motilal Nehru National Institute of Technology Allahabad',
    period: '2024 – 2028',
    icon: '🎓',
    current: true,
  },
  {
    degree: 'Class XII (CBSE)',
    field: 'Science',
    institution: 'Kendriya Vidyalaya',
    period: '2023',
    icon: '📘',
  },
  {
    degree: 'Class X (CBSE)',
    field: '',
    institution: 'Kendriya Vidyalaya',
    period: '2021',
    icon: '📗',
  },
];

export default function Education() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    animateSectionHeader(el);

    // Each card slides in from right with a 3D perspective tilt
    const cards = el.querySelectorAll('.education__card');
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, x: 80, rotateY: 18, transformPerspective: 600, filter: 'blur(4px)' },
        {
          opacity: 1, x: 0, rotateY: 0, filter: 'blur(0px)',
          duration: 0.85,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
        }
      );
    });
  }, []);

  return (
    <section className="section education" id="education" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </div>

        <div className="education__timeline">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`education__card glass-card ${edu.current ? 'education__card--current' : ''}`}
            >
              <div className="education__icon">{edu.icon}</div>
              <div className="education__info">
                <div className="education__top">
                  <h3 className="education__degree">
                    {edu.degree}
                    {edu.field && <span className="education__field"> — {edu.field}</span>}
                  </h3>
                  <span className="education__period">
                    {edu.current && <span className="education__current-badge">Currently Pursuing</span>}
                    {edu.period}
                  </span>
                </div>
                <p className="education__institution">{edu.institution}</p>
                {edu.stats && <p className="education__stats">{edu.stats}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
