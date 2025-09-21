import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation } from './components/BottomNavigation';
import { Home } from './components/Home';
import { CaseStudy } from './components/CaseStudy';
import { ImpressumPage } from './components/ImpressumPage';
import { DatenschutzPage } from './components/DatenschutzPage';

type Page = 'home' | 'about' | 'contact' | 'case-study' | 'impressum' | 'datenschutz';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const navigate = useNavigate();
  const location = useLocation();

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
    }
  }, [location.pathname]);

  const handleNavigate = (page: string) => {
    if (page === 'home') {
      navigate('/');
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
      </Routes>

      <BottomNavigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}