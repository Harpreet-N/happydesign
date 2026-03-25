import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface BottomNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNavigation({ currentPage, onNavigate }: BottomNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: 'home', label: language === 'de' ? 'ARBEITEN' : 'WORK' },
    { id: 'about', label: language === 'de' ? 'ÜBER MICH' : 'ABOUT' },
    { id: 'contact', label: language === 'de' ? 'KONTAKT' : 'CONTACT' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <nav className="bg-black border-2 border-black brutal-shadow-lg">
          <div className="flex items-center">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  px-6 py-4 font-grotesk font-bold text-sm uppercase tracking-wide hover-brutal transition-all duration-300
                  ${currentPage === item.id 
                    ? 'bg-yellow text-black' 
                    : 'bg-black text-white hover:bg-yellow hover:text-black'
                  }
                  ${index === 0 ? '' : 'border-l-2 border-black'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Footer with Legal Links */}
      <footer className="bg-black border-t-2 border-black">
        <div className="container mx-auto px-8 md:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white font-inter text-sm">
              {language === 'de' ? '© 2025 Harpreet. Alle Rechte vorbehalten.' : '© 2025 Harpreet. All rights reserved.'}
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a
                href="https://wa.me/4369918211764"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-yellow font-inter text-sm transition-colors duration-300"
              >
                {language === 'de' ? 'Auf WhatsApp schreiben' : 'Chat on WhatsApp'}
              </a>
              <button
                onClick={() => onNavigate('impressum')}
                className="text-stone hover:text-yellow font-inter text-sm transition-colors duration-300"
              >
                Impressum
              </button>
              <button
                onClick={() => onNavigate('datenschutz')}
                className="text-stone hover:text-yellow font-inter text-sm transition-colors duration-300"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}