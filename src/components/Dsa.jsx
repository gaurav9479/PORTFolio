import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Dsa.css';
import { animateSectionHeader } from '../utils/gsapAnimations';

gsap.registerPlugin(ScrollTrigger);

export default function Dsa() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Animated section header
    animateSectionHeader(el);

    // 3D flip entrance: cards fold in from above on the X axis
    const cards = el.querySelectorAll('.dsa__card');
    gsap.fromTo(cards,
      { opacity: 0, rotateX: 85, transformPerspective: 700, y: 40 },
      {
        opacity: 1,
        rotateX: 0,
        y: 0,
        duration: 1,
        stagger: 0.18,
        ease: 'back.out(1.6)',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Number counting animation with glow pulse on completion
    const countElements = el.querySelectorAll('[data-target-count]');
    countElements.forEach((element) => {
      const target = parseFloat(element.getAttribute('data-target-count'));
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        onUpdate: () => {
          if (Number.isInteger(target)) {
            element.textContent = Math.floor(obj.val);
          } else {
            element.textContent = obj.val.toFixed(1);
          }
        },
        onComplete: () => {
          // Glow pulse when counting finishes
          gsap.fromTo(element,
            { textShadow: '0 0 20px rgba(255,255,255,0.8)' },
            { textShadow: '0 0 0px rgba(255,255,255,0)', duration: 0.8, ease: 'power2.out' }
          );
        }
      });
    });
  }, []);

  return (
    <section className="section dsa" id="dsa" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Competitive Programming</span>
          <h2 className="section-title">DSA & Coding Stats</h2>
          <div className="section-divider" />
        </div>

        <div className="dsa__grid">
          {/* Card 1: LeetCode */}
          <div className="dsa__card glass-card dsa__card--leetcode">
            <div className="dsa__card-header">
              <div className="dsa__platform">
                <span className="dsa__platform-icon">🔶</span>
                <h3>LeetCode</h3>
              </div>
              <a href="https://leetcode.com/u/gaurav_PH" target="_blank" rel="noopener noreferrer" className="dsa__profile-link">
                Profile ↗
              </a>
            </div>
            
            <div className="dsa__main-stat">
              <span className="dsa__number" data-target-count="527">0</span>
              <span className="dsa__label">Problems Solved</span>
            </div>

            <div className="dsa__stats-grid">
              <div className="dsa__sub-stat">
                <span className="dsa__sub-val"><span data-target-count="320">0</span> Medium</span>
              </div>
              <div className="dsa__sub-stat">
                <span className="dsa__sub-val"><span data-target-count="40">0</span> Hard</span>
              </div>
              <div className="dsa__sub-stat col-span-2">
                <span className="dsa__sub-label">Contest Rating:</span>
                <span className="dsa__sub-val font-highlight" data-target-count="1521">0</span>
              </div>
              <div className="dsa__sub-stat">
                <span className="dsa__sub-label">Global Top:</span>
                <span className="dsa__sub-val">38.4%</span>
              </div>
              <div className="dsa__sub-stat">
                <span className="dsa__sub-label">Badge:</span>
                <span className="dsa__sub-val text-accent">100 Days (2026)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Codeforces */}
          <div className="dsa__card glass-card dsa__card--codeforces">
            <div className="dsa__card-header">
              <div className="dsa__platform">
                <span className="dsa__platform-icon">🔵</span>
                <h3>Codeforces</h3>
              </div>
              <a href="https://codeforces.com/profile/gauravshivmurat2" target="_blank" rel="noopener noreferrer" className="dsa__profile-link">
                Profile ↗
              </a>
            </div>
            
            <div className="dsa__main-stat">
              <span className="dsa__number" data-target-count="998">0</span>
              <span className="dsa__label">Contest Rating</span>
            </div>

            <div className="dsa__stats-grid">
              <div className="dsa__sub-stat col-span-2">
                <span className="dsa__sub-label">Max Rating:</span>
                <span className="dsa__sub-val font-highlight">998 (Newbie)</span>
              </div>
              <div className="dsa__sub-stat col-span-2">
                <span className="dsa__sub-label">Current Rank:</span>
                <span className="dsa__sub-val text-muted">Newbie</span>
              </div>
            </div>
          </div>

          {/* Card 3: CodeChef */}
          <div className="dsa__card glass-card dsa__card--codechef">
            <div className="dsa__card-header">
              <div className="dsa__platform">
                <span className="dsa__platform-icon">🟢</span>
                <h3>CodeChef</h3>
              </div>
              <a href="https://www.codechef.com/users/gaurav_pr" target="_blank" rel="noopener noreferrer" className="dsa__profile-link">
                Profile ↗
              </a>
            </div>
            
            <div className="dsa__main-stat">
              <span className="dsa__number" data-target-count="1311">0</span>
              <span className="dsa__label">Rating (Div 3)</span>
            </div>

            <div className="dsa__stats-grid">
              <div className="dsa__sub-stat col-span-2">
                <span className="dsa__sub-label">Current Division:</span>
                <span className="dsa__sub-val font-highlight">Div 3</span>
              </div>
              <div className="dsa__sub-stat col-span-2">
                <span className="dsa__sub-label">Stars:</span>
                <span className="dsa__sub-val text-accent">2★</span>
              </div>
            </div>
          </div>

          {/* Card 4: GitHub */}
          <div className="dsa__card glass-card dsa__card--github">
            <div className="dsa__card-header">
              <div className="dsa__platform">
                <span className="dsa__platform-icon">🐈</span>
                <h3>GitHub</h3>
              </div>
              <a href="https://github.com/gaurav9479" target="_blank" rel="noopener noreferrer" className="dsa__profile-link">
                Profile ↗
              </a>
            </div>
            
            <div className="dsa__main-stat">
              <span className="dsa__number"><span data-target-count="790">0</span>+</span>
              <span className="dsa__label">Contributions (Last Year)</span>
            </div>

            <div className="dsa__stats-grid">
              <div className="dsa__sub-stat">
                <span className="dsa__sub-label">Repos:</span>
                <span className="dsa__sub-val font-highlight" data-target-count="26">0</span>
              </div>
              <div className="dsa__sub-stat">
                <span className="dsa__sub-label">Open Source:</span>
                <span className="dsa__sub-val" data-target-count="5">0</span>
              </div>
              <div className="dsa__sub-stat col-span-2">
                <span className="dsa__sub-label">Max Streak:</span>
                <span className="dsa__sub-val text-accent"><span data-target-count="65">0</span> Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
