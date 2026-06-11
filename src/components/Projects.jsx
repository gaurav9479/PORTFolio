import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'SkyTrace',
    tagline: 'Autonomous Drone Air Traffic Control System',
    description: 'Real-time fleet management for 50+ drones over IIT Kanpur campus — A* pathfinding, 4D airspace reservations, ML battery prediction, Socket.io telemetry.',
    metric: 'sub-100ms state sync',
    tech: ['Node.js', 'React', 'Socket.io', 'FastAPI', 'Python', 'MongoDB', 'Leaflet.js', 'Docker'],
    github: 'https://github.com/gaurav9479/IIT-Kanpur',
    demo: '',
    color: '#1a56db', // Blue
    colorClass: 'project-blue'
  },
  {
    title: 'Citadel of Scale',
    tagline: 'Multi-Tenant Civic SaaS Platform',
    description: 'Grievance redressal platform with organization-level subscription tiers, JWT RBAC across 3 portals, Redis caching, and SLA compliance tracking.',
    metric: '70% API speedup',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redis', 'Leaflet.js', 'Tailwind CSS'],
    github: 'https://github.com/gaurav9479/SAAS-THE-CitAdel-of-SCALE',
    demo: 'https://saas-the-cit-adel-of-scale.vercel.app/',
    color: '#8b5cf6', // Purple
    colorClass: 'project-purple'
  },
  {
    title: 'Glipkart',
    tagline: 'Production-Grade E-Commerce Platform',
    description: 'Full-stack e-commerce with Stripe payments, race condition prevention, dual-stock inventory model, and 7-KPI analytics dashboard.',
    metric: 'sub-40ms analytics',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Stripe API', 'Mongoose', 'Tailwind CSS'],
    github: 'https://github.com/gaurav9479/Ecommerce',
    demo: '',
    color: '#10b981', // Green
    colorClass: 'project-green'
  },
  {
    title: 'Prompt-DB',
    tagline: 'Real-Time Business & Analytics Command Center',
    description: 'Multi-tenant POS platform with a natural-language command interface, live SQL/pandas analytics, role hierarchy, and automated PDF invoicing.',
    metric: 'Instant SQL analytics',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'Python', 'WebSockets', 'SQLAlchemy', 'Pandas'],
    github: 'https://github.com/gaurav9479/PromptDB',
    demo: '',
    color: '#f97316', // Orange
    colorClass: 'project-orange'
  },
  {
    title: 'THE-RINGMASTER',
    tagline: 'AI-Assisted Travel Planning Platform',
    description: 'End-to-end full‑stack web app for AI-driven trip planning, discovery, booking, reviews, social travel stories, and admin moderation.',
    metric: 'Python Agent Itineraries',
    tech: ['React', 'Express.js', 'FastAPI', 'MongoDB', 'Docker', 'Python'],
    github: 'https://github.com/gaurav9479/THE-RINGMASTER',
    demo: '',
    color: '#ef4444', // Red
    colorClass: 'project-red'
  }
];

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.projects__card');

    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 3D tilt hover effect
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const angleX = (yc - y) / 15;
        const angleY = (x - xc) / 20;
        gsap.to(card, {
          rotateX: angleX,
          rotateY: angleY,
          transformPerspective: 1000,
          ease: 'power2.out',
          duration: 0.3
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          ease: 'power2.out',
          duration: 0.5
        });
      });
    });
  }, []);

  return (
    <section className="section projects" id="projects" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
        </div>

        <div className="projects__list">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`projects__card glass-card ${project.colorClass}`}
              style={{ '--project-accent': project.color }}
            >
              <div className="projects__card-header">
                <div className="projects__card-num">{String(idx + 1).padStart(2, '0')}</div>
                <div className="projects__card-info">
                  <div className="projects__card-title-row">
                    <h3 className="projects__card-title">{project.title}</h3>
                    <span className="projects__metric-badge">{project.metric}</span>
                  </div>
                  <p className="projects__card-tagline">{project.tagline}</p>
                </div>
              </div>

              <p className="projects__description">{project.description}</p>

              <div className="projects__card-footer">
                <div className="projects__tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="projects__links-row">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    GitHub
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      Live Demo
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
