import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

export default function Hero() {
  const containerRef = useRef(null);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // GSAP entrance timeline
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(el.querySelector('.hero__badge'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
    )
    .fromTo(el.querySelector('.hero__pretitle'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.6'
    )
    .fromTo(el.querySelector('.hero__name'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.6'
    )
    .fromTo(el.querySelector('.hero__subtitle'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.6'
    )
    .fromTo(el.querySelectorAll('.hero__btn'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
      '-=0.5'
    )
    .fromTo(el.querySelectorAll('.hero__stat'),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      '-=0.4'
    )
    .fromTo(el.querySelector('.hero__scroll'),
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.3'
    );

    // Magnetic buttons effect
    const buttons = el.querySelectorAll('.hero__btn, .hero__badge');
    buttons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });
  }, []);

  return (
    <section className="hero" id="hero" ref={containerRef}>
      <div className="hero__grid" />
      <div className="hero__glow" />

      <div className="hero__content container">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for SDE Internships
        </div>

        <div className="hero__pretitle">Gaurav Prajapati</div>

        <h1 className="hero__name">
          I build real-time systems
          <br />
          <span className="hero__name-outline">and full-stack products</span>
        </h1>

        <p className="hero__subtitle">
          MERN Stack • Socket.io • FastAPI • AWS • 527 LC Solved
        </p>

        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={() => scrollTo('#projects')}>
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <a
            href="/resume.pdf"
            download
            className="hero__btn hero__btn--secondary"
            style={{ textDecoration: 'none' }}
          >
            Download Resume
          </a>
          <button className="hero__btn hero__btn--tertiary" onClick={() => scrollTo('#contact')}>
            Contact Me
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">527</span>
            <span className="hero__stat-label">LeetCode Solved</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">Rank 46</span>
            <span className="hero__stat-label">OpenCode'25</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">2nd Year</span>
            <span className="hero__stat-label">MNNIT Allahabad</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
