import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { BottomNavigation } from './components/BottomNavigation';
import { Home } from './components/Home';
import { CaseStudy } from './components/CaseStudy';
import { ImpressumPage } from './components/ImpressumPage';
import { DatenschutzPage } from './components/DatenschutzPage';
import { ServicePage } from './components/ServicePage';
import { ServiceRedirect } from './components/ServiceRedirect';
import { LegacyHappydesignRedirect } from './components/LegacyHappydesignRedirect';
import { getServiceSlugFromPath } from './data/services';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SeoManager } from './components/SeoManager';

type Page = 'home' | 'about' | 'contact' | 'case-study' | 'impressum' | 'datenschutz' | 'service';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  // Update currentPage based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setCurrentPage('home');
    } else if (path.startsWith('/project/')) {
      setCurrentPage('case-study');
    } else if (path === '/impressum') {
      setCurrentPage('impressum');
    } else if (path === '/datenschutz') {
      setCurrentPage('datenschutz');
    } else if (getServiceSlugFromPath(path)) {
      setCurrentPage('service');
    }
  }, [location.pathname]);

  // While on the home route, update currentPage based on the section in view
  useEffect(() => {
    const path = location.pathname;
    if (path !== '/') return;

    const observer = new IntersectionObserver(
      () => {
        const heroSection = document.getElementById('hero-section');
        const aboutSection = document.getElementById('about');
        const contactSection = document.getElementById('contact');

        if (heroSection && aboutSection && contactSection) {
          const heroRect = heroSection.getBoundingClientRect();
          const aboutRect = aboutSection.getBoundingClientRect();
          const contactRect = contactSection.getBoundingClientRect();

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
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px 0px 0px 0px',
      }
    );

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
  }, [location.pathname]);

  const handleNavigate = (page: string) => {
    if (page === 'home') {
      navigate('/');
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      navigate('/');
      // Scroll to about section after navigation
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (page === 'contact') {
      navigate('/');
      // Scroll to contact section after navigation
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (page === 'impressum') {
      navigate('/impressum');
    } else if (page === 'datenschutz') {
      navigate('/datenschutz');
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoManager />
      <div className="fixed top-6 right-6 z-[60]">
        <div className="flex items-center bg-black border-2 border-black brutal-shadow-sm">
          <button
            onClick={() => setLanguage('de')}
            className={`px-4 py-2 font-grotesk font-bold text-xs uppercase tracking-wide transition-all duration-300 ${
              language === 'de' ? 'bg-yellow text-black' : 'bg-black text-white hover:bg-yellow hover:text-black'
            }`}
          >
            DE
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 font-grotesk font-bold text-xs uppercase tracking-wide border-l-2 border-black transition-all duration-300 ${
              language === 'en' ? 'bg-yellow text-black' : 'bg-black text-white hover:bg-yellow hover:text-black'
            }`}
          >
            EN
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/project/:slug" 
          element={<CaseStudy />} 
        />
        <Route 
          path="/impressum" 
          element={<ImpressumPage onBack={handleBackToHome} />} 
        />
        <Route 
          path="/datenschutz" 
          element={<DatenschutzPage onBack={handleBackToHome} />} 
        />
        <Route path="/services/:slug" element={<ServiceRedirect />} />
        <Route path="/happydesign" element={<Navigate to="/" replace />} />
        <Route path="/happydesign/*" element={<LegacyHappydesignRedirect />} />
        <Route
          path="/:slug"
          element={<ServicePage onBack={handleBackToHome} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {currentPage !== 'service' && (
        <BottomNavigation
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}