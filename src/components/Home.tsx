import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BentoGrid } from './BentoGrid';
import { ParallaxHero } from './ParallaxHero';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';

type Page = 'home' | 'about' | 'contact';

export function Home() {
  const [, setCurrentPage] = useState<Page>('home');
  const navigate = useNavigate();

  // Intersection Observer to track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Create a map to track intersection states
        const intersectionMap = new Map();
        
        entries.forEach((entry) => {
          intersectionMap.set(entry.target.id, entry.isIntersecting);
        });
        
        // Determine which section should be active based on scroll position and intersections
        const heroSection = document.getElementById('hero-section');
        const aboutSection = document.getElementById('about');
        const contactSection = document.getElementById('contact');
        
        if (heroSection && aboutSection && contactSection) {
          const heroRect = heroSection.getBoundingClientRect();
          const aboutRect = aboutSection.getBoundingClientRect();
          const contactRect = contactSection.getBoundingClientRect();
          
          // Determine active section based on viewport position
          if (contactRect.top <= window.innerHeight * 0.5 && contactRect.bottom >= 0) {
            setCurrentPage('contact');
          } else if (aboutRect.top <= window.innerHeight * 0.5 && aboutRect.bottom >= window.innerHeight * 0.3) {
            setCurrentPage('about');
          } else if (heroRect.top <= window.innerHeight * 0.5 && heroRect.bottom >= 0) {
            if (aboutRect.top > window.innerHeight * 0.5) {
              setCurrentPage('home');
            } else {
              setCurrentPage('about');
            }
          } else if (heroRect.bottom > 0) {
            setCurrentPage('home');
          }
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for better detection
        rootMargin: '0px 0px 0px 0px' // Remove margins for more predictable behavior
      }
    );

    // Observe sections
    const heroSection = document.getElementById('hero-section');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
    
    if (heroSection) observer.observe(heroSection);
    if (aboutSection) observer.observe(aboutSection);
    if (contactSection) observer.observe(contactSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
      if (aboutSection) observer.unobserve(aboutSection);
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  /*
  const handleNavigate = (page: string) => {
    if (page === 'home') {
      setCurrentPage('home');
      // Scroll to top when navigating to home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      setCurrentPage('about');
      // Just scroll to about
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (page === 'contact') {
      setCurrentPage('contact');
      // Just scroll to contact
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
*/
  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  return (
    <>
      <ParallaxHero />
      <BentoGrid onProjectClick={handleProjectClick} />
      <AboutSection />
      <ContactSection />
    </>
  );
}
