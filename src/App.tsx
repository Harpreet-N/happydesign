import { useState, useEffect } from 'react';
import { BottomNavigation } from './components/BottomNavigation';
import { BentoGrid } from './components/BentoGrid';
import { ParallaxHero } from './components/ParallaxHero';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudy } from './components/CaseStudy';
import { ContactPage } from './components/ContactPage';
import { ImpressumPage } from './components/ImpressumPage';
import { DatenschutzPage } from './components/DatenschutzPage';

type Page = 'home' | 'about' | 'contact' | 'case-study' | 'impressum' | 'datenschutz';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentProject, setCurrentProject] = useState<string>('');

  // Intersection Observer to track which section is in view
  useEffect(() => {
    if (currentPage === 'case-study') return;

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
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    if (page === 'home') {
      setCurrentPage('home');
      setCurrentProject('');
      // Scroll to top when navigating to home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      // If we're not on home page, navigate to home first
      if (currentPage === 'case-study' || currentPage === 'impressum' || currentPage === 'datenschutz') {
        setCurrentPage('home');
        setCurrentProject('');
        setTimeout(() => {
          const element = document.getElementById('about');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If we're already on home, just scroll to about
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (page === 'contact') {
      // Handle contact navigation similar to about
      if (currentPage === 'case-study' || currentPage === 'impressum' || currentPage === 'datenschutz') {
        setCurrentPage('home');
        setCurrentProject('');
        setTimeout(() => {
          const element = document.getElementById('contact');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If we're already on home, just scroll to contact
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (page === 'impressum') {
      setCurrentPage('impressum');
      setCurrentProject('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'datenschutz') {
      setCurrentPage('datenschutz');
      setCurrentProject('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProjectClick = (slug: string) => {
    setCurrentProject(slug);
    setCurrentPage('case-study');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setCurrentProject('');
  };

  const handleProjectChange = (slug: string) => {
    setCurrentProject(slug);
  };

  return (
    <div className="min-h-screen bg-background">
      {(currentPage === 'home' || currentPage === 'about' || currentPage === 'contact') && (
        <>
          <ParallaxHero />
          <BentoGrid onProjectClick={handleProjectClick} />
          <AboutSection onNavigate={handleNavigate} />
          <ContactSection />
        </>
      )}
      
      {currentPage === 'case-study' && currentProject && (
        <CaseStudy 
          slug={currentProject}
          onBack={handleBackToHome}
          onProjectChange={handleProjectChange}
        />
      )}

      {currentPage === 'impressum' && (
        <ImpressumPage onBack={handleBackToHome} />
      )}

      {currentPage === 'datenschutz' && (
        <DatenschutzPage onBack={handleBackToHome} />
      )}

      <BottomNavigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}