import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates a section header (.section-label, .section-title, .section-divider)
 * with a blur + slide-up reveal tied to ScrollTrigger.
 */
export function animateSectionHeader(el) {
  const label = el.querySelector('.section-label');
  const title = el.querySelector('.section-title');
  const divider = el.querySelector('.section-divider');
  const st = { trigger: el, start: 'top 82%', toggleActions: 'play none none none' };

  if (label) {
    gsap.fromTo(label,
      { opacity: 0, y: 18, letterSpacing: '8px' },
      { opacity: 1, y: 0, letterSpacing: '3px', duration: 0.7, ease: 'power3.out', scrollTrigger: st }
    );
  }

  if (title) {
    gsap.fromTo(title,
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, delay: 0.12, ease: 'power3.out', scrollTrigger: st }
    );
  }

  if (divider) {
    gsap.fromTo(divider,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.7, delay: 0.35, ease: 'power2.inOut', transformOrigin: 'center', scrollTrigger: st }
    );
  }
}
